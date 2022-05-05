import React, { useReducer } from 'react';


/*const initialState = {
    min: 18,
    max: 100
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increaseMin":
            return {
                min: state.min + 1,
                max: state.max
            }
        case "increaseMax":
            return {
                min: state.min,
                max: state.max + 1
            }
        case "decreaseMin":
            return {
                min: state.min - 1,
                max: state.max
            }
        case "decreaseMax":
            return {
                min: state.min,
                max: state.max - 1
            }
        default:
            return state
    }
}
*/




const Search = () => {

    /*   const [ageState, dispatch] = useReducer(reducer, initialState)
   
       const handleMin = (event) => {
           if (ageState.min < event.target.value) {
               dispatch({ type: "decreaseMin" })
           }
           else if (ageState.min > event.target.value) {
               dispatch({ type: "increaseMin" })
           }
       }
   */
    return (
        <div className='search'>
            <h3>Recherche</h3>
            <div className='search-card'>
                <form>
                    <div className="search-gender">
                        <label for="gender-select" id="preference">Preference :</label>
                        <select name="gender" id="gender-select">
                            <option value="indifferent">Indifférent</option>
                            <option value="femme">Femme</option>
                            <option value="homme">Homme</option>
                        </select>
                    </div>

                    <div className="search-age">
                        <label for="age-select">Age :</label>
                        <input type="number" min="18" id="search-age-left" />
                        <p>à</p>
                        <input type="number" step="1" max="100" id="search-age-right" />
                    </div>

                    <div className="search-interest">
                        <label for="centre d'interet" id="interest">Centre d'interet :</label>
                        <input type="checkbox" name="cinema" id='cinema' />
                        <label for="cinema" id='cinema'>Cinema </label>
                        <input type="checkbox" name="voyage" id='voyage' />
                        <label for="voyage" id='voyage'>Voyage </label>
                        <input type="checkbox" name="musique" id='musique' />
                        <label for="musique" id='musique'>Musique </label>
                        <input type="checkbox" name="culture" id='culture' />
                        <label for="culture" id='culture'>Culture </label>
                        <input type="checkbox" name="sport" id='sport' />
                        <label for="sport" id='sport'>Sport </label>
                        <input type="checkbox" name="nouvelle" id='nouvelle' />
                        <label for="nouvelle" id='nouvelle'>Nouvelle technologie </label>
                    </div>

                    <div className="train-number">
                        <label for="age-select" id="number">Indiquez votre n° de train </label>
                        <input type="number" id='numberTrain' />
                    </div>

                    <div className="submit">
                        <input type="submit" id='button' />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Search;