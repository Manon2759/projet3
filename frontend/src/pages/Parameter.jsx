/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Parameter() {
  const { token } = useContext(UserContext);

  const deleteUser = () => {
    axios.delete(`http://localhost:5000/users/${token.id}`);
  };
  return (
    <div>
      <form onSubmit={deleteUser}>
        <label htmlFor="delete" className="delete__profil">Supression</label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Parameter;
