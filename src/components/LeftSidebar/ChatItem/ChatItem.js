import React from 'react'
import './ChatItem.css'
import { Avatar, IconButton } from "@mui/material";

function ChatItem({user}) {
    return (
        <div className="sidebar__chat__item">
            <div className="item_avatar">
                 <Avatar />
             </div>
            <div className="chat_info" >
                <h2> {user.name}</h2>
                <p>Last message </p>
            </div>
        </div>
    )
}

export default ChatItem;
