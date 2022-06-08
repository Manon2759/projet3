/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { io } from 'socket.io-client';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import React, { useReducer, useState } from 'react';
import axios from 'axios';
import Formulaire from './pages/Formulaire';
import AccueilClient from './pages/AccueilClient';
import ProfilClient from './pages/ProfilClient';
import Resultat from './pages/Resultat';
import Recherche from './pages/Recherche';
import Footer from './components/Footer';
import UserContext from './context/UserContext';
import SocketContext from './context/SocketContext';
import Chat from './pages/Chat';
import ChatContext from './context/ChatContext';
import Parameter from './pages/Parameter';
import NotFound from './pages/NotFound';

const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};

const socket = io.connect('http://localhost:5000', connectionOptions);

function App() {
  // Connection à socket.io relation front/back

  const [token, setToken] = useState('');
  const [socketClient, setSocketClient] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState([]);

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  // reducer pour l'update de l'utilisateur
  const completeUser = {
    id: token.id,
    email: token.email,
    pseudonyme: token.pseudonyme,
    id_train: '',
    content: '',
    picture: '',
    cinema: false,
    voyage: false,
    musique: false,
    culture: false,
    sport: false,
    nouvelle_technologie: false,
    ville: '',
  };
  const [updateUser, userDispatch] = useReducer(handleUserUpdateReducer, completeUser);

  function handleUserUpdateReducer(userUpdateState, action) {
    switch (action.type) {
      case 'changeInfoUser':
        return { ...userUpdateState, ...action.payload };
      case 'postPicture':
        return { ...userUpdateState, picture: action.payload };
      case 'postContent':
        return { ...userUpdateState, content: action.payload };
      case 'postVille':
        return { ...userUpdateState, ville: action.payload };
      case 'postCinema':
        return { ...userUpdateState, cinema: !userUpdateState.cinema };
      case 'postVoyage':
        return { ...userUpdateState, voyage: !userUpdateState.voyage };
      case 'postMusique':
        return { ...userUpdateState, musique: !userUpdateState.musique };
      case 'postCulture':
        return { ...userUpdateState, culture: !userUpdateState.culture };
      case 'postSport':
        return { ...userUpdateState, sport: !userUpdateState.sport };
      case 'postNouvelle_technologie':
        return { ...userUpdateState, nouvelle_technologie: !userUpdateState.nouvelle_technologie };

      default:
        return userUpdateState;
    }
  }

  // appel à axios.put pour l'update de la bdd user.
  const putUser = async () => {
    await axios.put(`http://localhost:5000/users/${token.id}`, updateUser)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        alert('Votre profil est à jour');
      });
  };

  return (

    // utilisation du provider(context) pour l'utilisation des variables/fonctions utiles aux pages.
    <UserContext.Provider value={{
      completeUser,
      updateUser,
      userDispatch,
      putUser,
      handleUserUpdateReducer,
      token,
      setToken,
      user,
      setUser,
    }}
    >
      <SocketContext.Provider
        value={{
          socketClient,
          setSocketClient,
          input,
          setInput,
          messages,
          setMessages,
          socket,
        }}
      >
        <ChatContext.Provider
          value={{
            username,
            setUsername,
            room,
            setRoom,
            showChat,
            setShowChat,
          }}
        >

          <div className="App">

            <Router>
              <Routes>
                <Route path="/" element={<AccueilClient />} />
                {token && <Route path="/formulaire" element={<Formulaire />} />}
                {token && <Route path="/profil" element={<ProfilClient />} />}
                {token && <Route path="/resultat" element={<Resultat />} />}
                {token && <Route path="/recherche" element={<Recherche />} />}
                {token && <Route path="/chat" element={<Chat />} />}
                {token && <Route path="/parametre" element={<Parameter />} />}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>

          </div>
        </ChatContext.Provider>
      </SocketContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
