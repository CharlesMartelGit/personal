import React from "react"
import tesseract from "./resources/tesseract.gif"
import "./App.css"
import auth from "./auth.js"
import { Alert, Button, Container, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function LoginPage() {
  let history = useHistory();

  function handleClick() {
    auth.login();
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
          <Button variant="secondary" type="submit" onClick={handleClick}>Login</Button>
        </Container>
      </header>
    </div>
  );
}

export default LoginPage;
