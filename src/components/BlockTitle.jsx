import {css} from '@emotion/react';
import breakpoints from '@src/styles/breakpoints';

const BlockTitle = (props) => {
    return (
        <div {...props} css={css`
            margin-top: ${props.marginTop};
            background-color: #191b20;
            padding: 15px;
            font-size: 10pt;
            text-align: left;
            width: 100%;
            display: inline-block;
            box-sizing: border-box;

            @media screen and (min-width: ${breakpoints.tablet}) {
                font-size: 14pt;
            }
        `}/>
    )
}

export default BlockTitle