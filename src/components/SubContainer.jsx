import {css} from '@emotion/react';

import NoticeContainer from './NoticeContainer';
import UpdateContainer from './UpdateContainer';
import PlaystoreContainer from './PlaystoreContainer';

const SubContainer = () => {
    return (
        <>
            <div css={css`
                width: 100%;
            `}>
                <NoticeContainer />
                <UpdateContainer />
                <PlaystoreContainer />
            </div>
        </>
    )
}

export default SubContainer