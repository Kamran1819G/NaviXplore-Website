import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NavbarComponent.scss";
function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <NavLink to="/home" className="navbar-brand">
            Navi<span>X</span>plore
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About NaviXplore" id="basic-nav-dropdown">
                <NavLink to="/changelogs" className="dropdown-item">
                  What`s New
                </NavLink>
                <NavLink to="/navixplore-app-features" className="dropdown-item">
                  App Features
                </NavLink>
                <NavLink to="/feedback" className="dropdown-item">
                  Feedback
                </NavLink>
              </NavDropdown>
              <NavDropdown title="NaviXplore Guide" id="basic-nav-dropdown">
                <NavLink to="/explore-navi-mumbai" className="dropdown-item">
                  Explore Navi Mumbai
                </NavLink>
                <NavLink to="/mumbai-local-railmap" className="dropdown-item">
                  Mumbai Local RailMap
                </NavLink>
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
