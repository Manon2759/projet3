import { io } from "socket.io-client";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })

  }, [])
  return (
    <div className="App">

      <p>test</p>
    </div>
  );
}

export default App;
