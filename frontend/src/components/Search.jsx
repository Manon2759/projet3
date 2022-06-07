/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContext from '../context/ChatContext';
import UserContext from '../context/UserContext';

function Search() {
  const { userDispatch, putUser } = useContext(UserContext);
  const { setRoom, room } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleNumberTrain = async () => {
    await putUser();

    if (room !== '') {
      navigate('/chat');
    }
  };

  return (
    <div className="search">
      <div className="search_train">
        <label htmlFor="train" className="label_train">
          N° de train :
          <input
            type="number"
            className="input_train"
            onChange={(event) => { setRoom(event.target.value); userDispatch({ type: 'postTrain', payload: event.target.value }); }}
            onKeyPress={(event) => { event.key === 'Enter' && handleNumberTrain(); }}
            required
          />
        </label>
      </div>

      <div className="submit">
        <button
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
  );
}

export default Search;
