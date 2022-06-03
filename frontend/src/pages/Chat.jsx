import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import ChatContext from '../context/ChatContext';
import SocketContext from '../context/SocketContext';
import UserContext from '../context/UserContext';


const Chat = () => {

    const { username, setUsername, room, setRoom, showChat, setShowChat } = useContext(ChatContext)
    const { socket } = useContext(SocketContext)
    const { token, updateUser } = useContext(UserContext)

    // const joinRoom = () => {
    //     if (room !== "") {
    //         socket.emit("join_room", room);
    //         setShowChat(true)
    //     }
    // }
    useEffect(() => {
        socket.emit("join_room", room);
    }, [])




    return (
        <div className='container__chat'>

            <ChatMessages />
            <Passport />
        </div>

        // );
    )
};

export default Chat;