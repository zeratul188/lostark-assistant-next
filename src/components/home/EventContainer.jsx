import {css} from '@emotion/react';
import Image from 'next/image';
import colors from '@src/styles/colors';
import fontsize from '@src/styles/fontsizes';
import breakpoints from '@src/styles/breakpoints';
import BlockTitle from '@src/components/BlockTitle';
import BlockContent from '@src/components/BlockContent';

import { ref, onValue } from "firebase/database";
import { getDownloadURL } from "firebase/storage";
import { ref as storageReference } from "firebase/storage";
import database from '@src/scripts/firebase-database';
import storage from '@src/scripts/firebase-storage';
import React from 'react';

var events = [];

class EventColumn extends React.Component {
    handlerClick(index) {
        const list = this.props.events;
        const eventFile = list[index];
        var newWindow = window.open("about:blank");
        newWindow.location.href = eventFile.url;
    }

    eventBlock(index) {
        return (
            <Event
                event={this.props.events[index]}
                onClick={() => this.handlerClick(index)} />
        );
    }

    render() {
        return (
            <div css={css`
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            `}>
                {this.eventBlock(0)}
                {this.eventBlock(1)}
                {this.eventBlock(2)}
            </div>
        );
    }
}

const Event = (props) => {
    if (props.event === null || props.event === undefined) return [];
    else if (props.event.imgurl === '') return [];
    return(
        <div css={css`
            width: 100%;
        `}>
            <div css={css`
                width: 100%;
                height: 15vw;
                position: relative;

                @media screen and (min-width: ${breakpoints.maxblock}) {
                    height: 140px;
                }
            `}>
                <Image
                    src={props.event.imgurl}
                    alt={'event'+props.event.number}
                    layout='fill'
                    onClick={props.onClick}
                    css={css`
                        :hover {
                            cursor: pointer;
                        }
                    `}/>
            </div>
            <div css={css`
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                font-size: ${fontsize.content}pt;
                text-align: center;

                :hover {
                    cursor: pointer;
                }
            `} onClick={props.onClick}>{props.event.startdate} ~ {props.event.enddate}</div>
        </div>
    )
}

class EventColumns extends React.Component {
    cutEvents(index) {
        if (this.props.events === null || this.props.events === undefined || this.props.events.length === 0) return [];
        var list = [];
        for (let i = index; i < index+3; i++) {
            if (this.props.events.length)
            list.push(this.props.events[i]);
        }
        return list;
    }

    render() {
        if (this.props.events === null || this.props.events === undefined || this.props.events.length === 0) {

            return [];
        }
        const blocks = [];
        for (let i = 0; i < this.props.events.length; i += 3) {
            blocks.push(
                <EventColumn
                    events={this.cutEvents(i)} key={'event'+i}/>
            )
        }
        return blocks;
    }
}

class EventContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.syncFirebase();
    }

    syncFirebase() {
        var eventRef = ref(database, 'event');
        onValue(eventRef, (snapshot) => {
            snapshot.forEach((dinoSnapshot) => {
                var event = {
                    number: 0,
                    startdate: '',
                    enddate: '',
                    url: '',
                    imgurl: ''
                };
                dinoSnapshot.forEach((semiSnapshot) => {
                    switch(semiSnapshot.key) {
                        case 'number':
                            event.number = Number(semiSnapshot.val());
                            break;
                        case 'startdate':
                            event.startdate = semiSnapshot.val();
                            break;
                        case 'enddate':
                            event.enddate = semiSnapshot.val();
                            break;
                        case 'url':
                            event.url = semiSnapshot.val();
                            break;
                    }
                });
                getDownloadURL(storageReference(storage, 'Events/event'+event.number)).then((url) => {
                    event.imgurl = url;
                    this.setState({
                        events: events
                    });
                })
                .catch((error) => {
                    // Handle any errors
                });
                events.push(event);
            });
            events = events.sort((a, b) => {
                return a.number - b.number;
            }).reverse();
            this.setState({
                events: events
            });
        })
    }

    render() {
        return (
            <>
                <BlockTitle margintop='30px'>
                    <strong css={css`
                        font-size: ${fontsize.title}pt;
                    `}>이벤트</strong>
                    <span css={css`
                        float: right;
                        font-size: ${fontsize.title}pt;
                    `}>
                        <span css={css`
                            color: ${colors.object_sub};
                        `}>현재 이벤트 갯수 : </span>
                        <span>{this.state.events.length}개</span>
                    </span>
                </BlockTitle>
                <BlockContent>
                    <EventColumns
                        events={this.state.events}/>
                </BlockContent>
            </>
        );
    }
}

export default EventContainer;