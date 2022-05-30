import React from 'react';
import Header from './Header';
import Messages from './Messages';
import NewMessage from './NewMessage';


const Chat = () => {
    return (

            <div>
                <Header />
                <Messages />
                <NewMessage />

            </div>
       
    );
};

export default Chat;