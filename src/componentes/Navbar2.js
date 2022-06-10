import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

const Navbar2 = () => {

    return (
  <Navbar className="navbar2" bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
        <Link to="">Bases</Link>
        <Link to="">Labiales</Link>
        <Link to="">Sombras</Link>
    </Nav>
    </Container>
  </Navbar>
        
    );
}

export default Navbar2;