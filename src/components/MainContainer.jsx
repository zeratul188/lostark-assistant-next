import {css} from '@emotion/react';

import IslandContainer from '@src/components/island-page';
import BossContainer from './BossContainer';

const MainContainer = () => {
    return (
        <div css={css`
            width: 100%;
        `}>
            <IslandContainer />
            <BossContainer />
        </div>
    )
}

export default MainContainer