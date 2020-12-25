import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import tesseract from "./tesseract.gif"
import { Button, Container, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

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
    <div className="App">
    <header className="App-header">
      <Container>
        <img src={tesseract} className="Tesseract" alt="tesseract"/>
        <Form>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@email.com"></Form.Control>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password"></Form.Control>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </header>
    </div>
  );
}

export default App;
