import {css} from '@emotion/react';
import Image from 'next/image';

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

const IslandBlock = (props) => {
    return (
        <div css={css`
            display: grid;
            grid-template-columns: 1fr 2fr;
        `}>
            <Image src={IslandPng1} alt='island1'/>
            <div css={css`
                padding: 10px;
            `}>
                helloworld
            </div>
        </div>
    )
}

export default IslandBlock