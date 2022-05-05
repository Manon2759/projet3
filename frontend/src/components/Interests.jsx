import React from 'react';
const Interests = () => {
    return (
        <div>
            <div className="interest">
                <label for="centre_dinteret" id="interest">Centre d'interet :</label>

                <input type="checkbox" name="cinema" id='cinema' />
                <label for="cinema" id='interests_label'>Cinema </label>

                <input type="checkbox" name="voyage" id='voyage' />
                <label for="voyage" id='interests_label'>Voyage </label>

                <input type="checkbox" name="musique" id='musique' />
                <label for="musique" id='interests_label'>Musique </label>

                <input type="checkbox" name="culture" id='culture' />
                <label for="culture" id='interests_label'>Culture </label>

                <input type="checkbox" name="sport" id='sport' />
                <label for="sport" id='interests_label'>Sport </label>

                <input type="checkbox" name="nouvelle" id='nouvelle' />
                <label for="nouvelle" id='interests_label'>Nouvelle technologie </label>
            </div>
        </div>
    );
};
export default Interests;