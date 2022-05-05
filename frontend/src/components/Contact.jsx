import React from 'react';


const Contact = () => {
    return (
        <body className='box_principal'>
            <div className='box_secondaire'>
                <div className='maps'>
                    <img src='/assets/connexion.png' alt='' />
                    <div className='formulaire'>
                        <div className='titre'>
                            <img src='' alt='' />
                            <h1>Formulaire de contact</h1>
                            <h3>N'hésitez pas à nous envoyer un note ci-dessous! </h3>
                            <div className='contact'>
                                <form>
                                    <div className='formulaire_1'>
                                        <input required type='text' className='formulaire_name' placeholder='Nom' />
                                        <input required type='text' className='formulaire_firstname' placeholder='Prénom' />
                                    </div>
                                    <input required type='text' className='formulaire_email' placeholder='Email' />
                                    <textarea required className='formulaire_text' placeholder='Message' />
                                    <button type='submit' className='envoyer'>Envoyer</button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </body>
    );
};

export default Contact;