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
import SocketContext from './context/SocketContext';
import Chat from './components/Chat';


const App = () => {

  const [token, setToken] = useState("");
  const [socketClient, setSocketClient] = useState(null)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  // Connection à socket.io relation front/back
  
      const connectionOptions = {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transports": ["websocket"]
    };

    const socket = io.connect('https://localhost:5000/', connectionOptions);

  // reducer pour l'update de l'utilisateur
  const completeUser = {
    id: token.id,
    email: token.email,
    pseudonyme: token.pseudonyme,
    content: "",
    picture: "",
    cinema: false,
    voyage: false,
    musique: false,
    culture: false,
    sport: false,
    nouvelle_technologie: false,
    ville: ""
  }
  const [updateUser, userDispatch] = useReducer(handleUserUpdateReducer, completeUser)

  function handleUserUpdateReducer(userUpdateState, action) {
    switch (action.type) {
      case "changeInfoUser":
        return { ...userUpdateState, ...action.payload }
      case "postPicture":
        return { ...userUpdateState, picture: action.payload }
      case "postContent":
        return { ...userUpdateState, content: action.payload }
      case "postVille":
        return { ...userUpdateState, ville: action.payload }
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
    axios.put(`http://localhost:5000/users/${token.id}`, updateUser)
      .catch(error => console.error(error))
  }


  return (

    //utilisation du provider(context) pour l'utilisation des variables/fonctions utiles aux pages.
    < UserContext.Provider value={{ completeUser, updateUser, userDispatch, putUser, handleUserUpdateReducer, token, setToken }
    }>

      < SocketContext.Provider value={{ socketClient, setSocketClient, input, setInput, messages, setMessages }
      }>

        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<AccueilClient />} />
              <Route path="/formulaire" element={<Formulaire />} />
              <Route path="/profil" element={<ProfilClient />} />
              <Route path="/resultat" element={<Resultat />} />
              <Route path="/recherche" element={<Recherche />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
            <Footer />
          </Router>

        </div>
      </SocketContext.Provider>
    </UserContext.Provider >
  );
}

export default App;
