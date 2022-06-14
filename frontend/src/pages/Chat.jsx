/* eslint-disable import/no-named-as-default */
import React, { useContext, useEffect } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import SocketContext from '../context/SocketContext';
import ChatContext from '../context/ChatContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Chat() {
  const { socket } = useContext(SocketContext);
  const { room } = useContext(ChatContext);

  useEffect(() => {
    socket.emit('join_room', room);
  }, []);

  return (
    <div className="container__chat">
      <Header />
      <ChatMessages />
      <Passport />
      <Footer />
    </div>
  );
}

export default Chat;
