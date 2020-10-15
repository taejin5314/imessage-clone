import React, { useState } from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';

function Chat() {
    const sendMessage = (e) => {
        e.preventDefault();
        setInput('')
    }
    const [Input, setInput] = useState('')
    return (
        <div className="chat">
            {/* ChatHeader */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            {/* ChatMessages */}
            <div className="chat__messages">
                <h2>I am a message</h2>
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
