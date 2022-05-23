import React, { useContext, useEffect, useState } from 'react';
import SocketContext from '../context/SocketContext';
import Header from './Header';


const Messages = () => {

    const [messages, setMessages] = useState([])
    const { socketClient } = useContext(SocketContext)

    useEffect(() => {
        socketClient.on("message", (message) => {
            setMessages(prevMessages => prevMessages.push(message))
        })
    }, [])

    return (
        <div>
            < Header />
            {messages.map((message, index) => {
                return <li key={index}>
                    {message}
                </li>
            }
            )}

        </div >
    );
};

export default Messages;