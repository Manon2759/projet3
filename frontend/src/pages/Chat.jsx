/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ChatMessages from '../components/ChatMessages';
import Passport from '../components/Passport';
import Header from '../components/Header';

function Chat() {
  return (
    <div className="container__chat">
      <Header />
      <ChatMessages />
      <Passport />
    </div>
  );
}

export default Chat;
