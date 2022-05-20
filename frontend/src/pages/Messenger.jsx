import React from 'react';
import Chat from '../components/Chat';
import ChatContact from '../components/ChatContact';
import Header from '../components/Header'

const Messenger = () => {
    return (
        <div>
            <Header />
            <Chat />
            <ChatContact />
        </div>
    );
};

export default Messenger;