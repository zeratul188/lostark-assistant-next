import {css} from '@emotion/react';
import Image from 'next/image';
import fontsize from '@src/styles/fontsizes';

import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import DiscordPng from '@src/assets/discord.png';

const DiscordContainer = () => {
    return (
        <>
            <BlockTitle margintop='30px'>
                <strong css={css`
                    font-size: ${fontsize.title}pt;
                `}>디스코드</strong>
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
                    newWindow.location.href = 'https://discord.gg/ytgcYN4Qd2';
                }}>
                    <Image src={DiscordPng} width={30} height={30} alt='discord'/>
                    <span css={css`
                        margin-left: 10px;
                        font-size: ${fontsize.content}pt;
                        display: inline-block;
                        line-height: 30px;
                        height: 30px;
                    `}>로스트아크 어시스턴트 디스코드</span>
                </span>
            </BlockContent>
        </>
    );
};

export default DiscordContainer;