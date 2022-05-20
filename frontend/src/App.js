import { io } from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import React, { useEffect, useReducer, useState } from 'react';
import Formulaire from './pages/Formulaire';
import AccueilClient from './pages/AccueilClient';
import ProfilClient from './pages/ProfilClient';
import Resultat from './pages/Resultat';
import Recherche from './pages/Recherche';
import Footer from './components/Footer';
<<<<<<< HEAD
import Messenger from './pages/Messenger';
=======
import UserContext from './context/UserContext';
import axios from 'axios';
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6




const App = () => {
  // Connection à socket.io relation front/back
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })
  }, [])

  const [token, setToken] = useState("");

  // reducer pour l'update de l'utilisateur
  const completeUser = {
    id: token.id,
    pseudonyme: token.pseudonyme,
    content: "",
    picture: "",
    cinema: false,
    voyage: false,
    musique: false,
    culture: false,
    sport: false,
    nouvelle_technologie: false
  }
  const [updateUser, dispatch] = useReducer(handleUserUpdateReducer, completeUser)

  function handleUserUpdateReducer(userUpdateState, action) {
    switch (action.type) {
      case "changePseudonyme":
        return { ...userUpdateState, pseudonyme: action.payload }
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

  //appel à axios.put pour l'update de la bdd user.
  const putUser = () => {
    axios.put(`http://localhost:5000/users`, updateUser)
      .then(res => {
        // setUser(res.data)
        console.log(res.data, "fdfdf");
      })
      .catch(error => console.error(error))
  }


  return (

<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<AccueilClient />} />
          <Route path ="/formulaire" element = {<Formulaire />} />
          <Route path ="/profil" element = {<ProfilClient />} />
          <Route path ="/resultat" element = {<Resultat />} />
          <Route path ="/recherche" element = {<Recherche/>} />
          <Route path ="/messenger" element = {<Messenger />} />
        </Routes>
        <Footer />
      </Router>
=======
    //utilisation du provider(context) pour l'utilisation des variables/fonctions utiles aux pages.
    < UserContext.Provider value={{ completeUser, updateUser, dispatch, putUser, handleUserUpdateReducer, token, setToken }
    }>
      <div className="App">
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
>>>>>>> b0dec46f4acdc2da9d38f2d51a2d6d2e57226dc6

      </div>
    </UserContext.Provider >
  );
}

export default App;
