import {Global, css} from '@emotion/react'
import colors from '@src/styles/colors';

const GlobalStyle = () => {
  return (
    <Global styles={css`
    @font-face {
      font-family: 'SUIT-Medium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

      html {
        width: 100%;
        padding: 0;
        margin: 0;
        background-color: ${colors.background};
        color: #FFFFFF;
      }

      body {
        margin: 0;
        font-family: "SUIT-Medium";
      }
    `} />
  )
}

export default GlobalStyle;