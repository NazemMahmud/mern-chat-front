import React, {useState, useEffect} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import ChatSection from "../components/Chat/Chat";

import Pusher from "pusher-js";
import axios from "../config/axios.js";
import {pusherConfig} from "../config/config";

function Chat(props) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // no dependency, run once
        axios.get('/v1/messages/all')
            .then(res => {
                setMessages(res.data.data);
            });
    }, []);

    useEffect(() => {
        const pusher = new Pusher(pusherConfig.appKey, {
            cluster: pusherConfig.cluster
        });

        const channel = pusher.subscribe(pusherConfig.messagesChannel);
        channel.bind(pusherConfig.insertEvent, function (newMessage) {
            // setMessages([...messages, newMessage]);
        });

        // after subscribe, need unsubscribing
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    const updateMessageListFromInput = (data) => {
        const firstPart = new Date();
        const secondPart = (Math.random() * 46656) | 0;
        const newData = {...data};
        newData._id = (("000" + firstPart.toString()).slice(-3)) + (("000" + secondPart.toString(36)).slice(-3));
        setMessages([...messages, newData]);
    };

    return (
        <Auxiliary>
                <LeftSidebar/>
                <ChatSection
                    messages={messages}
                    sendToChatConatiner={updateMessageListFromInput}
                />
        </Auxiliary>
    )
}

export default Chat;

