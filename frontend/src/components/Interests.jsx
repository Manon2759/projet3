import React, { useContext } from 'react';
import UserContext from '../context/UserContext';


const Interests = () => {
    const { dispatch } = useContext(UserContext)




    return (
        <div>
            <div className="interests">
                <div className='title_interets'>
                    <p>Centres d'interêt :</p>
                </div>
                <div className='centre_interests1'>
                    <input type="checkbox" name="cinema" id='interests_input'
                        onClick={() => dispatch({ type: "postCinema" })} />
                    <label for="cinema" id='interests_label'>Cinéma </label>

                    <input type="checkbox" name="voyage" id='voyage'
                        onClick={() => dispatch({ type: "postVoyage" })} />
                    <label for="voyage" id='interests_label'>Voyages </label>

                    <input type="checkbox" name="musique" id='interests_input'
                        onClick={() => dispatch({ type: "postMusique" })} />
                    <label for="musique" id='interests_label'>Musique </label>
                </div>
                <div className='centre_interests2'>
                    <input type="checkbox" name="culture" id='interests_input'
                        onClick={() => dispatch({ type: "postCulture" })} />
                    <label for="culture" id='interests_label'>Culture </label>

                    <input type="checkbox" name="sport" id='interests_input'
                        onClick={() => dispatch({ type: "postSport" })} />
                    <label for="sport" id='interests_label'>Sport </label>
                </div>
                <div className='centre_interests3'>
                    <input type="checkbox" name="nouvelle" id='interests_input'
                        onClick={() => dispatch({ type: "postNouvelle_technologie" })} />
                    <label for="nouvelle" id='interests_label'>Nouvelles technologies </label>
                </div>

            </div>
        </div>
    );
};

export default Interests;




