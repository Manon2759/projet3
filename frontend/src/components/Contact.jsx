/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Contact() {
  return (
    <div className="box_principal">

      <div className="container">
        <h1 className="title title-1">Contact</h1>

        <form className="form">
          <div className="form__group">
            <input type="text" className="form__input" id="nom" placeholder="Votre Nom" required />
            <label htmlFor="nom" className="form__label">Votre Nom</label>
          </div>
          <div className="form__group">
            <input type="email" className="form__input" id="email" placeholder="Votre Email" required />
            <label htmlFor="email" className="form__label">Votre Email</label>
          </div>
          <div className="form__message">
            <label htmlFor="message" className="form__message-label">
              Message :
            </label>
            <textarea name="" id="message" cols="30" rows="10" className="form__input message__input" required />
          </div>

          <div className="submit">
            <input type="submit" className="submitBtn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
