import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import Image from 'next/image';
import colors from '@src/styles/colors';
import breakpoints from '@src/styles/breakpoints';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';
import storage from '@src/scripts/firebase-storage';
import { getDownloadURL, ref as storageReference } from "firebase/storage";

import EmptyIslandPng from '@src/assets/empty-island.png';

var bosses = [];

class BossBlocks extends React.Component {
    constructor(props) {
        super(props);
        this.getBossData();
    }

    getBossData() {
        var bossRef = ref(database, 'boss');
        onValue(bossRef, (snapshot) => {
            snapshot.forEach((dinoSnapshot) => {
                var boss = {
                    name: '',
                    startdate: '',
                    enddate: '',
                    imgurl: ''
                }
                let num = 0;
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
                            num = Number(semiSnapshot.val().substr(2, semiSnapshot.val().length));
                            break;
                    }
                });
                getDownloadURL(storageReference(storage, 'Assets/Bosses/bs'+num+'.png')).then((url) => {
                    boss.imgurl = url;
                    this.setState({
                        bosses: bosses
                    });
                }).catch((error) => {
                    // Handle any errors
                });
                bosses.push(boss);
            });
            this.setState({
                bosses: bosses
            });
        });
    }

    getBossImage(index) {
        if (this.state.bosses[index].imgurl === '') {
            return EmptyIslandPng;
        } else {
            return this.state.bosses[index].imgurl;
        }
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
                    vertical-align: top;
                `} key={'bsb'+i}>
                    <div css={css`
                        width: 100%;
                        position: relative;
                        width: 100%;
                        height: 24.5vw;
                        position: relative;

                        @media screen and (min-width: ${breakpoints.maxblock}) {
                            height: 230px;
                        }
                    `}>
                        <Image src={this.getBossImage(i)} alt={'bsli'+i} layout='fill' objectFit='fill'/>
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