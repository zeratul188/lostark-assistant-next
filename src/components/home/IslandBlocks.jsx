import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';
import IslandBlock from './IslandBlock';

import database from '@src/scripts/firebase-database';
import { ref, onValue } from "firebase/database";
import React, { useEffect } from 'react';
import storage from '@src/scripts/firebase-storage';
import { getDownloadURL, ref as storageReference } from "firebase/storage";

var islands = [];
var islandStrings = ['하모니 섬', '볼라르 섬', '고요한 안식의 섬', '죽음의 협곡', '포르페', '블루홀 섬', '기회의 섬', '몬테섬', '수라도', '메데이아', '우거진 갈대의 섬', '환영 나비 섬', '쿵덕쿵 아일랜드', '스노우팡 아일랜드'];
var awardStrings = [
    '골드',
    '실링',
    '대양의 주화 상자',
    '카드 팩',
    '영혼의 잎사귀',
    '섬의 마음',
    '인연의 돌',
    '해적 주화',
    '크림스네일의 동전',
    '선혈의 조각',
    '조사용 토끼발 망치',
    '천상의 하모니',
    '황혼의 레퀴엠',
    '비밀지도',
    '희귀 수호 룬',
    '영웅 수호 룬',
    '영웅 풍요 룬',
    '모험물 : 환영나비',
    '모험물 : 죽은 자의 눈',
    '모험물 : 의문의 상자',
    '아드린느 카드',
    '수신 아포라스 카드',
    '탈 것 : 붉은 갈기 늑대'
];

class IslandBlocks extends React.Component {
    constructor(props) {
        super(props);
        var nullIslands = new Array(3).fill(
            {
                imgurl: '',
                name: '',
                awards: []
            });
        this.state = {
            islands: nullIslands
        }
        this.isComponentMounted = false;
        this.getIslandData();
    }

    getIslandData() {
        var islandRef = ref(database, 'island');
        onValue(islandRef, (snapshot) => {
            islands = [];
            snapshot.forEach((dinoSnapshot) => {
                var island = {
                    imgurl: '',
                    name: '',
                    awards: []
                }
                var texts = [];
                dinoSnapshot.forEach((semiSnapshot) => {
                    if (semiSnapshot.key === 'name') {
                        island.name = semiSnapshot.val();
                    } else if (semiSnapshot.key === 'award') {
                        texts = semiSnapshot.val().split('|');
                    }
                });
                const position = islandStrings.indexOf(island.name);
                getDownloadURL(storageReference(storage, 'Assets/Island/is'+(position+1)+'.png')).then((url) => {
                    island.imgurl = url;
                }).catch((error) => {
                    // Handle any errors
                });
                var urls = [];
                for (let i = 0; i < texts.length; i++) {
                    const award_position = awardStrings.indexOf(texts[i]);
                    getDownloadURL(storageReference(storage, 'Assets/IslandAwards/ii'+(award_position+1)+'.png')).then((url) => {
                        island.awards.push(url);
                    }).catch((error) => {
                        island.awards.push('');
                    });
                }
                islands.push(island);
            });

            if (this.isComponentMounted) {
                this.setState({
                    islands: islands
                });
            }
            
        });
    }

    componentDidMount = () => {
        this.isComponentMounted = true;
        this.getIslandData();
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
    }

    render() {
        if (this.state === null) return [];
        const blocks = [];
        for (let i = 0; i < this.state.islands.length; i++) {
            blocks.push(
                <IslandBlock island={this.state.islands[i]} index={i} key={'isb'+i}/>
            );
        }
        return blocks;
    }
}

class IslandContainer extends React.Component {
    constructor(props) {
        super(props);
        this.str = '';
        this.state = {
            time: 0
        };
        this.isComponentMounted = false;
        this.setStartDate();
    }

    componentDidMount = () => {
        this.isComponentMounted = true;
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
    }

    startTimeThread(date) {
        var now = new Date();
        let time = date.getTime() - now.getTime();
        time = Math.floor(time/1000);
        var interval = setInterval(() => {
            if (time <= 0) {
                clearInterval(interval);
            }
            time--;
            if (this.isComponentMounted) {
                this.setState({
                    time: time
                });
            }
        }, 1000);
    }

    setStartDate() {
        var today = new Date();
        let now_hour = today.getHours();
        let day = today.getDay();
        var next_hour = 0;

        if (now_hour < 9) {
            if (day === 0 || day === 6) {
                next_hour = 9;
            } else {
                next_hour = 11;
            }
        } else if (now_hour >= 9 && now_hour < 11) {
            next_hour = 11;
        } else if (now_hour >= 11 && now_hour < 13) {
            next_hour = 13;
        } else if (now_hour >= 13 && now_hour < 19) {
            next_hour = 19;
        } else if (now_hour >= 19 && now_hour < 21) {
            next_hour = 21;
        } else if (now_hour >= 21 && now_hour < 23) {
            next_hour = 23;
        } else {
            today.setDate(today.getDate()+1);
            day = today.getDay();
            if (day === 0 || day === 6) {
                next_hour = 9;
            } else {
                next_hour = 11;
            }
        }

        var str = '';
        str += today.getFullYear()+'년 ';
        str += (today.getMonth()+1)+'월 ';
        str += today.getDate()+'일 ';
        str += next_hour+'시에 시작';

        today.setHours(next_hour);
        today.setMinutes(0);
        today.setSeconds(0);
        this.str = str;
        this.startTimeThread(today);
    }

    getTimeString(time) {
        var str = '';
        if (Math.floor(time/3600) !== 0) {
            str += Math.floor(time/3600)+'시간 ';
        }
        time %= 3600;
        if (Math.floor(time/60) !== 0) {
            str += Math.floor(time/60)+'분 ';
        }
        time %= 60;
        if (time !== 0) {
            str += time+'초';
        }

        if (str === '') {
            str = '출현 중';
        }
        return str;
    }

    render() {
        return (
            <>
                <BlockTitle>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>모험섬</strong>
                    <span css={css`
                        margin-left: 20px;
                        font-size: ${fontsize.title}pt;
                        color: ${colors.object_sub};
                    `}>{this.str}</span>
                </BlockTitle>
                <BlockContent css={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1;
                `}>
                    <IslandBlocks />
                </BlockContent>
                <div css={css`
                    width: 100%;
                    font-size: ${fontsize.title}pt;
                    text-align: center;
                    background-color: #1d2026;
                `}>
                    <div css={css`
                        color: ${colors.object_sub};
                        font-size: ${fontsize.small_content}pt;
                    `}>남은 시간</div>
                    <div css={css`
                        color: ${colors.entersix};
                        margin-top: 5px;
                        padding-bottom: 10px;
                    `}>{this.getTimeString(this.state.time)}</div>
                </div>    
            </>
        );
    }
}

export default IslandContainer