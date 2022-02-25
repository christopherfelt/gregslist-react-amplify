import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function NavBar() {

    const userButton = (<FontAwesomeIcon icon={faUser} className="text-white" />)

  return (
    <Navbar className="navbar" expand="lg">
      <Container className="" fluid>
        <Navbar.Brand as={Link} to="/" className="brand">Gregslist</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-white" as={Link} to="/cars">
            {" "}
            Cars
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/houses">
            {" "}
            Houses
          </Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/jobs">
            {" "}
            Jobs
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="w-100">
        <Navbar.Collapse className="d-flex justify-content-end">
          <Nav>
            <NavDropdown className="" title={userButton} align={"end"} >
                
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
