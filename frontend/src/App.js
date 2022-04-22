import { io } from 'socket.io-client';
import React, { useEffect } from 'react';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on("connect", () => {
      console.log("connected");
    })
  }, [])

  return (
    <div className="App">
        <Footer />

    </div>
  );
}

export default App;
