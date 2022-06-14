/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import axios from 'axios';
import React, { useReducer, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import controlPassword from '../utils/ControlPassword';
import UserContext from '../context/UserContext';

function Connection() {
  const { setToken, userDispatch } = useContext(UserContext);
  const [showId, setShowId] = useState(false);
  const [errorMailPassword, setErrorMailPassword] = useState('');
  const navigate = useNavigate();

  const handleCLick = () => {
    setShowId(!showId);
  };

  // utilisation d'un reducer pour saisir les données puis les envoyer dans le back via axios.post
  const userInfo = {
    email: '',
    password: '',
    id_train: '1',
  };

  const [connectUser, dispatch] = useReducer(handleUserReducer, userInfo);

  const postConnectUser = () => {
    // Utilisation de ControlPassword une regex qui permet de bloquer les mdp qui ne remplisse pas les critères
    if (controlPassword(connectUser.password)) {
      axios.post('http://localhost:5000/auth/login', connectUser, { withCredentials: true })
        .then((res) => {
          const decodingToken = decodeToken(res.data);
          const utilsInfo = {
            id: decodingToken.id,
            pseudonyme: decodingToken.pseudonyme,
            email: decodingToken.email,
          };
          setToken(decodingToken);
          userDispatch({ type: 'changeInfoUser', payload: utilsInfo });
          navigate('/recherche');
        })
        .catch((error) => setErrorMailPassword(error.response.data.error));
    }
  };
  // handleUserReducer permet la saisie des infos email/password via les dispatch dans la page connection.
  function handleUserReducer(userState, action) {
    switch (action.type) {
      case 'postEmail':
        return { ...userState, email: action.payload };
      case 'postPassword':
        return { ...userState, password: action.payload };
      default:
        return userState;
    }
  }

  return (
    <div className="connection">

      <button
        type="button"
        className="connection_button"
        onKeyPress={(event) => {
          event.key === 'Enter' && handleCLick();
        }}
        onClick={handleCLick}
      >
        CONNEXION

      </button>

      {showId
        && (
          <div className="burger">

            <div className="connection_pseudo">
              <input
                type="text"
                placeholder="Email"
                onChange={(event) => dispatch({ type: 'postEmail', payload: event.target.value })}
              />
            </div>

            <div className="connection_password">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => dispatch({ type: 'postPassword', payload: event.target.value })}
                onKeyPress={(event) => {
                  event.key === 'Enter' && postConnectUser();
                }}
                required
              />
            </div>

            <p>{errorMailPassword}</p>

            <div>
              <button
                type="button"
                className="fleche"
                onKeyPress={(event) => {
                  event.key === 'Enter' && postConnectUser();
                }}
                onClick={postConnectUser}
              >
                ✔
              </button>
            </div>

          </div>
        )}

    </div>
  );
}

export default Connection;
