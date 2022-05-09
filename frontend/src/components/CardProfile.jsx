import React from 'react';
import Interests from './Interests';

const CardProfile = () => {
    return (
        <div className='container_cards'>
            <div className='cards'>
                <div className='cardProfile'>
                    {/* <img src='./assets/img-gare.jpg' alt='gare' width="100vh" height="450px" /> */}
                    <div className='pseudo_cardProfile'>
                        <h1>PSEUDONYME</h1>
                    </div>
                    <div className='img_pseudo_cardProfile'>
                        <div className='img_cardProfile'>
                            <img src="../assets/profil.png" alt="Avatar profil" />
                            <button>
                                Ajouter votre photo ici
                            </button>
                        </div>

                    </div>
                    <form >
                        <div className='date_cardProfile'>
                            <label for="date_naissance">Date de naissance :</label>
                            <input type="date" id="date_naissance" name="date_naissance"
                                value="2022-05-04"
                                min="2004-01-01" max="2018-12-31" />
                        </div>
                    </form>

                </div>
                <div className='cardProfile2'>
                    <Interests />
                    <form>
                        <div className='description_cardProfile'>
                            <label for="description">Décrivez-vous en quelques mots:</label>
                            <textarea id="description" name="description" >
                            </textarea>
                        </div>

                    </form>
                    <div className='button_validation'>
                        <button> Validez</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CardProfile;