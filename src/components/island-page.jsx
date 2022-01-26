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
        this.setState({
            islands: []
        });
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
                    `}>2022년 19시에 시작</span>
                    <span css={css`
                        float: right;
                        font-size: ${fontsize.title}pt;
                    `}>2시간 20분 28초</span>
                </BlockTitle>
                <BlockContent>
                    <IslandBlocks />
                </BlockContent>
            </>
        );
    }
}

export default IslandContainer