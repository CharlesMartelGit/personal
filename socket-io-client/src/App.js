import React, { useState, useEffect } from "react"
import openSocket from "socket.io-client"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./LoginPage.js"
import HomePage from "./HomePage.js"

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
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
