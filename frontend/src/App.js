import { io } from 'socket.io-client';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CardProfile from './components/CardProfile';
import Passport from './components/Passport';
import Inscritpion from './components/Inscription';
import Search from './components/Search';


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
      <CardProfile />
      <Passport />
      <Inscritpion />
      <Search />
      <Footer />

    </div>
  );
}

export default App;
