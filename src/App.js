import React from "react";
import "./App.css";
import Popular from "./components/Popular";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Switch>
          <Route exact path="/" component={Popular} />
          <Route path="/details" component={Details} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
