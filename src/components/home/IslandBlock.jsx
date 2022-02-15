import {css} from '@emotion/react';
import Image from 'next/image';
import breakpoints from '@src/styles/breakpoints';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';
import React from 'react';

import EmptyIslandPng from '@src/assets/empty-island.png';
import EmptyAwardPng from '@src/assets/empty-island-award.png';

class AwardBlock extends React.Component {
    getAwardImage(index) {
        if (this.props.awards[index] === '') {
            return EmptyAwardPng;
        } else {
            return this.props.awards[index];
        }
    }

    render() {
        const blocks = [];
        for (let i = 0; i < this.props.awards.length; i++) {
            blocks.push(
                <span css={css`
                    position: relative;
                    width: 30px;
                    height: 30px;
                    display: inline-block;

                    @media screen and (min-width: ${breakpoints.tablet}) {
                    width: 40px;
                    height: 40px;
                    }
                `} key={'aw'+(this.props.index+1)+i} >
                    <Image src={this.getAwardImage(i)} layout='fill' alt={'aw'+(this.props.index+1)+i} objectFit="fill"/>
                </span>
            );
        }
        return blocks;
    }
}

class IslandBlock extends React.Component {
    getIslandImage() {
        if (this.props.island.imgurl === '') {
            return EmptyIslandPng;
        } else {
            return this.props.island.imgurl;
        }
    }

    render() {
        return (
            <div css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;

                @media screen and (min-width: ${breakpoints.tablet}) {
                    grid-template-columns: 1fr 2fr;
                }
            `}>
                <div css={css`
                    position: relative;
                `}>
                    <Image
                        src={this.getIslandImage()}
                        layout='fill'
                        alt='island1'/>
                </div>
                <div css={css`
                    padding: 10px;
                    margin-left: 10px;
                `}>
                    <p css={css`
                        color: ${colors.object_title};
                        margin: 0;
                        font-size: ${fontsize.title}pt;
                        font-weight: bold;
                    `}>{this.props.island.name}</p>
                    <p css={css`
                        font-size: 10pt;
                        color: #AAAAAA;
                        margin: 0;
                        padding-top: ${fontsize.content}px;
                        padding-bottom: 5px;
                    `}>보상 내용</p>
                    <div css={css`
                        display: inline-block;
                    `}>
                        <AwardBlock awards={this.props.island.awards} index={this.props.index}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default IslandBlock