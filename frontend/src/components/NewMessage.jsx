import React, { useContext } from 'react';
import SocketContext from '../context/SocketContext';








const NewMessage = () => {


    const { socketClient, input, setInput, messages, setMessages } = useContext(SocketContext)

    const sendMessage = (event) => {
        event.preventDefault();
        if (messages) {
            socketClient.emit('sendMessage', messages, () => setMessages(''))
        }

    }
    <div>
        <p messages={messages}> </p>
        <input messages={messages} setMessages={setMessages}
            sendMessage={sendMessage}></input>

    </div>



    return (

        <div>
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={messages}
                onChange={({ target: { value } }) => setMessages(value)}
                onKeyPress={event => event.key === 'Enter'
                    ? sendMessage(event) : null}
            />
            <button className="sendButton"
                onClick={e => sendMessage(e)}>Send</button>







        </div>



    );
};

export default NewMessage;