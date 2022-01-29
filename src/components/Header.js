import {css} from '@emotion/react';
import Image from 'next/image';

import colors from '@src/styles/colors';
import breakpoints from '@src/styles/breakpoints';
import LogoTitlePng from '@src/assets/logo-title.png';
import LogoPng from '@src/assets/logo.png';
import CategoryButton from './CategoryButton';

const Header = () => {
  return (
    <header css={css`
      background-color: ${colors.header_background};
      height: 48px;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      position: fixed;
      z-index: 1;

      @media screen and (min-width: ${breakpoints.tablet}) {
        height: 80px;
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
            <Image src={LogoPng} alt='logo' layout='responsive' objectFit='contain' css={css`
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
            <Image src={LogoTitlePng} alt='logo' layout='responsive' objectFit='contain' css={css`
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
            <CategoryButton value='어빌리티 스톤 세공 시뮬' />
            <CategoryButton value='각인 계산서 시뮬' />
            <CategoryButton value='스킬 시뮬' />
          </div>
        </div>
        
      </div>
    </header>)
}

export default Header;