import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>

                <div> <LogoTrainder height='3rem' /> </div>

                <div className='footer__links'>
                    <NavLink to='/formulaire' className={({ isActive }) => 'nav-link' + (isActive ? '--active__footer' : '')} > Contact <span>|</span></NavLink>
                    <NavLink to='' className={({ isActive }) => 'nav-link' + (isActive ? '--active__footer' : '')} > Réglementation <span>|</span></NavLink>
                </div>
                <div className='footer__logos__sociaux'>
                    <a href='https://www.facebook.com/search/top?q=spotted%20sncf'><FaFacebook /></a>
                    <a href='https://twitter.com/SNCF'><FaTwitter /></a>
                    <a href='https://www.instagram.com/sncf/'><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;