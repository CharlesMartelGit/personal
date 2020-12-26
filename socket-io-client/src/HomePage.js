import React from "react"
import auth from "./auth.js"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

function HomePage() {
  let history = useHistory();

  function handleClick() {
    auth.login();
    history.goBack();
  }

  return (
    <div className="App">
      <Button variant="secondary" onClick={handleClick}>Login</Button>
    </div>
  );
}

export default HomePage;
