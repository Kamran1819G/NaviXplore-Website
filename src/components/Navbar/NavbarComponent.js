import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NavbarComponent.scss";
function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            Navi<span>X</span>plore
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About NaviXplore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">
                  Whats New
                </NavDropdown.Item>
                <NavLink to="/navixplore-app-features" className="dropdown-item">
                  App Features
                </NavLink>
                <NavDropdown.Item href="#action/3.4">Feedback</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="NaviXplore Guide" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">
                  Explore Navi Mumbai
                </NavDropdown.Item>
                <NavLink to="/navi-mumbai-metro-map" className="dropdown-item">
                  Navi Mumbai Metro Map
                </NavLink>
              </NavDropdown>
              <NavLink to="/media-coverage" className="nav-link">
                Media Coverage
              </NavLink>
              <NavLink to="/advertise-with-us" className="nav-link">
                Advertise with us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
