import {css} from '@emotion/react'
import React from 'react';
import breakpoints from '@src/styles/breakpoints';

import StoneContainer from '@src/components/StoneContainer';

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
  
            <div css={css`
                width: 100%;
                margin-top: 60px;

                @media screen and (min-width: ${breakpoints.tablet}) {
                    margin-top: 100px;
                }

                @media screen and (min-width: ${breakpoints.maxblock}) {
                    width: 1200px;
                }
            `}>
                <StoneContainer />
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Home;