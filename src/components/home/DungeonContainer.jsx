import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';
import Image from 'next/image';
import breakpoints from '@src/styles/breakpoints';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';
import storage from '@src/scripts/firebase-storage';
import { getDownloadURL, ref as storageReference } from "firebase/storage";

import EmptyIslandPng from '@src/assets/empty-island.png';

var dungeons = [
    '마수의 골짜기',
    '사령술사의 근원',
    '비틀린 군주의 회랑',
    '몽환궁전 힐데브리뉴',
    '탄식의 길',
    '추락한 긍지의 용광로'
];

class DungeonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.isComponentMounted = false;
        this.state = {
            name: [],
            reycle: 1,
            date: '',
            imgurl: ''
        };
        this.syncFirebase();
    }

    componentDidMount = () => {
        this.isComponentMounted = true;
        this.syncFirebase();
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
    }

    syncFirebase() {
        var dungeonRef = ref(database, 'dungeon');
        onValue(dungeonRef, (snapshot) => {
            var startdate = '', reycle = 1;
            snapshot.forEach((dinoSnapshot) => {
                switch(dinoSnapshot.key) {
                    case 'date':
                        startdate = dinoSnapshot.val();
                        break;
                    case 'recycle':
                        reycle = Number(dinoSnapshot.val());
                        break;
                }
            });
            getDownloadURL(storageReference(storage, 'Assets/Dungeon/dg'+reycle+'.png')).then((url) => {
                if (this.isComponentMounted) {
                    this.setState({
                        imgurl: url
                    });
                }
            }).catch((error) => {
                // Handle any errors
            });
            if (startdate !== '') {
                var date = new Date(startdate);
                var str = date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일 ~ ";
                date.setDate(date.getDate()+14);
                str += date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일";
                if (this.isComponentMounted) {
                    this.setState({
                        name: [dungeons[2*(reycle-1)], dungeons[2*(reycle-1)+1]],
                        reycle: reycle,
                        date: str
                    });
                }
            }
        });
    }

    getDungeonImage() {
        if (this.state.imgurl === '') {
            return EmptyIslandPng;
        } else {
            return this.state.imgurl;
        }
    }

    render() {
        return(
            <>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>도전 어비스 던전</strong>
                </BlockTitle>
                <BlockContent>
                    <div css={css`
                        width: 100%;
                        height: 40vw;
                        position: relative;

                        @media screen and (min-width: ${breakpoints.maxblock}) {
                            height: 360px;
                        }
                    `}>
                        <Image src={this.getDungeonImage()} alt={'dungeonImg'} layout='fill' objectFit="fill"/>
                    </div>
                    <div css={css`
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        color: ${colors.object_title};
                        text-align: center;
                        padding: 10px;
                    `}>
                        <span>{this.state.name[0]}</span>
                        <span>{this.state.name[1]}</span>
                    </div>
                    <div css={css`
                        text-align: center;
                        padding: 10px;
                    `}>
                        {this.state.date}
                    </div>
                </BlockContent>
            </>
        );
    }
}

export default DungeonContainer;