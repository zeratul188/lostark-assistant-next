import {css} from '@emotion/react';
import Image from 'next/image';

import colors from '@src/styles/colors';
import breakpoints from '@src/styles/breakpoints';
import LogoTitlePng from '@src/assets/logo-title.png';
import LogoPng from '@src/assets/logo.png';

const Header = () => {
  return (
    <header css={css`
      background-color: ${colors.background};
      height: 32px;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;

      @media screen and (min-width: ${breakpoints.tablet}) {
        height: 64px;
      }
    `}>

      {/* TODO: Make width and height dynamical: https://nextjs.org/docs/api-reference/next/image */} 
      <div css={css`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      `}>
        <Image src={LogoPng} alt='logo' width={32} height={32}/>
        <Image src={LogoTitlePng} alt='logo' width={64} height={32}/>
      </div>
    </header>)
}

export default Header;