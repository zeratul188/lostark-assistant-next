import {css} from '@emotion/react';
import breakpoints from '@src/styles/breakpoints';

const BlockContent = (props) => {
    return (
        <div {...props} css={css`
            background-color: #1d2026;
            text-align: left;
            font-size: 10pt;
            width: 100%;
            box-sizing: border-box;
            padding: ${props.padding};

            @media screen and (min-width: ${breakpoints.tablet}) {
                font-size: 14pt;
            }
        `}/>
    )
}

export default BlockContent