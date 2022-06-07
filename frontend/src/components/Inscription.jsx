/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-empty */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import React, { useState, useReducer } from 'react';
import { IoIosEye } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../video/background_video.mp4';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import controlPassword from '../utils/ControlPassword';

function Inscription() {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const initialUser = {
    pseudonyme: '',
    email: '',
    date: '',
    password: '',
    id_train: '1',
  };

  function getAge(date) {
    const diff = Date.now() - date.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

<<<<<<< HEAD
const Inscription = () => {
    const [visibility, setVisibility] = useState(false)
    const initialUser = {
        id: "",
        pseudonyme: "",
        email: "",
        date: "",
        password: "",
        id_train: "1"
=======
  const [newUser, dispatch] = useReducer(handleUserReducer, initialUser);

  const checkInput = () => {
    let inputBoolean = false;
    for (const obligation in newUser) {
      if (obligation === '') {
        inputBoolean = true;
      }
>>>>>>> 0c5f78c26d321e38914f90525a3695220c24f20b
    }
    if (inputBoolean) {
    } else { postCreateUser(); }
  };

  const postCreateUser = () => {
    if (getAge(new Date(newUser.date)) >= 18) {
      if (controlPassword(newUser.password)) {
        axios.post('http://localhost:5000/users', newUser)
          .then((res) => {
            navigate('/profil');
          })
          .catch((error) => (error));
      } else { alert('Le format du mot de passe est incorrecte (min 8 caractère 1 maj 1 caractère special et 1 chiffre minimum)'); }
    } else { alert("Tu n'es pas encore majeure"); }
  };

  // Action.payload permet l'action de transfert d'informations, utilisation du déstructuring
  function handleUserReducer(userState, action) {
    switch (action.type) {
      case 'postPseudo':
        return { ...userState, pseudonyme: action.payload };
      case 'postDate':
        return { ...userState, date: action.payload };
      case 'postMail':
        return { ...userState, email: action.payload };
      case 'postPassword':
        return { ...userState, password: action.payload };
      default:
        return userState;
    }
  }

  return (
    <div className="body">
      <div className="bg__video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="inscription">

        <div className="inscription__titre">
          <h1><LogoTrainder height="4rem" /></h1>
        </div>

        <div className="inscription__main">

          <div className="inscription__pseudo">
            <input type="text" id="pseudo" name="Pseudo" placeholder="Pseudo" onChange={(event) => dispatch({ type: 'postPseudo', payload: event.target.value })} required />
          </div>

          <div className="inscription__date">
            <input type="date" id="date" name="date" onChange={(event) => dispatch({ type: 'postDate', payload: event.target.value })} required />
          </div>

          <div className="inscription__mail">
            <input type="email" id="mail" name="Mail" placeholder="Email" onChange={(event) => dispatch({ type: 'postMail', payload: event.target.value })} required />
          </div>

          <div className="inscription_password">
            <label htmlFor="password" id="label_password">Mot de passe  </label>

            <input
              type={visibility ? 'text' : 'password'}
              id="password"
              name="Password"
              onChange={(event) => dispatch({ type: 'postPassword', payload: event.target.value })}
              onKeyPress={(event) => {
                event.key === 'Enter' && checkInput();
              }}
              required
            />

            <button
              type="button"
              onKeyPress={(event) => {
                event.key === 'Enter' && setVisibility(!visibility);
              }}
              onClick={() => setVisibility(!visibility)}
              href="https://react-icons.github.io/react-icons/search?q=eyes"
            >
              {' '}
              <IoIosEye />
              {' '}
            </button>
          </div>
          <div>
            <button
              type="button"
              onKeyPress={(event) => {
                event.key === 'Enter' && checkInput();
              }}
              className="fleche"
              onClick={checkInput}
            >
              ✔

            </button>
          </div>

        </div>
      </div>

    </div>

  );
}

export default Inscription;
