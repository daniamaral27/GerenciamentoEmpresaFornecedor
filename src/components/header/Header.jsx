import React from "react";
import "/GerenciamentoEmpresaFornecedor/src/styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return(
      <>
          <header className='header-page'>
                  <div className='header-container'>
                      <Navbar>
        <Navbar.Brand href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="empresa">Empresa</Nav.Link>
            <Nav.Link href="fornecedor">Fornecedor</Nav.Link>
            <NavDropdown title="Formularios">
                <Nav.Link href="formempresa">Empresa</Nav.Link>
                <Nav.Link href="formfornecedor">Fornecedor</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
                      <div className='header-content-txt'>
                       
                      </div>
                  </div>
              </header>
      </>
  )
}

export default Header