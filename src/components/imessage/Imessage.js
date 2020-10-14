import React from 'react';
import './Imessage.css'
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';

function Imessage() {
    return (
        <div className="imessage">
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
            <Chat />
        </div>
    )
}

export default Imessage
