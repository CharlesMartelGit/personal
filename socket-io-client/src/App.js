import React, { useState, useEffect } from "react"
import openSocket from "socket.io-client"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./LoginPage.js"
import HomePage from "./HomePage.js"
import ProjectsPage from "./ProjectsPage.js"
import SocketService from "./SocketService.js"

function App() {
  const [response, setResponse] = useState("a");

  useEffect(() => {
    SocketService.setSocket(openSocket('http://localhost:4001', {transports: ['websocket']}));
    SocketService.getSocket().on("FromAPI", data => {
      console.log(data);
      setResponse(data);
    });

    return () => SocketService.getSocket().disconnect();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/projects" component={ProjectsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
