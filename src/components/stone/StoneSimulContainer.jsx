import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';
import colors from '@src/styles/colors';
import Image from 'next/image';
import breakpoints from '@src/styles/breakpoints';

import React from 'react';
import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import HammerPng from '@src/assets/stones/hammer.png';
import UnHammerPng from '@src/assets/stones/unhammer.png';
import StampToolPng from '@src/assets/stones/stamptool.png';
import st1Png from '@src/assets/stones/st1.png';

import BurfNonePng from '@src/assets/stones/b_n.png';
import DeburfNonePng from '@src/assets/stones/db_n.png';

class StoneSimulContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crystals: [Array(10).fill(0), Array(10).fill(0), Array(10).fill(0)],
            stamps: [1, 2, 88],
            percent: 75
        }
    }

    render() {
        return (
            <>
                <BlockTitle>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>증가 옵션</strong>
                </BlockTitle>
                <BlockContent>
                    <div css={css`
                        height: 60px;
                        display: grid;
                        grid-template-columns: 60px 1fr 60px;
                        grid-template-rows: 1;
                    `}>
                        <div css={css`
                            position: relative;
                        `}>
                            <span css={css`
                                position: absolute;
                                left: 3px;
                                top: 3px;
                            `}>
                                <Image src={StampToolPng} width={54} height={54}  alt={'stamptoolImg1'}/>
                            </span>
                            <span css={css`
                                position: absolute;
                                top: 12px;
                                left: 12px;
                            `}>
                                <Image src={st1Png} width={36} height={36}  alt={'stampImg1'}/>
                            </span>
                        </div>
                        <div css={css`
                            height: 60px;
                            display: grid;
                            grid-template-rows: 1fr 1fr;
                            grid-template-columns: 1;
                            margin-left: 5px;
                        `}>
                            <div css={css`
                                background: linear-gradient( to right, rgba(60, 60, 120, 1), rgba(0, 0, 0, 0));
                                font-color: #FFFFFF;
                                font-size: ${fontsize.title}pt;
                                display: flex;
                                align-items: center;
                                padding-left: 10px;
                            `}>각성</div>
                            <div css={css`
                                display: grid;
                                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                grid-template-rows: 1;
                            `}>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg10'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg11'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg12'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg13'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg14'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg15'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg16'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg17'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg18'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg19'} width={20} height={20}/></div>
                            </div>
                        </div>
                        <div css={css`
                            margin: auto;
                        `}>
                            <Image src={HammerPng} width={40} height={40} alt={'hammerImg1'} />
                        </div>
                    </div>
                    <div css={css`
                        height: 60px;
                        display: grid;
                        grid-template-columns: 60px 1fr 60px;
                        grid-template-rows: 1;
                    `}>
                        <div css={css`
                            position: relative;
                        `}>
                            <span css={css`
                                position: absolute;
                                left: 3px;
                                top: 3px;
                            `}>
                                <Image src={StampToolPng} width={54} height={54}  alt={'stamptoolImg1'}/>
                            </span>
                            <span css={css`
                                position: absolute;
                                top: 12px;
                                left: 12px;
                            `}>
                                <Image src={st1Png} width={36} height={36}  alt={'stampImg1'}/>
                            </span>
                        </div>
                        <div css={css`
                            height: 60px;
                            display: grid;
                            grid-template-rows: 1fr 1fr;
                            grid-template-columns: 1;
                            margin-left: 5px;
                        `}>
                            <div css={css`
                                background: linear-gradient( to right, rgba(60, 60, 120, 1), rgba(0, 0, 0, 0));
                                font-color: #FFFFFF;
                                font-size: ${fontsize.title}pt;
                                display: flex;
                                align-items: center;
                                padding-left: 10px;
                            `}>각성</div>
                            <div css={css`
                                display: grid;
                                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                grid-template-rows: 1;
                            `}>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg10'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg11'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg12'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg13'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg14'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg15'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg16'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg17'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg18'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={BurfNonePng} alt={'burfImg19'} width={20} height={20}/></div>
                            </div>
                        </div>
                        <div css={css`
                            margin: auto;
                        `}>
                            <Image src={HammerPng} width={40} height={40} alt={'hammerImg1'} />
                        </div>
                    </div>
                </BlockContent>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>감소 옵션</strong>
                </BlockTitle>
                <BlockContent>
                    <div css={css`
                        display: grid;
                    `}>
                        <div css={css`
                            height: 60px;
                            display: grid;
                            grid-template-columns: 60px 1fr 60px;
                            grid-template-rows: 1;
                        `}>
                            <div css={css`
                                position: relative;
                            `}>
                                <span css={css`
                                    position: absolute;
                                    left: 3px;
                                    top: 3px;
                                `}>
                                    <Image src={StampToolPng} width={54} height={54}  alt={'stamptoolImg1'}/>
                                </span>
                                <span css={css`
                                    position: absolute;
                                    top: 12px;
                                    left: 12px;
                                `}>
                                    <Image src={st1Png} width={36} height={36}  alt={'stampImg1'}/>
                                </span>
                            </div>
                            <div css={css`
                                height: 60px;
                                display: grid;
                                grid-template-rows: 1fr 1fr;
                                grid-template-columns: 1;
                                margin-left: 5px;
                            `}>
                                <div css={css`
                                    background: linear-gradient( to right, rgba(180, 60, 60, 1), rgba(0, 0, 0, 0));
                                    font-color: #FFFFFF;
                                    font-size: ${fontsize.title}pt;
                                    display: flex;
                                    align-items: center;
                                    padding-left: 10px;
                                `}>각성</div>
                                <div css={css`
                                    display: grid;
                                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                    grid-template-rows: 1;
                                `}>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg10'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg11'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg12'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg13'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg14'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg15'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg16'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg17'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg18'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={DeburfNonePng} alt={'burfImg19'} width={20} height={20}/></div>
                                </div>
                            </div>
                            <div css={css`
                                margin: auto;
                            `}>
                                <Image src={HammerPng} width={40} height={40} alt={'hammerImg1'} />
                            </div>
                        </div>
                    </div>
                </BlockContent>
            </>
        )
    }
}

export default StoneSimulContainer;