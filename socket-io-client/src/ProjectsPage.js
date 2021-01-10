import React, { useState, useEffect } from "react"
import "./App.css"
import SocketService from "./SocketService.js"
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function ProjectsPage() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    SocketService.getSocket().on("message", (data) => {
      setMessages(messages.concat(data));
    });
  }, [messages]);

  function handleMessage() {
    if (message.trim() !== "") {
      SocketService.getSocket().emit("newMessage", (message));
    }
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={3} className="App-container-top border border-white">
            <Form>
              <Form.Label>Write Something</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type..."
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => {if (event.key === 'Enter') {
                  event.preventDefault();
                  handleMessage();
                }}}></Form.Control>
            </Form>
            <Button variant="secondary" type="submit" onClick={handleMessage}>Send Message</Button>
            {messages.map((message, index) =>
              <Row key={index} className="Message">{message}</Row>
            )}
          </Col>
          <Col sm={9} className="App-container border border-white">
            <Row>
              <Alert className="Field" variant="primary">Projects</Alert>
              <Button className="Field" variant="primary" onClick={handleGoBack}>Home</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;
