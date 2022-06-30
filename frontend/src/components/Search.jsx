/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';

function Search() {
  const { token } = useContext(UserContext);
  const { setRoom, room } = useContext(ChatContext);
  const navigate = useNavigate();

  const trainNumber = {
    id: token.id,
    email: token.email,
    pseudonyme: token.pseudonyme,
    id_train: '',
  };

  const [newNumberTrain, trainDispatch] = useReducer(handleNumberTrainReducer, trainNumber);

  function handleNumberTrainReducer(trainNumberState, action) {
    switch (action.type) {
      case 'postTrain':
        return { ...trainNumberState, id_train: action.payload };
      default:
        return trainNumberState;
    }
  }

  const putNumberTrain = async () => {
    await axios.put(`http://localhost:5000/users/${token.id}`, newNumberTrain);
  };

  const handleNumberTrain = async () => {
    await putNumberTrain();

    if (room !== '') {
      navigate('/chat');
    }
  };

  return (
    <div className="search">
      <div className="search_card">
        <div className="search_title">
          <h1>
            {`Bienvenue ${token.pseudonyme} 💙`}
          </h1>
        </div>
        <div className="search_text">
          <h2>
            Ton trajet te semble long,
            {' '}
            <br />
            nous avons la solution :

          </h2>
        </div>
        <div className="search_train">
          <label htmlFor="train" className="label_train">
            Entrez votre N° de train :
            <input
              type="number"
              className="input_train"
              onChange={(event) => { setRoom(event.target.value); trainDispatch({ type: 'postTrain', payload: event.target.value }); }}
              onKeyPress={(event) => { event.key === 'Enter' && handleNumberTrain(); }}
              required
            />
          </label>
        </div>

        <div className="submit">
          <button
            className="button_fleche"
            type="button"
            onKeyPress={(event) => {
              event.key === 'Enter' && handleNumberTrain();
            }}
            onClick={handleNumberTrain}
          >
            ✔
            {' '}

          </button>
        </div>
      </div>

    </div>
  );
}

export default Search;
