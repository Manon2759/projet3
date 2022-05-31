import axios from 'axios';
import React, { useReducer, useState } from 'react';
import controlPassword from '../utils/ControlPassword';
import { NavLink } from 'react-router-dom';

const Connection = () => {
    const [showId, setShowId] = useState(false);
    const [identity, setIdentity] = useState("");
    const [errorMailPassword, setErrorMailPassword] = useState("")
    const [visibility, setVisibility] = useState(false);
    const [showEmail, setShowEmail] = useState(true);
    const [showPassword, setShowPassword] = useState(true);


    const handleCLick = () => {
        setShowId(!showId)
    }

    const userId = {
        id: "",
        email: "",
        password: "",
        id_train: "1"
    }
    const [connectUser, dispatch] = useReducer(handleUserReducer, userId)

    // const authorizationConnect = () => {
    //     if (connectUser.email && connectUser.password === identity.res)
    // } 


    const postConnectUser = () => {
        if (controlPassword(connectUser.password)) {
            axios.post(`http://localhost:5000/auth`, connectUser, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                })
                .catch(error => setErrorMailPassword(error.response.data.error))
        }
    }


    function handleUserReducer(userState, action) {
        switch (action.type) {
            case "postEmail":
                return { ...userState, email: action.payload }
            case "postPassword":
                return { ...userState, password: action.payload }
            default:
                return userState
        }
    }


    return (
        <div className='connection'>
            <div className='test'>
            <button className='connection_button' onClick={handleCLick}>CONNEXION</button>
            </div>
            {showId &&
                <div className="burger">
                    <div className="connection_pseudo">
                        <input type="text"placeholder= {showEmail ? 'Email':"" } onClick ={() => setShowEmail(!showEmail)} onChange={(event) => dispatch({ type: "postEmail", payload: event.target.value })} />
                    </div>
                    <div className="connection_password">
                        <input type="password" placeholder={showPassword ? 'Password' :""} onClick ={() => setShowPassword(!showPassword)} onChange={(event) => dispatch({ type: "postPassword", payload: event.target.value })} />
                    </div>
                    <p>{errorMailPassword}</p>
                    <div>
                        <button className="fleche" onClick={postConnectUser} > <NavLink to="/recherche">✔</NavLink></button>
                    </div>

                </div>}

        </div>
    );
};

export default Connection;