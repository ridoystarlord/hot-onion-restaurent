import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container className="mt-5 pt-5">
        <Row>
          <Col xs={2}>
            <img className="img-fluid" src={logo} alt="" />
          </Col>
          <Col xs={4}></Col>
          <Col xs={2} className="text-white">
            <p className="mb-1">About Online Food</p>
            <p className="mb-1">Read Our Blog</p>
            <p className="mb-1">Sign Up to Delivery</p>
            <p className="mb-0">Add Your Restaurant</p>
          </Col>
          <Col xs={2}></Col>
          <Col xs={2} className="text-white">
            <p className="mb-1">Get Helps</p>
            <p className="mb-1">Read FAQs</p>
            <p className="mb-1">View All cities</p>
            <p className="mb-0">Restaurant Near Me</p>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={12}>
            <Navbar bg="dark" variant="light">
              <Navbar.Brand href="/">
                <small className="text-muted">
                  Copyright &copy; 2021 Online Food
                </small>
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  to="/privacy-policy"
                  className="text-white px-4"
                >
                  Privacy Policy
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/terms-of-use"
                  className="text-white px-4"
                >
                  Terms of Use
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/pricing"
                  className="text-white px-4"
                >
                  Pricing
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
