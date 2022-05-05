import { io } from 'socket.io-client';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Passport from './components/Passport';



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
      <Passport />
      <Footer />

    </div>
  );
}

export default App;
