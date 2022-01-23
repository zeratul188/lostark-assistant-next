import {css} from '@emotion/react';
import Image from 'next/image';
import breakpoints from '@src/styles/breakpoints';

import IslandPng1 from '@src/assets/island/is1.png';
import IslandPng2 from '@src/assets/island/is2.png';
import IslandPng3 from '@src/assets/island/is3.png';
import IslandPng4 from '@src/assets/island/is4.png';
import IslandPng5 from '@src/assets/island/is5.png';
import IslandPng6 from '@src/assets/island/is6.png';
import IslandPng7 from '@src/assets/island/is7.png';
import IslandPng8 from '@src/assets/island/is8.png';
import IslandPng9 from '@src/assets/island/is9.png';
import IslandPng10 from '@src/assets/island/is10.png';
import IslandPng11 from '@src/assets/island/is11.png';
import IslandPng12 from '@src/assets/island/is12.png';
import IslandPng13 from '@src/assets/island/is13.png';
import IslandPng14 from '@src/assets/island/is14.png';

import AwardPng1 from '@src/assets/island-awards/ii1.png';
import AwardPng2 from '@src/assets/island-awards/ii2.png';
import AwardPng3 from '@src/assets/island-awards/ii3.png';
import AwardPng4 from '@src/assets/island-awards/ii4.png';
import AwardPng5 from '@src/assets/island-awards/ii5.png';
import AwardPng6 from '@src/assets/island-awards/ii6.png';
import AwardPng7 from '@src/assets/island-awards/ii7.png';
import AwardPng8 from '@src/assets/island-awards/ii8.png';
import AwardPng9 from '@src/assets/island-awards/ii9.png';
import AwardPng10 from '@src/assets/island-awards/ii10.png';
import AwardPng11 from '@src/assets/island-awards/ii11.png';
import AwardPng12 from '@src/assets/island-awards/ii12.png';
import AwardPng13 from '@src/assets/island-awards/ii13.png';
import AwardPng14 from '@src/assets/island-awards/ii14.png';
import AwardPng15 from '@src/assets/island-awards/ii15.png';
import AwardPng16 from '@src/assets/island-awards/ii16.png';
import AwardPng17 from '@src/assets/island-awards/ii17.png';
import AwardPng18 from '@src/assets/island-awards/ii18.png';
import AwardPng19 from '@src/assets/island-awards/ii19.png';
import AwardPng20 from '@src/assets/island-awards/ii20.png';
import AwardPng21 from '@src/assets/island-awards/ii21.png';
import AwardPng22 from '@src/assets/island-awards/ii22.png';
import AwardPng23 from '@src/assets/island-awards/ii23.png';

var AwardPngs = [];
AwardPngs.push(AwardPng1);
AwardPngs.push(AwardPng2);
AwardPngs.push(AwardPng3);
AwardPngs.push(AwardPng4);
AwardPngs.push(AwardPng5);
AwardPngs.push(AwardPng6);
AwardPngs.push(AwardPng7);
AwardPngs.push(AwardPng8);
AwardPngs.push(AwardPng9);
AwardPngs.push(AwardPng10);
AwardPngs.push(AwardPng11);
AwardPngs.push(AwardPng12);
AwardPngs.push(AwardPng13);
AwardPngs.push(AwardPng14);
AwardPngs.push(AwardPng15);
AwardPngs.push(AwardPng16);
AwardPngs.push(AwardPng17);
AwardPngs.push(AwardPng18);
AwardPngs.push(AwardPng19);
AwardPngs.push(AwardPng20);
AwardPngs.push(AwardPng21);
AwardPngs.push(AwardPng22);
AwardPngs.push(AwardPng23);

var IslandPngs = [];
IslandPngs.push(IslandPng1);
IslandPngs.push(IslandPng2);
IslandPngs.push(IslandPng3);
IslandPngs.push(IslandPng4);
IslandPngs.push(IslandPng5);
IslandPngs.push(IslandPng6);
IslandPngs.push(IslandPng7);
IslandPngs.push(IslandPng8);
IslandPngs.push(IslandPng9);
IslandPngs.push(IslandPng10);
IslandPngs.push(IslandPng11);
IslandPngs.push(IslandPng12);
IslandPngs.push(IslandPng13);
IslandPngs.push(IslandPng14);

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

function formatPosition(awards) {
    var awardPositions = [];
    for (var award of awards) {
        if (awardStrings.indexOf(award) !== -1) awardPositions.push(awardStrings.indexOf(award));
    }
    return awardPositions;
}

const AwardBlock = (props) => {
    const blocks = [];
    for (let i = 0; i < formatPosition(props.awards).length; i++) {
        blocks.push(
            <Image src={AwardPngs[formatPosition(props.awards)[i]]} width={40} height={40} key={i}/>
        )
    }
    return blocks;
}

function findImage(name) {
    if (islandStrings.indexOf(name) !== -1) return islandStrings.indexOf(name);
    else return 0;
}

const IslandBlock = (props) => {
    return (
        <div css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;

            @media screen and (min-width: ${breakpoints.tablet}) {
                grid-template-columns: 1fr 2fr;
            }
        `}>
            <Image src={IslandPngs[findImage(props.island.name)]} alt='island1' key={findImage(props.island.name)}/>
            <div css={css`
                padding: 10px;
                margin-left: 10px;
            `}>
                <p css={css`
                    color: #FFCA45;
                    margin: 0;
                    font-size: 14pt;
                `}>{props.island.name}</p>
                <p css={css`
                    font-size: 10pt;
                    color: #AAAAAA;
                    margin: 0;
                    padding-top: 10px;
                    padding-bottom: 5px;
                `}>보상 내용</p>
                <div css={css`
                    display: inline-block;
                `}>
                    <AwardBlock awards={props.island.awards}/>
                </div>
            </div>
        </div>
    );
}

export default IslandBlock