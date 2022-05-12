import React from 'react';
import Interests from './Interests';

const CardProfile = () => {

    return (
        <div className='container_bg'>
            <div className='container_cards'>

                <div className='cards'>

                    <div className='cardProfile'>
                        <div className='pseudo_cardProfile'>
                            <h1>Pseudonyme</h1>
                        </div>
                        <div className='img_pseudo_cardProfile'>
                            <div className='img_pseudo'>
                                <img src="../assets/profil.png" alt="Avatar profil" />
                                <button>
                                    Ajouter votre photo ici
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='card__interests'>
                        {/* Composant Chexbox des centres d'interêts */}
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
        </div>
    );
};

export default CardProfile;