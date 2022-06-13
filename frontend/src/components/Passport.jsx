/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react';
import ChatContext from '../context/ChatContext';
// import SocketContext from '../context/SocketContext';
// import UserContext from '../context/UserContext';

function Passport({ userCard }) {
  const [description, setDescription] = useState(false);
  const { room } = useContext(ChatContext);
  // const { user, setUser } = useContext(UserContext);
  // const { socket } = useContext(SocketContext);
  const changeTrue = () => {
    setDescription(true);
  };
  const changeFalse = () => {
    setDescription(false);
  };

  function getAge(date) {
    const diff = Date.now() - date.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
  return (
    <div className="container__card__wrapper">
      {userCard.map((profil, index) => {
        if (profil.id_train === room) {
          return (
            <div className="card">
              <div className="card-image" key={index}>
                {profil.picture ? <img src={profil.picture} alt="profile one" onMouseOver={changeTrue} onMouseLeave={changeFalse} /> : <img src="./assets/Photo_non_disponible.webp" alt="photo non disponible" />}
              </div>
              {description
                && (
                  <div className="card_description">
                    <h1>Description :</h1>
                    <p>{profil.content}</p>
                    <h1>Centres d'intérêt :</h1>
                    <div className="list">
                      <ul>
                        <li>{profil.cinema === 1 ? 'Cinéma' : ''}</li>
                        <li>{profil.voyage === 1 ? 'Voyage :afrique:' : ''}</li>
                        <li>{profil.musique === 1 ? 'Musique' : ''}</li>
                        <li>{profil.culture === 1 ? 'Culture' : ''}</li>
                        <li>{profil.sport === 1 ? 'Sport :trophée:' : ''}</li>
                        <li>{profil.nouvelle_technologie === 1 ? 'Nouvelle technologie :ordinateur:' : ''}</li>
                      </ul>
                    </div>
                  </div>
                )}
              <div className="details">
                <div className="name">
                  <h1>{profil.pseudonyme}</h1>
                </div>
                <div className="info">
                  <h3>
                    {' '}
                    🎂
                    {getAge(new Date(profil.date))}
                    {' '}
                    ans
                  </h3>
                  <h3>
                    {' '}
                    📍
                    {profil.ville}
                  </h3>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Passport;
