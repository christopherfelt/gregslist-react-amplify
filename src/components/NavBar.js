import React from 'react'
import {Navbar, Container} from "react-bootstrap"


export default function NavBar() {
    return (
        <Navbar className="navbar" expand="lg" >
            <Container fluid>
                <h1 className="brand">Gregslist</h1>
            </Container>
        </Navbar>
    )
}
