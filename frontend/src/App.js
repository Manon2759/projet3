import { io } from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import React, { useEffect, useReducer, useState } from 'react';
import Formulaire from './pages/Formulaire';
import AccueilClient from './pages/AccueilClient';
import ProfilClient from './pages/ProfilClient';
import Resultat from './pages/Resultat';
import Recherche from './pages/Recherche';
import Footer from './components/Footer';
import UserContext from './context/UserContext';
import axios from 'axios';




const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })
  }, [])
  const [token, setToken] = useState("");

  const [user, setUser] = useState("")
  const completeUser = {
    id: token.id,
    text: "",
    picture: "",
    cinema: false,
    voyage: false,
    musique: false,
    culture: false,
    sport: false,
    nouvelle_technologie: false
  }
  const [updateUser, dispatch] = useReducer(handleUserUpdateReducer, completeUser)

  const putUser = () => {
    axios.put(`http://localhost:5000/users`, updateUser)
      .then(res => {
        // setUser(res.data)
        console.log(res.data);
      })
      .catch(error => console.error(error))
  }

  function handleUserUpdateReducer(userUpdateState, action) {
    switch (action.type) {
      // case "updateId":
      //   return { ...userUpdateState, id: action.token.email }
      case "postPicture":
        return { ...userUpdateState, picture: action.payload }
      case "postText":
        return { ...userUpdateState, text: action.payload }
      case "postCinema":
        return { ...userUpdateState, cinema: !userUpdateState.cinema }
      case "postVoyage":
        return { ...userUpdateState, voyage: !userUpdateState.voyage }
      case "postMusique":
        return { ...userUpdateState, musique: !userUpdateState.musique }
      case "postCulture":
        return { ...userUpdateState, culture: !userUpdateState.culture }
      case "postSport":
        return { ...userUpdateState, sport: !userUpdateState.sport }
      case "postNouvelle_technologie":
        return { ...userUpdateState, nouvelle_technologie: !userUpdateState.nouvelle_technologie }

      default:
        return userUpdateState
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, completeUser, updateUser, dispatch, putUser, handleUserUpdateReducer, token, setToken }}>
      <div className="App">
        {console.log(token, "zzz")}
        <Router>
          <Routes>
            <Route path="/" element={<AccueilClient />} />
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/profil" element={<ProfilClient />} />
            <Route path="/resultat" element={<Resultat />} />
            <Route path="/recherche" element={<Recherche />} />
          </Routes>
          <Footer />
        </Router>

      </div>
    </UserContext.Provider>
  );
}

export default App;
