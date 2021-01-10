import React from "react"
import "./App.css"
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function ProjectsPage() {
  let history = useHistory();

  function handleMessage() {

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
              <Form.Control type="text" placeholder="Type..." onChange={(event) => handleMessage()}></Form.Control>
            </Form>
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
