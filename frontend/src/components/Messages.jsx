import React, { useContext, useEffect } from 'react';
import SocketContext from '../context/SocketContext';



const Messages = () => {

    const { socketClient, input, setInput, messages, setMessages } = useContext(SocketContext)

    useEffect(() => {
        if (socketClient) {
            socketClient.on("message", (messages) => {
                setMessages(...prevMessages => prevMessages.push(messages))
            })
        }
    }, [socketClient, setMessages])




    return (
        <div>
            {messages.map((message, index)=>{
                return <ul key = {index}>
                    <li>
                     {message}   
                    </li>
                </ul>
            })}
            <div>
                <p>{input}</p>
            </div>
        </div >
    );
};

export default Messages;