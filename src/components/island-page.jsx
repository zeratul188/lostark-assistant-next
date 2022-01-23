import {css} from '@emotion/react';
import Image from 'next/image';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from './BlockContent';
import IslandBlock from './IslandBlock';

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyCF9HsrXVCPvKQR0iZSI5ID-XdPX-xeg30",
  authDomain: "lostarkhub-cbe60.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "lostarkhub-cbe60.appspot.com"
};

const firebase = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(firebase);

var islands = ['하모니 섬', '볼라르 섬', '고요한 안식의 섬', '죽음의 협곡', '포르페', '블루홀 섬', '기회의 섬', '몬테섬', '수라도', '메데이아', '우거진 갈대의 섬'];
var awards = [
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

/*
var database = firebase.database();
var islandRef = database.ref('island');
islandRef.on('value', (snapshot) => {
    var index = 0;
    snapshot.forEach((dinoSnapshot) => {
        dinoSnapshot.forEach((semiSnapshot) => {
            if (semiSnapshot.key === 'image') {
                alert('images/island/'+semiSnapshot.val()+'.png');
            } else if (semiSnapshot.key === 'name') {
                islandNames[index].textContent = semiSnapshot.val();
            } else if (semiSnapshot.key === 'award') {
                var now_awards = semiSnapshot.val().split('|');
                var now_index = 0;
                for (var award of now_awards) {
                    islandAwards[index][now_index].src = 'images/island-awards/ii'+(awards.indexOf(award)+1)+'.png';
                    now_index++;
                }
                for (let i = now_index; i < islandAwards[index].length; i++) {
                    islandAwards[index][i].style.display = 'none';
                }
            }
        });
        index++;
    });
});*/

const IslandContainer = () => {
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
                <IslandBlock art='island1'/>
                <IslandBlock art='island2'/>
                <IslandBlock art='island3'/>
            </BlockContent>
        </>
    );
}

/*const centerDiv = (props) => {
    return (
        <div {...props} />
    )
}*/

export default IslandContainer