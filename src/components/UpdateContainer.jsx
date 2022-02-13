import {css} from '@emotion/react';
import fontsize from '@src/styles/fontsizes';

import { ref, onValue } from "firebase/database";
import database from '@src/scripts/firebase-database';
import React from 'react';

import BlockTitle from './BlockTitle';
import BlockContent from './BlockContent';

var updates = [];

class UpdateBoard extends React.Component {
    handleClick(index) {
        const list = this.props.updates;
        const updateFile = list[index];
        var newWindow = window.open("about:blank");
        newWindow.location.href = updateFile.url;
    }

    updateblock(index) {
        return(
            <Update
                value={this.props.updates[index]}
                onClick={() => this.handleClick(index)} />
        );
    }

    render() {
        return(
            <div>
                {this.updateblock(0)}
                {this.updateblock(1)}
                {this.updateblock(2)}
                {this.updateblock(3)}
                {this.updateblock(4)}
            </div>
        );
    }
}

function cutList(index) {
    var list = [];
    for (let i = 0; i < 5; i++) {
        if ((index+i) >= updates.length) {
            list.push(null);
        }
        list.push(updates[index+i]);
    }
    return list;
}

function Update(props) {
    if (props.value === null || props.value === undefined) return [];
    return (
        <p
        onClick={props.onClick}
        css={css`
            color: white;
            font-size: ${fontsize.content}pt;
            margin: 10px 0 10px 5px;

            :hover {
                cursor: pointer;
            }
        `}>{props.value.date} 업데이트</p>
    );
}

class UpdateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            max: 0,
            updates: Array(5).fill(null),
            left_display: 'hidden',
            right_display: 'visible'
        };
        this.syncFirebase();
    }

    btnLeft() {
        var position = this.state.index;
        position--;
        this.setState({
            right_display: 'visible'
        });
        if (position == 0) {
            this.setState({
                left_display: 'hidden'
            });
        }
        this.setState({
            index: position,
            updates: cutList(position*5)
        });
    }

    btnRight() {
        var position = this.state.index;
        position++;
        this.setState({
            left_display: 'visible'
        });
        if (position === this.state.max-1) {
            this.setState({
                right_display: 'hidden'
            });
        }
        this.setState({
            index: position,
            updates: cutList(position*5)
        });
    }

    syncFirebase() {
        var updateRef = ref(database, 'update');
        onValue(updateRef, (snapshot) => {
            updates = [];
            snapshot.forEach((dinoSnapshot) => {
                var update = {
                    number: -1,
                    date: '',
                    url: ''
                };
                dinoSnapshot.forEach((semiSnapshot) => {
                    switch(semiSnapshot.key) {
                        case 'date':
                            update.date = semiSnapshot.val();
                            break;
                        case 'number':
                            update.number = Number(semiSnapshot.val());
                            break;
                        case 'url':
                            update.url = semiSnapshot.val();
                            break;
                    }
                });
                updates.push(update);
            });
            updates = updates.sort((a, b) => {
                return a.number - b.number;
            }).reverse();
            this.setState({
                updates: cutList(0)
            });
            if (updates.length%5 === 0) {
                this.setState({
                    max: Math.floor(updates.length/5)
                });
            } else {
                this.setState({
                    max: Math.floor(updates.length/5)+1
                });
            }

        });
    }

    render() {
        return (
            <>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>로스트아크 업데이트</strong>
                </BlockTitle>
                <BlockContent padding='10px'>
                    <UpdateBoard updates={this.state.updates}/>
                    <span css={css`
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                    `}>
                        <button onClick={() => this.btnLeft()} css={css`
                            background-color: transparent !important;
                            border: 0;
                            color: white;
                            font-weight: bold;
                            font-size: 14pt;
                            padding-right: 10px;
                            visibility: ${this.state.left_display};
    
                            :hover {
                                cursor: pointer;
                            }
                        `}>&lt;</button>
                        <span css={css`
                            font-size: ${fontsize.title}pt;
                        `}>{this.state.index+1} / {this.state.max}</span>
                        <button onClick={() => this.btnRight()} css={css`
                            background-color: transparent !important;
                            border: 0;
                            color: white;
                            font-weight: bold;
                            font-size: 14pt;
                            padding-left: 10px;
                            visibility: ${this.state.right_display};
    
                            :hover {
                                cursor: pointer;
                            }
                        `}>&gt;</button>
                    </span>
                </BlockContent>
            </>
        );
    }
}

export default UpdateContainer;