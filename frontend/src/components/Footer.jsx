import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='footer'>

                <img src='/assets/logo-trainder.png' alt='logo-trainder' />

                <div className='links_footer'>
                    <NavLink className='link' to='/'> Contact <span>|</span> </NavLink>
                    <NavLink className='link' to='' > Réglementation  <span>|</span></NavLink >
                </div>
                
                <a href='https://www.facebook.com/search/top?q=spotted%20sncf'><FaFacebook /></a>
                <a href='https://twitter.com/SNCF'><FaTwitter /></a>
                <a href='https://www.instagram.com/sncf/'><FaInstagram /></a>

            </div>
        </div>
    );
};

export default Footer;