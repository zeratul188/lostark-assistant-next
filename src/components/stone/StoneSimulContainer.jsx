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
import BurfSuccessPng from '@src/assets/stones/b_s.png';
import DeburfSuccessPng from '@src/assets/stones/db_s.png';
import BurfFailPng from '@src/assets/stones/b_f.png';
import DeburfFailPng from '@src/assets/stones/db_f.png';

class StoneSimulContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crystals: [Array(10).fill(0), Array(10).fill(0), Array(10).fill(0)],
            stamps: ['각성', '각성', '각성'],
            progress: [0, 0, 0],
            stone_statue: [0, 0, 0],
            percent: 75,
            max: 10
        }
    }

    asyncBurfImages(position, progress) {
        if (position < 2) {
            if (this.state.crystals[position][progress] === 1) {
                return BurfSuccessPng;
            } else if (this.state.crystals[position][progress] === 2) {
                return BurfFailPng;
            } else {
                return BurfNonePng;
            }
        } else {
            if (this.state.crystals[2][progress] === 1) {
                return DeburfSuccessPng;
            } else if (this.state.crystals[2][progress] === 2) {
                return DeburfFailPng;
            } else {
                return DeburfNonePng;
            }
        }
    }

    asyncHammerImage(position) {
        if (this.state.progress[position] < this.state.max) {
            return HammerPng;
        } else {
            return UnHammerPng;
        }
    }

    handelOnClicked(position) {
        if (this.state.progress[position] >= this.state.max) return;
        const ran = parseInt((Math.random()*123456)%101+1);
        var crystal = this.state.crystals;
        var progress_clone = this.state.progress;
        var statue = this.state.stone_statue;
        if (ran <= this.state.percent) {
            crystal[position][this.state.progress[position]] = 1;
            progress_clone[position]++;
            statue[position]++;
            if (this.state.percent > 25) {
                this.setState({
                    percent: this.state.percent-10
                })
            }
        } else {
            crystal[position][this.state.progress[position]] = 2;
            progress_clone[position]++;
            if (this.state.percent < 75) {
                this.setState({
                    percent: this.state.percent+10
                })
            }
        }
        this.setState({
            crystals: crystal,
            progress: progress_clone,
            stone_statue: statue
        })
    }

    render() {
        return (
            <>
                <BlockTitle>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>증가 옵션</strong>
                    <span css={css`
                        font-size: ${fontsize.title}pt;
                        position: absolute;
                        top: 50%;
                        right: 15px;
                        transform: translate(0, -50%);
                    `}>세공 확률 : {this.state.percent}%</span>
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
                                justify-content: space-between;
                            `}>
                                <span>{this.state.stamps[0]}</span>
                                <span css={css`
                                        display: table;
                                    `}>
                                    <span css={css`
                                        display: table-cell;
                                        vertical-align: middle;
                                    `}>
                                        <Image src={BurfSuccessPng} alt={'status1'} width={15} height={15}/>
                                    </span>
                                    <span css={css`
                                        display: table-cell;
                                        vertical-align: middle;
                                        padding-left: 3px;
                                    `}> X {this.state.stone_statue[0]}</span>
                                </span>
                            </div>
                            <div css={css`
                                display: grid;
                                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                grid-template-rows: 1;
                            `}>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 0)} alt={'burfImg10'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 1)} alt={'burfImg11'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 2)} alt={'burfImg12'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 3)} alt={'burfImg13'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 4)} alt={'burfImg14'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 5)} alt={'burfImg15'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 6)} alt={'burfImg16'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 7)} alt={'burfImg17'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 8)} alt={'burfImg18'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(0, 9)} alt={'burfImg19'} width={20} height={20}/></div>
                            </div>
                        </div>
                        <div css={css`
                            margin: auto;
                        `}>
                            <Image src={this.asyncHammerImage(0)} width={40} height={40} alt={'hammerImg1'} onClick={() => this.handelOnClicked(0)} css={css`
                                :hover {
                                    cursor: pointer;
                                }
                            `}/>
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
                                justify-content: space-between;
                            `}>
                                <span>{this.state.stamps[1]}</span>
                                <span css={css`
                                        display: table;
                                    `}>
                                    <span css={css`
                                        display: table-cell;
                                        vertical-align: middle;
                                    `}>
                                        <Image src={BurfSuccessPng} alt={'status1'} width={15} height={15}/>
                                    </span>
                                    <span css={css`
                                        display: table-cell;
                                        vertical-align: middle;
                                        padding-left: 3px;
                                    `}> X {this.state.stone_statue[1]}</span>
                                </span>
                            </div>
                            <div css={css`
                                display: grid;
                                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                grid-template-rows: 1;
                            `}>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 0)} alt={'burfImg10'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 1)} alt={'burfImg11'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 2)} alt={'burfImg12'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 3)} alt={'burfImg13'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 4)} alt={'burfImg14'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 5)} alt={'burfImg15'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 6)} alt={'burfImg16'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 7)} alt={'burfImg17'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 8)} alt={'burfImg18'} width={20} height={20}/></div>
                                <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(1, 9)} alt={'burfImg19'} width={20} height={20}/></div>
                            </div>
                        </div>
                        <div css={css`
                            margin: auto;
                        `}>
                            <Image src={this.asyncHammerImage(1)} width={40} height={40} alt={'hammerImg1'} onClick={() => this.handelOnClicked(1)} css={css`
                                :hover {
                                    cursor: pointer;
                                }
                            `} />
                        </div>
                    </div>
                </BlockContent>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>감소 옵션</strong>
                    <span css={css`
                        font-size: ${fontsize.title}pt;
                        position: absolute;
                        top: 50%;
                        right: 15px;
                        transform: translate(0, -50%);
                    `}>세공 확률 : {this.state.percent}%</span>
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
                                    justify-content: space-between;
                                `}>
                                    <span>{this.state.stamps[2]}</span>
                                    <span css={css`
                                            display: table;
                                        `}>
                                        <span css={css`
                                            display: table-cell;
                                            vertical-align: middle;
                                        `}>
                                            <Image src={DeburfSuccessPng} alt={'status1'} width={15} height={15}/>
                                        </span>
                                        <span css={css`
                                            display: table-cell;
                                            vertical-align: middle;
                                            padding-left: 3px;
                                        `}> X {this.state.stone_statue[2]}</span>
                                    </span>
                                </div>
                                <div css={css`
                                    display: grid;
                                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                                    grid-template-rows: 1;
                                `}>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 0)} alt={'burfImg10'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 1)} alt={'burfImg11'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 2)} alt={'burfImg12'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 3)} alt={'burfImg13'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 4)} alt={'burfImg14'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 5)} alt={'burfImg15'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 6)} alt={'burfImg16'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 7)} alt={'burfImg17'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 8)} alt={'burfImg18'} width={20} height={20}/></div>
                                    <div css={css`margin: 2px; display: flex; align-items: center;`}><Image src={this.asyncBurfImages(2, 9)} alt={'burfImg19'} width={20} height={20}/></div>
                                </div>
                            </div>
                            <div css={css`
                                margin: auto;
                            `}>
                                <Image src={this.asyncHammerImage(2)} width={40} height={40} alt={'hammerImg1'} onClick={() => this.handelOnClicked(2)} css={css`
                                :hover {
                                    cursor: pointer;
                                }
                            `}/>
                            </div>
                        </div>
                    </div>
                </BlockContent>
            </>
        )
    }
}

export default StoneSimulContainer;