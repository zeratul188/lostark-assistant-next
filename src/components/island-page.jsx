import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from './BlockContent';
import IslandBlock from './IslandBlock';

import database from '@src/scripts/firebase-database';
import { ref, onValue } from "firebase/database";
import React from 'react';

var islands = [];

class IslandBlocks extends React.Component {
    constructor(props) {
        super(props);
        this.getIslandData();
    }

    getIslandData() {
        var islandRef = ref(database, 'island');
        onValue(islandRef, (snapshot) => {
            var index = 0;
            snapshot.forEach((dinoSnapshot) => {
                var island = {
                    imgurl: '',
                    name: '',
                    awards: []
                }
                dinoSnapshot.forEach((semiSnapshot) => {
                    if (semiSnapshot.key === 'image') {
                        island.imgurl = semiSnapshot.val().substr(2, semiSnapshot.val().length);
                    } else if (semiSnapshot.key === 'name') {
                        island.name = semiSnapshot.val();
                    } else if (semiSnapshot.key === 'award') {
                        island.awards = semiSnapshot.val().split('|');
                    }
                });
                islands[index] = island;
                index++;
            });
            this.setState({
                islands: islands
            });
        });
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
        this.setStartDate();
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
            this.setState({
                time: time
            });
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
                    <span css={css`
                        float: right;
                        font-size: ${fontsize.title}pt;
                        color: ${colors.entersix};
                    `}>{this.getTimeString(this.state.time)}</span>
                </BlockTitle>
                <BlockContent>
                    <IslandBlocks />
                </BlockContent>
            </>
        );
    }
}

export default IslandContainer