import React, { useReducer } from 'react';
import Interests from './Interests';


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
            <div className='search_card'>
                <form>
                    <div className="search_gender">
                        <label for="gender_select" id="preference">Preference :</label>
                        <select name="gender" id="gender_select">
                            <option value="indifferent">Indifférent</option>
                            <option value="femme">Femme</option>
                            <option value="homme">Homme</option>
                        </select>
                    </div>

                    <div className="search_age">
                        <label for="age_select">Age :</label>
                        <input type="number" min="18" id="search_age_left" placeholder='Age' />
                        <p>à</p>
                        <input type="number" step="1" max="100" id="search_age_right" placeholder='Age' />
                    </div>

                    <div className="train_number">
                        <label for="age_select" id="number">N° de train :</label>
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