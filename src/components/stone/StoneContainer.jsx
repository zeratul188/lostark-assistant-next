import {css} from '@emotion/react';

import breakpoints from '@src/styles/breakpoints';
import StoneMainContainer from './StoneMainContainer';
import StoneSubContainer from './StoneSubContainer';

const StoneContainer = () => {
    return (
        <div css={css`
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 30px 1fr;
        grid-template-columns: 1;

        @media screen and (min-width: ${breakpoints.maxblock}) {
          width: 1200px;
          grid-template-columns: 2fr 30px 1fr;
          grid-template-rows: 1;
        }
      `} >
        <StoneMainContainer/>
        <div/>
        <StoneSubContainer />
      </div>
    )
}

export default StoneContainer;