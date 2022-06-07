import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ChatContext from '../context/ChatContext';
import SocketContext from '../context/SocketContext';
import UserContext from '../context/UserContext';


const Search = () => {
    const { userDispatch, putUser, updateUser } = useContext(UserContext)
    const { setRoom, room } = useContext(ChatContext)
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()
    // const [min, setMin] = useState(18)
    // const [max, setMax] = useState(100)

    const handleNumberTrain = async () => {
        await putUser()

        if (room !== "") {
            navigate("/chat")

        }
    }

    // if (room !== "") {

    // }



    return (
        <div className='search'>
            {/* <div className="search_preference">
                <div className='label_preference'>
                    <h2>Préférence: {token.id}</h2>
                    <img src='./assets/avatar_femme.png' alt='avatar' />
                    <img src='./assets/avatar_homme.png' alt='avatar' />


                </div>
            </div> */}

            {/* <div className="search_age">
                <label for="age" className="label_age">Âge :
                    <input type="number" className='input_ageLeft' min="18" max={max} onChange={(e) => { setMin(e.target.value) }} />
                    à
                    <input type="number" className='input_ageRight' min={min} max="100" onChange={(e) => { setMax(e.target.value) }} />
                </label>
            </div> */}

            {/* <div className="search_interests">
                <Interests />
            </div> */}

            <div className="search_train">
                <label for="train" className="label_train">N° de train :
                    <input type="number" className="input_train"
                        onChange={(event) => { setRoom(event.target.value); userDispatch({ type: "postTrain", payload: event.target.value }) }} onKeyPress={(event) => { event.key === "Enter" && handleNumberTrain() }} required />
                </label>
            </div>

            <div className="submit">
                <button onClick={handleNumberTrain}>✔ </button>
                <NavLink to='/parametre'><button>supr</button></NavLink>
            </div>


        </div>
    );
};

export default Search;
