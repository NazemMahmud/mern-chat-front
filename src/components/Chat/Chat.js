import React, {useState} from 'react';
import './Chat.css';

import { Avatar, IconButton } from "@mui/material";
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import axios from "../../config/axios.js"


function Chat(props) {
    const [userInput, setUserInput] = useState('');
    const sendMessage = async (event) => {
        event.preventDefault();
        await axios.post('/v1/messages.new', {
            message: userInput,
            name: "Johnny Depp",
            timestamp: new Date().toUTCString(),
            received: false,
        });
        setUserInput('');
    };

    const setValueFromForm = (event) => {
      setUserInput(event.target.value);
        console.log("userInput: ", userInput);
    }

    return (
        <div className="chat">
            {/* Top Header: avatar, details, 3 icons  */}
            <div className="chat_top_header">
                <div className="chat_top_avatar">
                    <Avatar
                        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                </div>

                <div className="chat_short_details">
                    <h3>User / Group Name</h3>
                    <p> Last seen...</p>
                </div>

                <div className="chat_top_icons">
                    {/* <div className="col-auto"> */}
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    {/* </div> */}
                    {/* <div className="col-auto"> */}
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    {/* </div> */}
                    {/* <div className="col-auto"> */}
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    {/* </div> */}
                </div>
            </div>

            {/* Chat box  */}
            <div className="chat_box">
                { props.messages.map((message, index) => (
                    <div className={`chat_message ${!(index%2) && "chat_receiver"}`} >
                        <p className="chat_user pl-1 mb-1" > {message.name}</p>
                        <p className="chat_message_body">
                            {/*"_id": "61f9a2e27425516198a2f93c",*/}
                            {/*"received": false,*/}
                            <span className="message"> {message.message} </span>
                            <span className="chat_timestamp"> {message.timestamp} </span>
                            {/*<span className="chat_timestamp"> {new Date().toUTCString()} </span>*/}
                        </p>
                    </div>
                )) }
                <div className="chat_message chat_receiver" >

                    <p className="chat_user pl-1 mb-1" >User name</p>
                    <p className="chat_message_body">
                        <span className="message"> Text messages </span>
                        <span className="chat_timestamp"> {new Date().toUTCString()} </span>
                    </p>
                </div>
            </div>

            {/* Message Input: emoji, textbox, audio input  */}
            <div className="chat_inputs">
                <div className="chat_emoji">
                    <InsertEmoticon />
                </div>
                
                <div className="chat_input_message">
                    <form>
                        <input value={userInput} onChange={ setValueFromForm } type="text" placeholder="Type your message" />
                        <button onClick={sendMessage} type="submit"> Send </button>
                    </form>
                </div>

                <div className="chat_input_audio">
                    <IconButton>
                        <MicIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Chat;