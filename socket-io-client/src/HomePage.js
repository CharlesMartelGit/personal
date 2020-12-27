import React from "react"
import manage from "./resources/manage.png"
import projects from "./resources/projects.png"
import tickets from "./resources/tickets.png"
import "./App.css"
import auth from "./auth.js"
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function HomePage() {
  let history = useHistory();

  function handleClick() {
    auth.login();
    history.goBack();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row className="Row">
              <Alert className="Field" variant="secondary">Currently signed in as : Charles</Alert>
              <Button className="Field" variant="primary" onClick={handleClick}>Logout</Button>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary">
                <img src={manage} className="HomeIcon" alt="manage"/>
              </Button>
              <Alert variant="info">Manage</Alert>
            </Col>
            <Col>
              <Button variant="secondary">
                <img src={projects} className="HomeIcon" alt="projects"/>
              </Button>
              <Alert variant="info">Projects</Alert>
            </Col>
            <Col>
              <Button variant="secondary">
                <img src={tickets} className="HomeIcon" alt="tickets"/>
              </Button>
              <Alert variant="info">Projects</Alert>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default HomePage;
