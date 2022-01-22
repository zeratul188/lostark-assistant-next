import {Global, css} from '@emotion/react'

const GlobalStyle = () => {
  return (
    <Global styles={css`
      html {
        padding: 0;
        margin: 0;
      }

      body {
        margin: 0;
      }
    `} />
  )
}

export default GlobalStyle;