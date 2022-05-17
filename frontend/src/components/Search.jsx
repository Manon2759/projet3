import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import Interests from './Interests';

const Search = () => {
    const { token } = useContext(UserContext)
    const [min, setMin] = useState(18)
    const [max, setMax] = useState(100)


    return (
        <div className='search'>

            <div className="search_preference">
                <div className='label_preference'>
                    <h2>Préférence: {token.email}</h2>
                    <img src='./assets/avatar_femme.png' alt='avatar' />
                    <img src='./assets/avatar_homme.png' alt='avatar' />


                </div>
            </div>

            <div className="search_age">
                <label for="age" className="label_age">Âge :
                    <input type="number" className='input_ageLeft' min="18" max={max} onChange={(e) => { setMin(e.target.value) }} />
                    à
                    <input type="number" className='input_ageRight' min={min} max="100" onChange={(e) => { setMax(e.target.value) }} />
                </label>
            </div>

            <div className="search_interests">
                <Interests />
            </div>

            <div className="search_train">
                <label for="train" className="label_train">N° de train :
                    <input type="number" className="input_train" />
                </label>
            </div>

            <div className="submit">
                <p>✔ </p>
            </div>


        </div>
    );
};

export default Search;
