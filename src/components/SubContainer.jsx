import {css} from '@emotion/react';

import NoticeContainer from './NoticeContainer';

const SubContainer = () => {
    return (
        <>
            <div css={css`
                width: 100%;
            `}>
                <NoticeContainer />
            </div>
        </>
    )
}

export default SubContainer