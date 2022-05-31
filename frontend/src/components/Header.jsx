import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {


    const [menuBurger, setMenuBurger] = useState(false)

    const handleClick = () => {
        setMenuBurger(!menuBurger)
    }

    const logout = useNavigate()
    return (
        <header>

            <div className='header2'>
                {menuBurger &&
                    <div className='header2__links__burger'>
                        <div>
                            <NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Mon profil </NavLink>
                        </div>
                        <div>
                            <NavLink to='/recherche' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Ma recherche </NavLink>
                        </div>
                        <div>
                            <NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')}> Paramètres</NavLink>
                        </div>
                    </div>
                }
                <div className='button__burger'>
                    <button onClick={handleClick} > <GiHamburgerMenu /></button>
                </div>

                <div className='header2__logo'>
                    <div className='header2__logo__connection'> <LogoTrainder height='2rem' />
                    </div>
                </div>

<<<<<<< HEAD
=======
                {/* ICON BOUTON BURGER */}
                {!menuBurger &&
                    <div className='button__burger'>
                        <button onClick={handleClick} > <GiHamburgerMenu /></button>
                    </div>
                }
>>>>>>> 82ccd356d205c5cd17e1e40f95ef7e6e3df9931c

                <div className='logo_connection'> <LogoTrainder height='3rem' /> </div>
                <div className='links'>
                    <ul>
                        <li>
                            <NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? '--active' : '')} > Mon profil </NavLink>
                        </li>
                        <li>
                            <NavLink to='/recherche' className={({ isActive }) => 'nav-link' + (isActive ? '--active' : '')} > Ma recherche </NavLink>
                        </li>
                        <li>
                             <button onClick={() => { logout("/") }} >Paramètres</button> 
                        </li>
                    </ul>
                </div>

                {/*LINKS PETIT ECRAN AVEC BURGER */}
                {menuBurger &&
                    <div className='header2__links__burger'>
                        <ul>
                            <li>
                                <NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Mon profil </NavLink>
                            </li>
                            <li>
                                <NavLink to='/recherche' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Ma recherche </NavLink>
                            </li>
                            <li>
                                <button onClick={() => { logout("/") }} >Deconnexion</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;