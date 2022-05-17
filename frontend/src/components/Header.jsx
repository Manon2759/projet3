import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {


    const [menuBurger, setMenuBurger] = useState(false)

    const handleClick = () => {
        setMenuBurger(!menuBurger)
    }

    return (
        <header>

            <div className='header2'>

                <div className='header2__logo'>
                    <div className='header2__logo__connection'> <LogoTrainder height='3rem' />
                    </div>
                </div>

                <div className='button__burger'>
                    <button onClick={handleClick} > <GiHamburgerMenu /></button>
                </div>
                {menuBurger &&
                    <div className='header2__links__burger'>
                        <div>
                            <NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Mon profil </NavLink>
                        </div>
                        <div>
                            <NavLink to='/recherche' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')} > Ma recherche </NavLink>
                        </div>
                        <div>
                            <NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? '--active_burger' : '')}> Deconnexion</NavLink>
                        </div>
                    </div>
                }
                <div className='header2__links'>
                    <div>
                        <NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? '--active' : '')} > Mon profil </NavLink>
                    </div>
                    <div>
                        <NavLink to='/recherche' className={({ isActive }) => 'nav-link' + (isActive ? '--active' : '')} > Ma recherche </NavLink>
                    </div>
                    <div>
                        <NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? '--active' : '')}> Deconnexion</NavLink>
                    </div>



                </div>
            </div>
        </header>
    );
};

export default Header;