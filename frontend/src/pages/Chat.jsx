/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import SocketContext from '../context/SocketContext';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';
import Header from '../components/Header';

function Chat() {
  const { socket } = useContext(SocketContext);
  const { room } = useContext(ChatContext);
  const { token } = useContext(UserContext);
  const [userCard, setUserCard] = useState([]);

  useEffect(() => {
    socket.on('card_profil', (profil) => {
      setUserCard(profil);
    });
    setTimeout(
      () => socket.emit('join_room', room, token.pseudonyme),
      2000,
    );
  }, []);

  return (
    <div className="container__chat">
      <Header />
      <ChatMessages />
      <Passport userCard={userCard} />
    </div>
  );
}

export default Chat;
