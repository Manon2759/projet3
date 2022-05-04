import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';


const Passport = () => {
    const [description, setDescription] = useState(false)

    const changeTrue = () => {
        setDescription(true)
    }
    const changeFalse = () => {
        setDescription(false)
    }
    return (
        <div>
            <div className='container'>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>

                            <img src='/assets/fille3.jpg' alt="profile one" onMouseOver={changeTrue} onMouseLeave ={changeFalse} />

                        </div>
                        {description &&
                        <div className='card_description'>
                        <h1>Description :</h1>
                        <p>Salut, je suis passionné de voyages, de sport et d'informatique.N'hésitez pas à me contacter si tu as envie de papoter 🥰</p>
                        
                        <ul className='social-icons'>
                            <li>
                                <a href=""><FcLike />
                                    <i class="fab fa-heart-f"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
}
                        <div className='details'>
                            <div className='name'>
                                <h1>Maria Lopez</h1>
                            </div>
                            <div className='info'>
                                <h3> 🎂30 ans</h3>
                                <h3> 📍Paris</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Passport;