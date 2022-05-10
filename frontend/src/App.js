import { io } from 'socket.io-client';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CardProfile from './components/CardProfile';
import Passport from './components/Passport';
<<<<<<< HEAD
import Inscritpion from './components/Inscription';
import Search from './components/Search';
=======
import Inscription from './components/Inscription';

>>>>>>> 536f1d51ea1da1bb8bda4263d4c8b5643c43653f


const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })
  }, [])

  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <CardProfile />
      <Passport />
      <Inscritpion />
      <Search />
=======
      <Inscription />
      <CardProfile />
      <Passport />
>>>>>>> 536f1d51ea1da1bb8bda4263d4c8b5643c43653f
      <Footer />

    </div>
  );
}

export default App;
