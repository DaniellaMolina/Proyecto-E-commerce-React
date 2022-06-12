import React from 'react';
import {Link} from "react-router-dom";
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';

const Navbar2 = () => {

    return (
      <Navbar>
        <Nav className="segundo-nav">
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/Bases`}>BASES</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja" >
              <Link className="nav-link" to={`/categorias/Labiales`}>LABIALES</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/Mascara-de-Pestañas`}>MASCARA DE PESTAÑAS</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/Sombras`}>SOMBRAS</Link>
            </NavDropdown.Item>            
            <NavDropdown.Item className="nav-caja">
              <Link className="nav-link" to={`/categorias/Brochas`}>BROCHAS</Link>
            </NavDropdown.Item>
        </Nav>
      </Navbar>
        
    );
}

export default Navbar2;