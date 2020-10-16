import React, { useEffect, useState } from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';
import Message from './message/Message';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../../../features/chatSlice';
import db from '../../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../../features/userSlice';

function Chat() {
    const [Input, setInput] = useState('');
    const [Messages, setMessages] = useState([]);
    const user = useSelector(selectUser);
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);

    useEffect(() => {
        if (chatId) {
            db.collection('chats')
                .doc(chatId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })))
                ))
        }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: Input,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName: user.displayName,
            })

        setInput('')
    }

    return (
        <div className="chat">
            {/* ChatHeader */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* ChatMessages */}
            <div className="chat__messages">
                {Messages.map(({ id, data }) => (
                    <Message key={id} contents={data} />
                ))}
            </div>

            {/* ChatInput */}
            <div className="chat__input">
                <form>
                    <input
                        placeholder="iMessage"
                        value={Input}
                        onChange={(e) => setInput(e.target.value)} type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
