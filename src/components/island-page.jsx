import {css} from '@emotion/react';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from './BlockContent';
import IslandBlock from './IslandBlock';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import React from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCF9HsrXVCPvKQR0iZSI5ID-XdPX-xeg30",
    authDomain: "lostarkhub-cbe60.firebaseapp.com",
    databaseURL: "https://lostarkhub-cbe60-default-rtdb.firebaseio.com",
    storageBucket: "lostarkhub-cbe60.appspot.com"
};

var firebase = initializeApp(firebaseConfig);
var database = getDatabase(firebase);

var islands = [];

class IslandBlocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islands: []
        }
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
        const blocks = [];
        for (let i = 0; i < this.state.islands.length; i++) {
            blocks.push(
                <IslandBlock island={this.state.islands[i]}/>
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
                    <strong>모험섬</strong>
                    <span css={css`
                        margin-left: 20px;
                    `}>2022년 19시에 시작</span>
                    <span css={css`
                        float: right;
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