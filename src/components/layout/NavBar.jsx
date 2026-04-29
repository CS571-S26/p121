import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar data-bs-theme="dark" expand="md" className="stoody-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/start">
          Stoody
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" aria-label="Toggle primary navigation" />
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

