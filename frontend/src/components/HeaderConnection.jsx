import React from 'react';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import Connection from './Connexion';

function HeaderConnection() {
  return (
    <div className="header">
      <div>
        {' '}
        <LogoTrainder height="3rem" />
      </div>
      <Connection className="header_connection" />

    </div>
  );
}

export default HeaderConnection;
