import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';

class NoticeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: ""
        }
        this.isComponentMounted = false;
        this.getNoticeData();
    }

    componentDidMount = () => {
        this.isComponentMounted = true;
        this.getNoticeData();
    }

    componentWillUnmount = () => {
        this.isComponentMounted = false;
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
            if (this.isComponentMounted) {
                this.setState({
                    notice: notice
                });
            }
        });
    }

    render() {
        //if (this.state === null) return [];
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