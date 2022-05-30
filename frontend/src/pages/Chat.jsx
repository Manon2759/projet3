import React, { useContext, useEffect } from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatContext from '../context/ChatContext';
import SocketContext from '../context/SocketContext';
import UserContext from '../context/UserContext';




const Chat = () => {

    const { username, setUsername, room, setRoom, showChat, setShowChat } = useContext(ChatContext)
    const { socket } = useContext(SocketContext)

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true)
        }
    }
    return (
        <div>
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Rejoindre le chat</h3>
                    <input
                        type="text"
                        placeholder="pseudo"
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                    <input type="text" placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value)
                        }}
                    />
                    <button onClick={joinRoom}>Rejoindre Room</button>
                </div>

            ) : (
                <ChatMessages />
            )}
        </div>

    );
};

export default Chat;