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
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            {user.email
              ? [
                  <p className="me-3">{user.name}</p>,
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
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
