import React, { useContext, useEffect, useState } from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import SocketContext from '../context/SocketContext';
import ChatContext from '../context/ChatContext';
import Header from '../components/Header';
import UserContext from '../context/UserContext';

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
