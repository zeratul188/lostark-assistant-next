import {css} from '@emotion/react';

import IslandContainer from '@src/components/island-page';
import BossContainer from './BossContainer';
import DungeonContainer from './DungeonContainer';

const MainContainer = () => {
    return (
        <div css={css`
            width: 100%;
        `}>
            <IslandContainer />
            <BossContainer />
            <DungeonContainer />
        </div>
    )
}

export default MainContainer