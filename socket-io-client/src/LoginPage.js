import React, { useState } from "react"
import tesseract from "./resources/tesseract.gif"
import "./App.css"
import AuthenticationService from "./AuthenticationService.js"
import { Alert, Button, Container, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    AuthenticationService.login();
    history.push("/home");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Alert variant="primary">Charles' Bug Tracker</Alert>
          <img src={tesseract} className="Tesseract" alt="tesseract"/>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}></Form.Control>
            </Form.Group>
          </Form>
          <Button variant="secondary" type="submit" onClick={handleClick}>Login</Button>
        </Container>
      </header>
    </div>
  );
}

export default LoginPage;
