import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import Image from 'next/image';
import colors from '@src/styles/colors';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';

import BossPng1 from '@src/assets/bosses/bs1.png';
import BossPng2 from '@src/assets/bosses/bs2.png';
import BossPng3 from '@src/assets/bosses/bs3.png';
import BossPng4 from '@src/assets/bosses/bs4.png';
import BossPng5 from '@src/assets/bosses/bs5.png';
import BossPng6 from '@src/assets/bosses/bs6.png';
import BossPng7 from '@src/assets/bosses/bs7.png';
import BossPng8 from '@src/assets/bosses/bs8.png';
import BossPng9 from '@src/assets/bosses/bs9.png';
import BossPng10 from '@src/assets/bosses/bs10.png';
import BossPng11 from '@src/assets/bosses/bs11.png';
import BossPng12 from '@src/assets/bosses/bs12.png';
import BossPng13 from '@src/assets/bosses/bs13.png';
import BossPng14 from '@src/assets/bosses/bs14.png';
import BossPng15 from '@src/assets/bosses/bs15.png';
import BossPng16 from '@src/assets/bosses/bs16.png';
import BossPng17 from '@src/assets/bosses/bs17.png';
import BossPng18 from '@src/assets/bosses/bs18.png';
import BossPng19 from '@src/assets/bosses/bs19.png';
import BossPng20 from '@src/assets/bosses/bs20.png';

var BossPngs = [];
BossPngs.push(BossPng1);
BossPngs.push(BossPng2);
BossPngs.push(BossPng3);
BossPngs.push(BossPng4);
BossPngs.push(BossPng5);
BossPngs.push(BossPng6);
BossPngs.push(BossPng7);
BossPngs.push(BossPng8);
BossPngs.push(BossPng9);
BossPngs.push(BossPng10);
BossPngs.push(BossPng11);
BossPngs.push(BossPng12);
BossPngs.push(BossPng13);
BossPngs.push(BossPng14);
BossPngs.push(BossPng15);
BossPngs.push(BossPng16);
BossPngs.push(BossPng17);
BossPngs.push(BossPng18);
BossPngs.push(BossPng19);
BossPngs.push(BossPng20);

var bosses = [];

class BossBlocks extends React.Component {
    constructor(props) {
        super(props);
        this.getBossData();
    }

    getBossData() {
        var bossRef = ref(database, 'boss');
        onValue(bossRef, (snapshot) => {
            var index = 0;
            snapshot.forEach((dinoSnapshot) => {
                var boss = {
                    name: '',
                    startdate: '',
                    enddate: '',
                    imgnum: 0
                }
                dinoSnapshot.forEach((semiSnapshot) => {
                    switch (semiSnapshot.key) {
                        case 'name':
                            boss.name = semiSnapshot.val();
                            break;
                        case 'startdate':
                            boss.startdate = semiSnapshot.val();
                            break;
                        case 'enddate':
                            boss.enddate = semiSnapshot.val();
                            break;
                        case 'image':
                            boss.imgnum = Number(semiSnapshot.val().substr(2, semiSnapshot.val().length));
                            break;
                    }
                });
                bosses[index] = boss;
                index++;
            });
            this.setState({
                bosses: bosses
            });
        });
    }

    render() {
        if (this.state === null) return [];
        const blocks = [];
        for (let i = 0; i < this.state.bosses.length; i++) {
            blocks.push(
                <li css={css`
                    list-style-type: none;
                    display: inline-block;
                    background-color: #1d2026;
                    width: 33.333333%;
                    vertical-align: top;
                `} key={'bsb'+i}>
                    <div css={css`
                        width: 100%;
                        height: 100%;
                        position: relative;
                    `}>
                        <Image src={BossPngs[this.state.bosses[i].imgnum-1]} alt={'bsli'+i} layout='responsive' objectFit='contain'/>
                    </div>
                    <p css={css`
                        margin: 0;
                        padding: 10px;
                        text-align: center;
                        font-weight: bold;
                        color: ${colors.object_title};
                        font-size: ${fontsize.title}pt;
                    `}>{this.state.bosses[i].name}</p>
                    <p css={css`
                        margin: 0;
                        padding: 10px;
                        text-align: center;
                        font-size: ${fontsize.content}pt;
                    `}>{this.state.bosses[i].startdate+' ~ '+this.state.bosses[i].enddate}</p>
                </li>
            );
        }
        return blocks;
    }
}

export default BossBlocks;