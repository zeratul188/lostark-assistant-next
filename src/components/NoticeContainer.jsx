import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';

import BlockTitle from './BlockTitle';
import BlockContent from './BlockContent';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';

class NoticeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getNoticeData();
    }

    getNoticeData() {
        var noticeRef = ref(database, 'Andsoon');
        onValue(noticeRef, (snapshot) => {
            var notice = '';
            snapshot.forEach((dinoSnapshot) => {
                if (dinoSnapshot.key === 'alarm') {
                    notice = dinoSnapshot.val();
                }
            });
            this.setState({
                notice: notice
            });
        });
    }

    render() {
        if (this.state === null) return [];
        return(
            <>
                <BlockTitle>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>LAA 공지사항</strong>
                </BlockTitle>
                <BlockContent padding='15px'>
                    <p css={css`
                        margin: 0;
                        font-size: ${fontsize.content}pt;
                    `}>{this.state.notice}</p>
                </BlockContent>
            </>
        );
    }
}

export default NoticeContainer;