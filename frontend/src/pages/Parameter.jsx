/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../context/UserContext';

function Parameter() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  const deleteUser = () => {
    axios.delete(`http://localhost:5000/users/${token.id}`);
    navigate('/');
    alert('Votre profil a bien été supprimé');
  };

  return (
    <div>
      <Header />
      <form onSubmit={deleteUser}>
        <input type="submit" value="Supprimer le profil" />
      </form>
    </div>
  );
}

export default Parameter;
