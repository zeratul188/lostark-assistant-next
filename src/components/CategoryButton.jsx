import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import breakpoints from '@src/styles/breakpoints';

const CategoryButton = (props) => {
    return (
        <button css={css`
            background-color: transparent;
            border: 0;
            color: #FFFFFF;
            margin-right: 30px;
            font-size: ${fontsize.categories}pt;

            :hover {
                cursor: pointer;
            }

            @media screen and (min-width: ${breakpoints.tablet}) {
              font-size: ${fontsize.categories_big}pt;
            }
        `}>{props.value}</button>
    );
}

export default CategoryButton;