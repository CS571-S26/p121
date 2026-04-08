import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" rounded="true">
      <Container>
        <Navbar.Brand as={NavLink} to="/start">
          Stoody
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/start">
              Start Session
            </Nav.Link>
            <Nav.Link as={NavLink} to="/history">
              History
            </Nav.Link>
            <Nav.Link as={NavLink} to="/presets">
              Presets
            </Nav.Link>
            <Nav.Link as={NavLink} to="/help">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

