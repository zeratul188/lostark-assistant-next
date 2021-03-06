import {css} from '@emotion/react';

import IslandContainer from './IslandBlocks';
import BossContainer from './BossContainer';
import DungeonContainer from './DungeonContainer';
import EventContainer from './EventContainer';

const MainContainer = () => {
    return (
        <div css={css`
            width: 100%;
        `}>
            <IslandContainer />
            <BossContainer />
            <DungeonContainer />
            <EventContainer />
        </div>
    )
}

export default MainContainer