/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import Header from '../components/Header';
import SocketContext from '../context/SocketContext';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';

function Chat() {
  const { socket } = useContext(SocketContext);
  const { room } = useContext(ChatContext);
  const { token } = useContext(UserContext);

  useEffect(() => {
    socket.emit('join_room', room, token.pseudonyme);
  }, [socket]);

  return (
    <div className="container__chat">
      <Header />
      <ChatMessages />
      <Passport />
    </div>
  );
}

export default Chat;
