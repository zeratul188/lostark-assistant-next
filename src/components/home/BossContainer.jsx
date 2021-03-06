import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';
import BossBlocks from './BossBlocks';

const BossContainer = () => {
    return (
        <>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>도전 가디언 토벌</strong>
                </BlockTitle>
                <BlockContent>
                    <ul css={css`
                        margin: 0;
                        padding: 0;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                    `}>
                        <BossBlocks />
                    </ul>
                </BlockContent>
            </>
    );
}

export default BossContainer;