import React, { useContext, useEffect, useState } from 'react';
import SocketContext from '../context/SocketContext';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';
import axios from 'axios';
import Passport from './Passport';

const ChatMessages = () => {
    const { username, setUsername, room } = useContext(ChatContext)
    const { socket } = useContext(SocketContext)
    const { user, setUser, token, updateUser } = useContext(UserContext)
    console.log(user)
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: token.pseudonyme,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    "h" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");

        }
    };

    useEffect(() => {

        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    useEffect(() => {
        axios.get(`http://localhost:5000/users/train/${updateUser.id_train}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data, "okoko")
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                <div className="message-container">
                    {messageList.map((messageContent) => {
                        return (
                            <div
                                className="message"
                                id={token.pseudonyme === messageContent.author ? "you" : "other"}
                            >
                                <div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-meta">
                                        <p id="time">{messageContent.time}</p>
                                        <p id="author">{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Hey..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>

        </div>
    );
};

export default ChatMessages;











