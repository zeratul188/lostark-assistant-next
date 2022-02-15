import {css} from '@emotion/react'
import React from 'react';

import breakpoints from '@src/styles/breakpoints';
import HomeContainer from '@src/components/home/HomeContainer';

class Home extends React.Component {

  render() {
    return (
      <>
        <div css={css`
          display: flex;
          justify-content: center;
          padding: 10px;

          @media screen and (min-width: ${breakpoints.tablet}) {
            padding: 20px;
          }
        `}>

          <HomeContainer />

        </div>
      </>
    );
  }
}

export default Home;

/*
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

          <BrowserRouter>
            <Route path='/' component={HomeContainer} exact/>
          </BrowserRouter>

        </div>
      </>
  )
}
*/