import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';


const Passport = () => {
    const [description, setDescription] = useState(false)
    const [user, setUser] = useState([])

    const changeTrue = () => {
        setDescription(true)
    }
    const changeFalse = () => {
        setDescription(false)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/users`)
            .then(res => {
                setUser(res.data)
                console.log(res.data, "Sokok")
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    function getAge(date) {
        let diff = Date.now() - date.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }


    return (
        <div>
            {user.map((profil, index) => {
                return <div className='container'>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>

                                <img src='/assets/fille3.jpg' alt="profile one" onMouseOver={changeTrue} onMouseLeave={changeFalse} />

                            </div>
                            {description &&
                                <div className='card_description'>
                                    <h1>Description :</h1>
                                    <p>{profil.content}</p>
                                    <h1>Centres d'intérêt :</h1>
                                    <div className='list'>
                                        <ul>
                                            <li>{profil.cinema === 1 ? "Cinéma" : ""}</li>
                                            <li>{profil.voyage === 1 ? "Voyage 🌍" : ""}</li>
                                            <li>{profil.musique === 1 ? "Musique" : ""}</li>
                                            <li>{profil.culture === 1 ? "Culture" : ""}</li>
                                            <li>{profil.sport === 1 ? "Sport 🏆" : ""}</li>
                                            <li>{profil.nouvelle_technologie === 1 ? "Nouvelle technologie 💻" : ""}</li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            <div className='details'>
                                <div className='name'>
                                    <h1>{profil.pseudonyme}</h1>
                                </div>
                                <ul className='social-icons'>
                                    <li>
                                        <a href=""><FcLike />
                                            <i class="fab fa-heart-f"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className='info'>
                                    <h3> 🎂 {getAge(new Date(profil.date))} ans</h3>
                                    <h3> 📍 {profil.ville}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    );
};

export default Passport;