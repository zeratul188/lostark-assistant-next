import {css} from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

import colors from '@src/styles/colors';
import fontsize from '@src/styles/fontsizes';
import breakpoints from '@src/styles/breakpoints';
import LogoTitlePng from '@src/assets/logo-title.png';
import LogoPng from '@src/assets/logo.png';
import React from 'react';
import Router from 'next/router';

class Header extends React.Component {
  movetoHome() {
    Router.push('/');
  }

  render() {
    return(
      <header css={css`
        background-color: ${colors.header_menu_background};
        height: 86px;
        width: 100%;
        position: fixed;
        z-index: 1;
      `}>
        <div css={css`
          background-color: ${colors.header_background};
          height: 46px;
          display: flex;
          justify-content: center;

          @media screen and (min-width: ${breakpoints.tablet}) {
            height: 86px;
            justify-content: start;
            padding-left: 30px;
            box-sizing: border-box;
          }
        `}>
          {/* TODO: Make width and height dynamical: https://nextjs.org/docs/api-reference/next/image */} 
          <div css={css`
            display: flex;
            align-items: center;
          `}>
            <div css={css`
              display: flex;
              align-items: center;
            `}>
              <div css={css`
                width: 30px;
                height: 100%;
                position: relative;
                display: inline-block;

                @media screen and (min-width: ${breakpoints.tablet}) {
                  width: 50px;
                }
              `}>
                <Image src={LogoPng} alt='logo' layout='responsive' objectFit='contain' onClick={this.movetoHome} css={css`
                  :hover {
                    cursor: pointer;
                  }
                `}/>
              </div>
              <div css={css`
                width: 60px;
                height: 100%;
                position: relative;
                display: inline-block;

                @media screen and (min-width: ${breakpoints.tablet}) {
                  width: 100px;
                }
              `}>
                <Image src={LogoTitlePng} alt='logo' layout='responsive' objectFit='contain' onClick={this.movetoHome} css={css`
                  :hover {
                    cursor: pointer;
                  }
                `}/>
              </div>
              <div css={css`
                display: none;

                @media screen and (min-width: ${breakpoints.tablet}) {
                  margin-left: 100px;
                  display: inline-block;
                }
              `}>
                <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    margin-right: 30px;
                    font-size: ${fontsize.categories}pt;
        
                    :hover {
                        cursor: pointer;
                    }
        
                    @media screen and (min-width: ${breakpoints.tablet}) {
                      font-size: ${fontsize.categories_big}pt;
                    }
                  `}>???????????? ?????? ?????? ??????</a>
                </Link>
                <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    margin-right: 30px;
                    font-size: ${fontsize.categories}pt;
        
                    :hover {
                        cursor: pointer;
                    }
        
                    @media screen and (min-width: ${breakpoints.tablet}) {
                      font-size: ${fontsize.categories_big}pt;
                    }
                  `}>?????? ????????? ??????</a>
                </Link>
                <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    margin-right: 30px;
                    font-size: ${fontsize.categories}pt;
        
                    :hover {
                        cursor: pointer;
                    }
        
                    @media screen and (min-width: ${breakpoints.tablet}) {
                      font-size: ${fontsize.categories_big}pt;
                    }
                  `}>?????? ??????</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div css={css`
          height: 39px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1;
        
          @media screen and (min-width: ${breakpoints.tablet}) {
            display: none;
          }
        `}>
          <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    text-align: center;
                    font-size: ${fontsize.categories}pt;
                    margin: auto;
        
                    :hover {
                        cursor: pointer;
                    }]
                  `}>?????? ??????</a>
                </Link>
                <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    text-align: center;
                    font-size: ${fontsize.categories}pt;
                    margin: auto;
        
                    :hover {
                        cursor: pointer;
                    }]
                  `}>?????? ?????????</a>
                </Link>
                <Link href='/stone' title='Stone Page'>
                  <a css={css`
                    background-color: transparent;
                    border: 0;
                    color: #FFFFFF;
                    text-align: center;
                    font-size: ${fontsize.categories}pt;
                    margin: auto;
        
                    :hover {
                        cursor: pointer;
                    }]
                  `}>?????? ??????</a>
                </Link>
        </div>
        <div css={css`
          height: 1px;
          width: 100%;
          background-color: ${colors.main_color};
        
          @media screen and (min-width: ${breakpoints.tablet}) {
            display: none;
          }
        `}></div>
      </header>
    )
  }
}

export default Header;