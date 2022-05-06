import { io } from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import React, { useEffect } from 'react';
import Formulaire from './pages/Formulaire';
import Inscription from './pages/Accueil';
import ProfilClient from './pages/ProfilClient';



const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path ="/formulaire" element = {<Formulaire />} />
          <Route path ="/profil" element = {<ProfilClient />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
