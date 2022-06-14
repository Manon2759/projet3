/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Interests() {
  const { userDispatch } = useContext(UserContext);

  return (
    <div>
      <div className="interests">
        <div className="title_interets">
          <p>Centres d'interêt :</p>
        </div>
        <div className="centre_interests1">
          <input
            type="checkbox"
            name="cinema"
            id="interests_input"
            onClick={() => userDispatch({ type: 'postCinema' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postCinema' });
            }}
          />
          <label htmlFor="cinema" id="interests_label">Cinéma </label>

          <input
            type="checkbox"
            name="voyage"
            id="voyage"
            onClick={() => userDispatch({ type: 'postVoyage' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postVoyage' });
            }}
          />
          <label htmlFor="voyage" id="interests_label">Voyages </label>

          <input
            type="checkbox"
            name="musique"
            id="interests_input"
            onClick={() => userDispatch({ type: 'postMusique' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postMusique' });
            }}
          />
          <label htmlFor="musique" id="interests_label">Musique </label>
        </div>
        <div className="centre_interests2">
          <input
            type="checkbox"
            name="culture"
            id="interests_input"
            onClick={() => userDispatch({ type: 'postCulture' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postCulture' });
            }}
          />
          <label htmlFor="culture" id="interests_label">Culture </label>

          <input
            type="checkbox"
            name="sport"
            id="interests_input"
            onClick={() => userDispatch({ type: 'postSport' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postSport' });
            }}
          />
          <label htmlFor="sport" id="interests_label">Sport </label>
        </div>
        <div className="centre_interests3">
          <input
            type="checkbox"
            name="nouvelle"
            id="interests_input"
            onClick={() => userDispatch({ type: 'postNouvelle_technologie' })}
            onKeyPress={(event) => {
              event.key === 'Enter' && userDispatch({ type: 'postNouvelle_technologie' });
            }}
          />
          <label htmlFor="nouvelle" id="interests_label">Nouvelles technologies </label>
        </div>

      </div>
    </div>
  );
}

export default Interests;
