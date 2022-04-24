import {css} from '@emotion/react';
import breakpoints from '@src/styles/breakpoints';

const BlockTitle = (props) => {
    return (
        <div {...props} css={css`
            margin-top: ${props.margintop};
            background-color: #191b20;
            padding: 15px;
            width: 100%;
            height: 53px;
            font-size: 10pt;
            box-sizing: border-box;
            position: relative;

            > span, > div, > strong {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
            }

            @media screen and (min-width: ${breakpoints.tablet}) {
                font-size: 14pt;
            }
        `}/>
    )
}

export default BlockTitle