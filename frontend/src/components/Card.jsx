/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Card({ profil }) {
  const [description, setDescription] = useState(false);

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
    <div>
      <div className="card" onMouseOver={changeTrue} onMouseLeave={changeFalse} onFocus={changeTrue}>
        <div className="card-image">
          {profil.picture ? <img src={profil.picture} alt="profile one" /> : <img src="./assets/Photo_non_disponible.webp" alt="non disponible" />}
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
                          <li>{profil.voyage === 1 ? 'Voyage' : ''}</li>
                          <li>{profil.musique === 1 ? 'Musique' : ''}</li>
                          <li>{profil.culture === 1 ? 'Culture' : ''}</li>
                          <li>{profil.sport === 1 ? 'Sport' : ''}</li>
                          <li>{profil.nouvelle_technologie === 1 ? 'Nouvelle technologie' : ''}</li>
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
    </div>
  );
}

export default Card;
