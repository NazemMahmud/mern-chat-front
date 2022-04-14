import React, {useEffect} from 'react';
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

import './LeftSidebar.css';
import ChatItem from './ChatItem/ChatItem';
import axios from "../../config/axios";

function LeftSidebar() {
    useEffect(() => {
        // no dependency, run once
        axios.get('/v1/messages/all')
            .then(res => {
                setMessages(res.data.data);
            });
    }, []);
    return (
        <div className="sidebar">
            {/* Top Header buttons and avatar  */}
            <div className="left_sidebar_header pt-4">

                <div className="sidebar_avatar pl-4 mr-5">
                    <Avatar src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                </div>
                <div className="sidebar_heder_icons">
                    <div className="">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>
                    </div>
                    <div className="">
                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                    </div>
                    <div className="">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            {/* Search in chat list  */}

            <div className="searchbox grid grid-rows-1 ">
                <div className="searchbox_inner">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            {/* Chat - User list  */}
            <div className="sidebar_chat_list">
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </div>
    )
}

export default LeftSidebar;
