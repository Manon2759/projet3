import axios from 'axios';
import React, { useReducer, useState, useContext } from 'react';
import controlPassword from '../utils/ControlPassword';
import { NavLink } from 'react-router-dom';
import { isExpired, decodeToken } from 'react-jwt';
import UserContext from '../context/UserContext';



const Connection = () => {
    const { token, setToken } = useContext(UserContext)
    const [showId, setShowId] = useState(false);

    const [errorMailPassword, setErrorMailPassword] = useState("")
    const [visibility, setVisibility] = useState(false);

    const myDecodedToken = decodeToken(token)
    const isMyTokenExpired = isExpired(token)


    const handleCLick = () => {
        setShowId(!showId)
    }

    const userInfo = {
        email: "",
        password: "",
        id_train: "1"
    }
    const [connectUser, dispatch] = useReducer(handleUserReducer, userInfo)

    // const authorizationConnect = () => {
    //     if (connectUser.email && connectUser.password === identity.res)
    // } 


    const postConnectUser = () => {
        console.log("PostConnect&&&&&&")
        if (controlPassword(connectUser.password)) {
            axios.post(`http://localhost:5000/auth/login`, connectUser, { withCredentials: true })
                .then(res => {
                    setToken(decodeToken(res.data))
                    console.log(decodeToken(res.data), "drtdt");
                }

                )
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
            {console.log(token, "1223")}
            <button className='connection_button' onClick={handleCLick}>CONNEXION</button>
            {showId &&
                <div className="burger">
                    <div className="connection_pseudo">
                        <input type="text" placeholder='Email' onChange={(event) => dispatch({ type: "postEmail", payload: event.target.value })} />
                    </div>
                    <div className="connection_password">
                        <input type="password" placeholder='Password' onChange={(event) => dispatch({ type: "postPassword", payload: event.target.value })} />
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