import React, {useState} from 'react';
import { Avatar, IconButton } from "@mui/material";
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import './Chat.css';
import axios from "../../config/axios.js"


function Chat(props) {
    const [userInput, setUserInput] = useState('');
    const sendMessage = async (event) => {
        event.preventDefault();

        const data = {
            message: userInput,
            name: "Johnny Depp",
            timestamp: new Date().toUTCString(),
            received: false,
        }

        passToChatParent(data);

        await axios.post('/v1/messages/new', data);

        setUserInput('');
    };

    const passToChatParent = (data) => {
        props.sendToChatConatiner(data);
    };

    const setValueFromForm = (event) => {
        setUserInput(event.target.value);
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
                { props.messages.map((message, index) =>
                    <div key={message._id} className={`chat_message ${!(index%2) && "chat_receiver"}`} >
                        <p className="chat_user pl-1 mb-1" > {message.name}</p>
                        <p className="chat_message_body">
                            {/*"received": false,*/}
                            <span className="message"> {message.message} </span>
                            <span className="chat_timestamp"> {message.timestamp} </span>
                        </p>
                    </div>
                ) }
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
