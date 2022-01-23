import {css} from '@emotion/react'

import MainContainer from '@src/components/main-container'
import SubContainer from '@src/components/sub-container'
import breakpoints from '@src/styles/breakpoints';

export default function Home() {
  return (
      <>
        <div css={css`
          display: flex;
          justify-content: center;
          padding: 20px;
        `}>
          <div css={css`
            width: 100%;
            display: grid;
            grid-template-rows: 1fr 30px 1fr;
            grid-template-columns: 1;

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
        </div>
      </>
  )
}
