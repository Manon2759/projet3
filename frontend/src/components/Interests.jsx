import React from 'react';

const Interests = () => {
    return (
        <div>
            <div className="interests">
                <div className='title_interets'>
                    <p>Centres d'interêt :</p>
                </div>
                <div className='centre_interests1'>
                    <input type="checkbox" name="cinema" id='interests_input' />
                    <label for="cinema" id='interests_label'>Cinema </label>

                    <input type="checkbox" name="voyage" id='voyage' />
                    <label for="voyage" id='interests_label'>Voyage </label>

                    <input type="checkbox" name="musique" id='interests_input' />
                    <label for="musique" id='interests_label'>Musique </label>
                </div>
                <div className='centre_interests2'>
                    <input type="checkbox" name="culture" id='interests_input' />
                    <label for="culture" id='interests_label'>Culture </label>

                    <input type="checkbox" name="sport" id='interests_input' />
                    <label for="sport" id='interests_label'>Sport </label>
                </div>
                <div className='centre_interests3'>
                    <input type="checkbox" name="nouvelle" id='interests_input' />
                    <label for="nouvelle" id='interests_label'>Nouvelle technologie </label>
                </div>

            </div>
        </div>
    );
};

export default Interests;




