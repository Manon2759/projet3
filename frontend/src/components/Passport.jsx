/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';
import SocketContext from '../context/SocketContext';
import Card from './Card';

function Passport() {
  const { room } = useContext(ChatContext);
  const { user, setUser } = useContext(UserContext);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        (error);
      });
  }, [socket]);

  return (
    <div className="container__card__wrapper">
      {user.map((profil, index) => {
        if (profil.id_train === room) {
          return (
            <Card key={index} profil={profil} />
          );
        }
      })}
    </div>
  );
}
export default Passport;
