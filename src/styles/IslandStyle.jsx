import {Global, css} from '@emotion/react'
import colors from '@src/styles/colors';

const IslandStyle = () => {
  return (
    <Global styles={css`
      html {
        padding: 0;
        margin: 0;
        background-color: ${colors.background};
      }

      body {
        margin: 0;
      }
    `} />
  )
}

export default IslandStyle;