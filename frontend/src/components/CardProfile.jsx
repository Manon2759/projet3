/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import Interests from './Interests';

function CardProfile() {
  const {
    putUser, token, userDispatch, updateUser,
  } = useContext(UserContext);

  const [file, setFile] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('myImage', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.put(`http://localhost:5000/users/uploads/${token.id}`, formData, config)
      .then((res) => {
        alert('The file is successfully uploaded');
        userDispatch({ type: 'postPicture', payload: res.data.data.name });
      })
      .catch((error) => error);
  };

  const changeImageHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="container_bg">
      <div className="container_cards">

        <div className="cards">

          <div className="cardProfile">
            <div className="pseudo_cardProfile">
              <h1>{token.pseudonyme}</h1>
            </div>
            <div className="img_pseudo_cardProfile">
              <div className="img_pseudo">
                <img src={updateUser.picture} alt="Avatar profil" />
                <h1>File Upload</h1>
                <form onSubmit={formSubmitHandler}>
                  <input type="file" name="myImage" onChange={changeImageHandler} accept=".jpg, .jpeg, .png " />
                  <button type="submit">Upload</button>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="card__interests">
          {/* Composant Chexbox des centres d'interêts */}
          <Interests />
          <form>
            <div className="description_cardProfile">
              <label htmlFor="description">Décrivez-vous en quelques mots:</label>
              <input type="Text" onChange={(event) => userDispatch({ type: 'postContent', payload: event.target.value })} id="description" name="description" />
            </div>
            <div className="description_cardProfile">
              <label htmlFor="localité">Localité</label>
              <input
                type="Text"
                onChange={(event) => userDispatch({ type: 'postVille', payload: event.target.value })}
                id="localite"
                name="localité"
                onKeyPress={(event) => {
                  event.key === 'Enter' && putUser();
                }}
              />
            </div>

          </form>
          <div className="button_validation">
            <button
              onClick={putUser}
              type="button"
              onKeyPress={(event) => {
                event.key === 'Enter' && putUser();
              }}
            >
              ✔

            </button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default CardProfile;
