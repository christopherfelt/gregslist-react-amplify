import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="background"> 
      <Navbar className="navbar" expand="lg" >
        <Container fluid>
          <h1 className="brand">Gregslist</h1>
        </Container>
      </Navbar>
      <Main />
    </div>

  );
}

export default App;
