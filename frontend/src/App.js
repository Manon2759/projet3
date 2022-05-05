import { io } from "socket.io-client";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Inscritpion from "./components/Inscription";
import Footer from "./components/Footer";
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
      <Inscritpion />
      <Footer />

    </div>
  );
}

export default App;
