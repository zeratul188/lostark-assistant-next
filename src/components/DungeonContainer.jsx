import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';
import Image from 'next/image';

import BlockTitle from './BlockTitle';
import BlockContent from './BlockContent';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';

import DungeonPng1 from '@src/assets/dungeons/dg1.png';
import DungeonPng2 from '@src/assets/dungeons/dg2.png';
import DungeonPng3 from '@src/assets/dungeons/dg3.png';

var DungeonPngs = [];
DungeonPngs.push(DungeonPng1);
DungeonPngs.push(DungeonPng2);
DungeonPngs.push(DungeonPng3);

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
        this.state = {
            name: [],
            reycle: 1,
            date: ''
        };
        this.syncFirebase();
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
            if (startdate !== '') {
                var date = new Date(startdate);
                var str = date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일 ~ ";
                date.setDate(date.getDate()+14);
                str += date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일";
                this.setState({
                    name: [dungeons[2*(reycle-1)], dungeons[2*(reycle-1)+1]],
                    reycle: reycle,
                    date: str
                });
            }
        });
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
                        height: 100%;
                        position: relative;
                    `}>
                        <Image src={DungeonPngs[this.state.reycle-1]} alt={'dungeonImg'} layout='responsive' objectFit='contain'/>
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