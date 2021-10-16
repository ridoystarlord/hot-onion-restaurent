import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo2.png";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {user.email
                ? [
                    <p className="mt-2 mb-0">{user.displayName}</p>,
                    <Nav.Link
                      as={NavLink}
                      to="/viewcart"
                      className="fw-bold text-dark me-3"
                    >
                      View Cart
                    </Nav.Link>,
                    <Button onClick={logout} variant="danger">
                      Logout
                    </Button>,
                  ]
                : [
                    <Nav.Link
                      as={NavLink}
                      to="/login"
                      className="fw-bold text-dark me-3"
                    >
                      Login
                    </Nav.Link>,
                    <Nav.Link
                      as={NavLink}
                      to="/signup"
                      className="bg-danger rounded-pill text-white px-4"
                    >
                      Sign up
                    </Nav.Link>,
                  ]}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
