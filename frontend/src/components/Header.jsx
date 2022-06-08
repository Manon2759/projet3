/* eslint-disable no-unused-expressions */
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import axios from 'axios';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import UserContext from '../context/UserContext';

function Header() {
  const [menuBurger, setMenuBurger] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  const handleClick = () => {
    setMenuBurger(!menuBurger);
  };

  const reloadIdTrain = async () => {
    await axios.put(`http://localhost:5000/users/${token.id}`, { pseudonyme: token.pseudonyme, email: token.email, id_train: '' });
  };

  const disconnectUser = async () => {
    await reloadIdTrain();
    await axios.post('http://localhost:5000/auth/logout', { withCredentials: true });
    navigate('/');
  };

  return (
    <header>

      <div className="header2">

        {/* LOGO TRAINDER  */}
        <div className="header2__logo">
          <div className="header2__logo__connection">
            {' '}
            <LogoTrainder height="2rem" />
          </div>
        </div>

        {/* ICON BOUTON BURGER */}
        {!menuBurger
          && (
            <div className="button__burger">
              <button
                type="button"
                onKeyPress={(event) => {
                  event.key === 'Enter' && handleClick();
                }}
                onClick={handleClick}
              >
                {' '}
                <GiHamburgerMenu />
              </button>
            </div>
          )}

        {/* LINKS GRAND ECRAN */}
        <div className="header2__links">
          <ul>
            <li>
              <NavLink to="/profil" className={({ isActive }) => `nav-link${isActive ? '--active' : ''}`}> Mon profil </NavLink>
            </li>
            <li>
              <NavLink to="/recherche" className={({ isActive }) => `nav-link${isActive ? '--active' : ''}`}> Ma recherche </NavLink>
            </li>
            <li>
              <NavLink to="/parametre" className={({ isActive }) => `nav-link${isActive ? '--active' : ''}`}> Paramètres </NavLink>
            </li>

            <button
              type="button"
              onKeyPress={(event) => {
                event.key === 'Enter' && '/';
              }}
              onClick={disconnectUser}
            >
              Deconnexion

            </button>

          </ul>
        </div>

        {/* LINKS PETIT ECRAN AVEC BURGER */}
        {menuBurger
          && (
            <div className="header2__links__burger">
              <ul>
                <li>
                  <NavLink to="/profil" className={({ isActive }) => `nav-link${isActive ? '--active_burger' : ''}`}> Mon profil </NavLink>
                </li>
                <li>
                  <NavLink to="/recherche" className={({ isActive }) => `nav-link${isActive ? '--active_burger' : ''}`}> Ma recherche </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    onKeyPress={(event) => {
                      event.key === 'Enter' && '/';
                    }}
                    onClick={disconnectUser}
                  >
                    Deconnexion

                  </button>
                </li>
              </ul>
            </div>
          )}
      </div>
    </header>
  );
}

export default Header;
