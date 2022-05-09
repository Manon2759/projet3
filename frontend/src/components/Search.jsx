import React, { useState } from 'react';
import Interests from './Interests';

const Search = () => {

    const [min, setMin] = useState(18)
    const [max, setMax] = useState(100)


    return (
        <div className='search'>

            <div className="search_preference">
                <label for="preference" className='label_preference'>Préférence :
                    <select name="gender" id="preference">
                        <option value="indifférent">Indifférent</option>
                        <option value="femme">Femme</option>
                        <option value="homme">Homme</option>
                    </select>
                </label>
            </div>

            <div className="search_age">
                <label for="age" className="label_age">Age :
                    <input type="number" className='input_ageLeft' min="18" max={max} onChange={(e) => { setMin(e.target.value) }} />
                    à
                    <input type="number" className='input_ageRight' min={min} max="100" onChange={(e) => { setMax(e.target.value) }} />
                </label>
            </div>

            <div className="search_interests">
                <Interests />
            </div>

            {/* <div className="search_train">
                <label for="train" className="label_train">N° de train :
                    <input type="number" className="input_train" />
                </label>
            </div> */}

            <div className="submit">
                <label for="envoyer" className="label_submit">
                    <input type="submit" name="envoyer" id="input_submit" />
                </label>
            </div>


        </div>
    );
};

export default Search;
