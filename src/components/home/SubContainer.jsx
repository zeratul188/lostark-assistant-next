import {css} from '@emotion/react';

import NoticeContainer from './NoticeContainer';
import UpdateContainer from './UpdateContainer';
import PlaystoreContainer from './PlaystoreContainer';
import DiscordContainer from './DiscordContainer';

const SubContainer = () => {
    return (
        <>
            <div css={css`
                width: 100%;
            `}>
                <NoticeContainer />
                <UpdateContainer />
                <PlaystoreContainer />
                <DiscordContainer />
            </div>
        </>
    )
}

export default SubContainer