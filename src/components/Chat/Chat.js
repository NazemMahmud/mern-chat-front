import React from 'react';
import './Chat.css';

import { Avatar, IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';

function Chat() {
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
                <div className="chat_message" >
                    <p className="chat_user pl-1 mb-1" >User name</p>
                    <p className="chat_message_body">
                        <span className="message"> Text messages lorem ipsum dummy text </span>
                        <span className="chat_timestamp"> {new Date().toUTCString()} </span>
                    </p>
                </div>

                <div className="chat_message chat_receiver" >

                    <p className="chat_user pl-1 mb-1" >User name</p>
                    <p className="chat_message_body">
                        <span className="message"> Text messages </span>
                        <span className="chat_timestamp"> {new Date().toUTCString()} </span>
                    </p>
                </div>

                <div className="chat_message" >
                    <p className="chat_user pl-1 mb-1" >User name</p>
                    <p className="chat_message_body">
                        <span className="message"> Text messages </span>
                        <span className="chat_timestamp"> {new Date().toUTCString()} </span>
                    </p>
                </div>

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
                <div className="chat_input_emoji"></div>

                <div className="chat_input_message"></div>

                <div className="chat_input_audio">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Chat;