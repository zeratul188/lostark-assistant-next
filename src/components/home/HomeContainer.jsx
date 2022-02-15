import {css} from '@emotion/react';

import MainContainer from '@src/components/home/MainContainer'
import SubContainer from '@src/components/home/SubContainer'
import breakpoints from '@src/styles/breakpoints';

const HomeContainer = () => {
    return (
        <div css={css`
        width: 100%;
        display: grid;
        margin-top: 50px;
        grid-template-rows: 1fr 30px 1fr;
        grid-template-columns: 1;

        @media screen and (min-width: ${breakpoints.tablet}) {
          margin-top: 100px;
        }

        @media screen and (min-width: ${breakpoints.maxblock}) {
          width: 1200px;
          grid-template-columns: 3fr 30px 1fr;
          grid-template-rows: 1;
        }
      `} >
        <MainContainer/>
        <div/>
        <SubContainer />
      </div>
    )
}

export default HomeContainer;