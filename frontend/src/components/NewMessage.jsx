import React, { useState, useContext, useEffect } from 'react';
import SocketContext from '../context/SocketContext';

const NewMessage = () => {

    const { socketClient } = useContext(SocketContext)
    const [input, setInput] = useState(null)
    const sendMessage = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        socketClient.emit("message", (message) => {
            setInput(prevMessages => prevMessages.push(message))
        })
    }, [])

    return (
        <div>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
};

export default NewMessage;