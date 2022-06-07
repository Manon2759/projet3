/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';

function Header() {
  const [menuBurger, setMenuBurger] = useState(false);

  const handleClick = () => {
    setMenuBurger(!menuBurger);
  };

  const logout = useNavigate();
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
              <button
                type="button"
                onKeyPress={(event) => {
                  event.key === 'Enter' && '/';
                }}
                onClick={() => { logout('/'); }}
              >
                Deconnexion

              </button>
            </li>
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
                            onClick={() => { logout('/'); }}
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
