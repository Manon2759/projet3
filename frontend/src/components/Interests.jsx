import React, { useState, useReducer } from 'react';
import axios from 'axios';


const Interests = () => {

    const [user, setUser] = useState("")
    const completeUser = {
        id: "",
        text: "",
        cinema: false,
        voyage: false,
        musique: false,
        culture: false,
        sport: false,
        nouvelle_technologie: false
    }
    const [updateUser, dispatch] = useReducer(handleUserUpdateReducer, completeUser)
    const putUser = () => {
        axios.post(`http://localhost:5000/users`, updateUser)
            .then(res => {
                // setUser(res.data)
                console.log(res.data);
            })
            .catch(error => console.error(error))
    }

    function handleUserUpdateReducer(userUpdateState, action) {
        switch (action.type) {
            case "postText":
                return { ...userUpdateState, text: action.payload }
            case "postCinema":
                return { ...userUpdateState, cinema: !userUpdateState.cinema }
            case "postVoyage":
                return { ...userUpdateState, voyage: !userUpdateState.voyage }
            case "postMusique":
                return { ...userUpdateState, musique: !userUpdateState.musique }
            case "postCulture":
                return { ...userUpdateState, culture: !userUpdateState.culture }
            case "postSport":
                return { ...userUpdateState, sport: !userUpdateState.sport }
            case "postNouvelle_technologie":
                return { ...userUpdateState, nouvelle_technologie: !userUpdateState.nouvelle_technologie }

            default:
                return userUpdateState
        }
    }

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




