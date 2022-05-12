import React, { useState, useReducer } from 'react';
import backgroundVideo from '../video/background_video.mp4';
import { ReactComponent as LogoTrainder } from '../assets/trainder_line-heart_v3_red+transparent_back.svg';
import { IoIosEye } from 'react-icons/io';
import axios from 'axios';



const Inscription = () => {

    const [user, setUser] = useState("")
    const [visibility, setVisibility] = useState(false)
    const initalUser = {
        id: "",
        pseudonyme: "",
        date: "",
        email: "",
        password: "",
        id_train: "1"
    }
    const [newUser, dispatch] = useReducer(handleUserReducer, initalUser)
    const postCreateUser = () => {
        axios.post(`http://localhost:5000/users`, newUser)
            .then(res => {
                // setUser(res.data)
                console.log(res.data);
            })
            .catch(error => console.error(error))
    }



    // Action.payload permet l'action de transfert d'informations, utilisation du déstructuring
    function handleUserReducer(userState, action) {
        switch (action.type) {
            case "postPseudo":
                return { ...userState, pseudonyme: action.payload }
            case "postDate":
                return { ...userState, date: action.payload }
            case "postMail":
                return { ...userState, email: action.payload }
            case "postPassword":
                return { ...userState, password: action.payload }
            default:
                return userState
        }
    }



    return (
        <div className="body">
            <div className="bg_video">
                <video autoPlay loop muted className="video">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className="inscription">

                <div className="inscription_titre">
                    <h1><LogoTrainder height='4rem' /></h1>
                </div>
                <div className="inscription_main">
                    <div className="inscription_pseudo">
                        <label for="pseudo" id="label_pseudo">Pseudo  </label>
                        <input type="text" id="pseudo" name="Pseudo"
                            onChange={(event) => dispatch({ type: "postPseudo", payload: event.target.value })} />
                    </div>


                    <div className="inscription_date">
                        <label for="date" id="label_date">Date de naissance  </label>
                        <input type="date" id="date" name="date"
                            onChange={(event) => dispatch({ type: "postDate", payload: event.target.value })} />
                    </div>


                    <div className="inscription_mail">
                        <label for="mail" id="label_mail">Mail  </label>
                        <input type="email" id="mail" name="Mail"
                            onChange={(event) => dispatch({ type: "postMail", payload: event.target.value })} />
                    </div>

                    <div className="inscription_password">
                        <label for="password" id="label_password" >Mot de passe  </label>

                        <input type={visibility ? "text" : "password"} id="password" name="Password"
                            onChange={(event) => dispatch({ type: "postPassword", payload: event.target.value })} />

                        <button onClick={() => setVisibility(!visibility)} href="https://react-icons.github.io/react-icons/search?q=eyes" > <IoIosEye /> </button>
                    </div>
                    <div>
                        <button className="fleche" onClick={postCreateUser} >✔</button>
                    </div>

                </div>
            </div >

        </div>

    );
};

export default Inscription;
