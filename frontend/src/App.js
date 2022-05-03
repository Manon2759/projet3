import { io } from "socket.io-client";
import React, { useEffect } from "react";
import Header from "./components/Header";


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
    </div>
  );
}

export default App;
