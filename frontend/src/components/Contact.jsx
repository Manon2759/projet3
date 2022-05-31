import React from 'react';

const Contact = () => {
    return (
        <div className='box_principal'>

            <div className="container">
                <h1 className="title title-1">Contact</h1>

                <form className="form">
                    <div className="form__group">
                        <input type="text" className="form__input" id="nom" placeholder="Votre Nom" required />
                        <label for="nom" className="form__label">Votre Nom</label>
                    </div>
                    <div className="form__group">
                        <input type="email" className="form__input" id="email" placeholder="Votre Email" required />
                        <label for="email" className="form__label">Votre Email</label>
                    </div>
                    <div className="form__message">
                        <label for="message" className="form__message-label">
                            Message :
                        </label>
                        <textarea name="" id="message" cols="30" rows="10" className="form__input message__input" required></textarea>
                    </div>

                    <div className="submit">
                        <button class="submitBtn">Envoyer </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;