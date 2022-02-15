import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import Image from 'next/image';
import colors from '@src/styles/colors';
import breakpoints from '@src/styles/breakpoints';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';
import React from 'react';

class StoneContainer extends React.Component {

    render() {
        return (
            <>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>증가 옵션</strong>
                </BlockTitle>
                <BlockContent padding='10px'>
                    
                </BlockContent>
            </>
        )
    }
}

export default StoneContainer;