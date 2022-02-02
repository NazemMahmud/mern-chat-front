import React, {useEffect, useState} from "react";
import Pusher from "pusher-js";

import axios from "./config/axios.js";
import './App.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Chat from "./components/Chat/Chat";

function App() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        // no dependency, run once
        axios.get('/v1/messages/all')
            .then(res => {
                console.log("All: ", res.data.data);
                setMessages(res.data.data);
            });
    }, []);

    useEffect(() => {
        const pusher = new Pusher('42c0d3dbf431edb54c57', {
            cluster: 'mt1'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (newMessage) {
            alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage.data]);
        });
        // after subscribe, need unsubscribing

        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        };
    }, [messages]);

    console.log(messages);

    return (
        <div className="App">
            <div className="main__body">
                <LeftSidebar/>
                <Chat messages={messages}/>
            </div>
        </div>
    );
}

export default App;
