import {css} from '@emotion/react';
import Image from 'next/image';

import colors from '@src/styles/colors';
import LogoTitlePng from '@src/assets/logo-title.png';

const Header = () => {
  return (
    <header css={css`
      background-color: ${colors.background};
      height: 32px;
      width: 100%;
      display: flex;
      justify-content: center;
    `}>

    {/* TODO: Make width and height dynamical: https://nextjs.org/docs/api-reference/next/image */} 
    <Image src={LogoTitlePng} alt='logo' width={80} height={32} />
    </header>)
}

export default Header;
