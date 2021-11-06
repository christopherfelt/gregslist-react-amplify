import {Container, Row, Col} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Cars from './components/Cars'

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="p-3">
              <Link to="/cars"><span className="mx-2">Cars</span></Link>  
              <Link to="/houses"><span className="mx-2">Houses</span></Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Switch>
        <Route path="/cars" exact component={Cars} />
        {/* <Route path="/boards" exact component={Boards} /> */}
        {/* <Route path="/boarddetail/:boardId" component={BoardDetail} /> */}

      </Switch>
    </Router>


  );
}

export default App;
