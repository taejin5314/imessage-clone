import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from '../../../../features/chatSlice'
import './SidebarChat.css';

function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName,
                    }))
            }}
            className="sidebarChat"
        >
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>tiemstamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
