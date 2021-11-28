import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Cars from "./components/Cars";
import UserAuthComp from "./components/UserAuth";
// import NewCar from "./components/NewCar";
import Car from "./components/Car";
import CarPage from "./components/pages/CarPage";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { CarProvider } from "./context/CarState";

function App() {
  return (
    <CarProvider>
      <Router>
        <NavBar />
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="p-3">
                <Link to="/cars">
                  <span className="mx-2">Cars</span>
                </Link>
                <Link to="/houses">
                  <span className="mx-2">Houses</span>
                </Link>
                <Link to="/user-auth">
                  <span className="mx-2">Sign In / Sign Up</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Switch>
          {/* <Route path="/cars" exact component={Cars} /> */}
          {/* <Route path="/new-car" exact component={NewCar} /> */}
          <Route path="/user-auth" exact component={UserAuthComp} />
          <Route path="/car/:carId" exact component={Car} />
          <Route path="/car" exact component={CarPage} />
          {/* <Route path="/boards" exact component={Boards} /> */}
          {/* <Route path="/boarddetail/:boardId" component={BoardDetail} /> */}
        </Switch>
      </Router>
    </CarProvider>
  );
}

export default App;
