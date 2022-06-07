import React, { useContext, useEffect } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import SocketContext from '../context/SocketContext';
import Header from '../components/Header'
import ChatContext from '../context/ChatContext';

const Chat = () => {

    const { socket } = useContext(SocketContext)
    const { room } = useContext(ChatContext)

    useEffect(() => {
        socket.emit("join_room", room);
    }, [])
    
    return (
        <div className='container__chat'>

            <ChatMessages />
            <Passport />
        </div>
    )
};

export default Chat;