import React, { useContext, useEffect } from 'react';
import SocketContext from '../context/SocketContext';



const Messages = () => {

    const { socketClient, input, setInput, messages, setMessages } = useContext(SocketContext)

    useEffect(() => {
        if (socketClient) {
            socketClient.on("message", (message) => {
                setMessages(...prevMessages => prevMessages.push(message))
            })
        }
    }, [socketClient, setMessages])




    return (
        <div>
            <ul>
                {messages.map(
                    (message, index) => {
                        return <li key={index}>
                            {message}
                        </li>
                    }
                )}
            </ul>
            <div>
                <p>{input}</p>
            </div>
        </div >
    );
};

export default Messages;