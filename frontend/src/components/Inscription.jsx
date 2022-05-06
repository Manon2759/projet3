import React from 'react';
import backgroundVideo from '../video/background_video.mp4';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';


const Inscription = () => {
    return (
        <div className="body">
            <div className="bg_video">
                <video autoPlay loop muted id="video">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className="inscription">

                <div className="inscription_titre">
                    <h1><LogoTrainder height='4rem' /></h1>
                </div>
                <div className="inscription_main">
                    <div className="inscription_pseudo">
                        <label for="pseudo" id="label_pseudo">Pseudo  </label>
                        <input type="text" id="pseudo" name="Pseudo" />
                    </div>


                    <div className="inscription_mail">
                        <label for="mail" id="label_mail">Mail  </label>
                        <input type="email" id="mail" name="Mail" />
                    </div>

                    <div className="inscription_password">
                        <label for="password" id="label_password">Mot de passe  </label>
                        <input type="text" id="password" name="Password" /><p><img className="fleche" src="./assets/fleche.png" alt="fleche" /></p>

                    </div>


                </div>
            </div >

        </div>

    );
};

export default Inscription;
