import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import tesseract from "./tesseract.gif"
const socket = openSocket('http://localhost:4001', {transports: ['websocket']});

function App() {
  const [response, setResponse] = useState("a");

  useEffect(() => {
    socket.on("FromAPI", data => {
      setResponse(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <>
    <p>
      {response}
    </p>
    <img src={tesseract} alt="tesseract"/>
    </>
  );
}

export default App;
