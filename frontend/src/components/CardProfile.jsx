/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Interests from './Interests';

function CardProfile() {
  const navigate = useNavigate();
  const {
    putUser, token, userDispatch, updateUser,
  } = useContext(UserContext);
  const [file, setFile] = useState('');
  useEffect(() => {
    localStorage.setItem('updateUser', JSON.stringify(updateUser));
  }, [updateUser]);
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
      .catch((error) => (error));
  };
  const changeImageHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const deleteUser = () => {
    if (confirm("Voulez-vous vraiment supprimer l'utilisateur❓")) {
      axios
        .delete(`http://localhost:5000/users/${token.id}`);
      navigate('/');
      alert("L'utilisateur a été supprimé ✅");
    } else {
      alert("L'utilisateur n'a pas été supprimé ❌");
    }
  };
  return (
    <div className="container__bg">
      <div className="container__cards">
        <div className="cards">
          <div className="cardProfile">
            <div className="pseudo__cardProfile">
              <h1>{token.pseudonyme}</h1>
            </div>
            <div className="img__pseudo__cardProfile">
              <div className="img__pseudo">
                {updateUser.picture ? <img src={updateUser.picture} alt="profil" /> : <img src="./assets/profil.png" alt="photo profil" />}
                <h1>Choississez votre photo ici :</h1>
                <form onSubmit={formSubmitHandler}>
                  <input type="file" name="myImage" onChange={changeImageHandler} accept=".jpg, .jpeg, .png " />
                  <button classeName="img_button" type="submit">Envoyer</button>
                </form>
                <div className="delete__card">
                  <form onSubmit={deleteUser}>
                    <input type="submit" value="Supprimer le profil" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card__interests">
            {/* Composant Chexbox des centres d'interêts */}
            <Interests />
            <form>
              <div className="description__cardProfile">
                <label htmlFor="description">
                  Décrivez-vous en quelques mots:
                  {' '}
                  <br />
                  <input className="describe" type="Text" onChange={(event) => userDispatch({ type: 'postContent', payload: event.target.value })} id="description" name="description" />
                </label>
              </div>
              <div className="description__cardProfile">
                <label htmlFor="localité">
                  Localité 📍:
                  <input type="Text" onChange={(event) => userDispatch({ type: 'postVille', payload: event.target.value })} id="localite" name="localité" />
                </label>
              </div>
            </form>
            <div className="button__validation">
              <NavLink to="/recherche">
                <button
                  onClick={putUser}
                  type="button"
                  onKeyPress={(event) => {
                    event.key === 'Enter' && putUser();
                  }}
                >
                  ✔
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardProfile;
