import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';
import breakpoints from '@src/styles/breakpoints';

import React from 'react';
import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

class StoneSimulContainer extends React.Component {

    render() {
        return (
            <>
                <BlockTitle>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>증가 옵션</strong>
                </BlockTitle>
                <BlockContent padding='10px'>
                    <div css={css`
                        display: grid;
                    `}>

                    </div>
                </BlockContent>
            </>
        )
    }
}

export default StoneSimulContainer;