import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";

import RoutingIndex from "./router/Index";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <RoutingIndex />
    </>
  );
}

export default App;
