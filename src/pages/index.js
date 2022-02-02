import {css} from '@emotion/react'

import MainContainer from '@src/components/MainContainer'
import SubContainer from '@src/components/SubContainer'
import breakpoints from '@src/styles/breakpoints';
import Head from 'next/head';

export default function Home() {
  return (
      <>
        <Head>
          <title>로스트아크 어시스턴트</title>
        </Head>
        <div css={css`
          display: flex;
          justify-content: center;
          padding: 10px;

          @media screen and (min-width: ${breakpoints.tablet}) {
            padding: 20px;
          }
        `}>
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
        </div>
      </>
  )
}
