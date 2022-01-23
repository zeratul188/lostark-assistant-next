import {css} from '@emotion/react';

import IslandContainer from '@src/components/island-page';

const MainContainer = () => {
    return (
        <div css={css`
            width: 100%;
        `}>
            <IslandContainer />
        </div>
    )
}

export default MainContainer