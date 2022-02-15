import {css} from '@emotion/react';
import Image from 'next/image';
import fontsize from '@src/styles/fontsizes';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import PlayPng from '@src/assets/playstore.png';

const PlaystoreContainer = () => {
    return (
        <>
            <BlockTitle margintop='30px'>
                <strong css={css`
                    font-size: ${fontsize.title}pt;
                `}>Google 플레이스토어</strong>
            </BlockTitle>
            <BlockContent padding='15px'>
                <span css={css`
                    display: flex;
                    vertical-align: middle;

                    :hover {
                        cursor: pointer;
                    }
                `} onClick={() => {
                    var newWindow = window.open("about:blank");
                    newWindow.location.href = 'https://play.google.com/store/apps/details?id=com.lostark.lostarkapplication';
                }}>
                    <Image src={PlayPng} width={30} height={30} alt='playstore'/>
                    <span css={css`
                        margin-left: 10px;
                        font-size: ${fontsize.content}pt;
                        display: inline-block;
                        line-height: 30px;
                        height: 30px;
                    `}>로스트아크 어시스턴트</span>
                </span>
            </BlockContent>
        </>
    );
};

export default PlaystoreContainer;