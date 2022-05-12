import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';

const Header = () => {
    return (
        <header>

            <div className='header2'>

                <div className='logo_after_connection'> <LogoTrainder height='3rem' /> </div>
                <div className='links'>
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