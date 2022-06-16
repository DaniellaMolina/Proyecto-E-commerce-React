import React from 'react';
import {Link} from "react-router-dom";
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';

const Navbar2 = () => {

    return (
      <Navbar>
        <Nav className="segundo-nav">
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/1`}>BASES</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja" >
              <Link className="nav-link" to={`/categorias/2`}>LABIALES</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/5`}>MASCARA DE PESTAÑAS</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/4`}>SOMBRAS</Link>
            </NavDropdown.Item>            
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/3`}>BROCHAS</Link>
            </NavDropdown.Item>
        </Nav>
      </Navbar>
        
    );
}

export default Navbar2;