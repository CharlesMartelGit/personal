import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
const socket = openSocket('http://localhost:4001', {transports: ['websocket']});

function App() {
  const [response, setResponse] = useState("a");

  useEffect(() => {
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      {response}
    </p>
  );
}

export default App;
