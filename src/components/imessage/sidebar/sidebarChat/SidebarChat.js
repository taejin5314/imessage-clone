import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from '../../../../features/chatSlice'
import db from '../../../../firebase';
import './SidebarChat.css';
import * as timeago from 'timeago.js';

function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch();
    const [ChatInfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setChatInfo(snapshot.docs.map(doc => doc.data()))
            ))
    }, [id])

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
            <Avatar src={ChatInfo[0]?.photo} />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{ChatInfo[0]?.message}</p>
                <small>{timeago.format(new Date(ChatInfo[0]?.timestamp?.toDate()))}</small>
            </div>
        </div>
    )
}

export default SidebarChat
