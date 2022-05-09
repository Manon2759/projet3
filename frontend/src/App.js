import { io } from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import React, { useEffect } from 'react';
import Formulaire from './pages/Formulaire';
import AccueilClient from './pages/AccueilClient';
import ProfilClient from './pages/ProfilClient';
import Footer from './components/Footer';





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
          <Route path="/AccueilClient" element={<AccueilClient />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/profil" element={<ProfilClient />} />
  
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
