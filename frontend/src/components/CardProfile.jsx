import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Interests from './Interests';

const CardProfile = () => {

    const { putUser, token, userDispatch, completeUser } = useContext(UserContext);




    return (
        <div className='container_bg'>
            <div className='container_cards'>

                <div className='cards'>

                    <div className='cardProfile'>
                        <div className='pseudo_cardProfile'>
                            <h1>{token.pseudonyme}</h1>
                        </div>
                        <div className='img_pseudo_cardProfile'>
                            <div className='img_pseudo'>
                                <img src="../assets/profil.png" alt="Avatar profil" />
                                <button className='button__img'>
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
                                <input type="Text" onChange={(event) => userDispatch({ type: "postContent", payload: event.target.value })} id="description" name="description" />
                            </div>
                            <div className='description_cardProfile'>
                                <label for="localité">Localité</label>
                                <input type="Text" onChange={(event) => userDispatch({ type: "postVille", payload: event.target.value })} id="localite" name="localité" />
                            </div>

                        </form>
                        <div className='button_validation'>
                            <button onClick={putUser}> ✔</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardProfile;