import {Global, css} from '@emotion/react'
import colors from '@src/styles/colors';

const GlobalStyle = () => {
  return (
    <Global styles={css`
      html {
        width: 100%;
        padding: 0;
        margin: 0;
        background-color: ${colors.background};
        color: #FFFFFF;
      }

      body {
        margin: 0;
      }
    `} />
  )
}

export default GlobalStyle;