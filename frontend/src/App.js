import { io } from 'socket.io-client';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
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
      <Search />

      <Footer />

    </div>
  );
}

export default App;
