import {css} from '@emotion/react';

import StoneSimulContainer from './StoneSimulContainer';

const StoneMainContainer = () => {
    return (
        <div css={css`
            width: 100%;
        `}>
            <StoneSimulContainer />
        </div>
    )
}

export default StoneMainContainer;