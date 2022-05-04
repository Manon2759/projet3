import React from 'react';

const Inscription = () => {
    return (

        <div className="inscription">

            <div className="inscription_titre">
                <h1>INSCRIPTION</h1>
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
                    <input type="text" id="password" name="Password" />
                </div>

                <div className="inscription_button"><button>Validez</button></div>
            </div>
        </div >

    );
};

export default Inscription;
