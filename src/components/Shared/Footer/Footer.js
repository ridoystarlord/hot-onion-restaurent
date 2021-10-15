import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container className="mt-5 pt-5">
        <Row className="pb-5">
          <Col xs={4} md={2}>
            <img className="img-fluid" src={logo} alt="" />
          </Col>
          <Col xs={1} md={4}></Col>
          <Col xs={3} md={2} className="text-white">
            <p className="mb-1">About Online Food</p>
            <p className="mb-1">Read Our Blog</p>
            <p className="mb-1">Sign Up to Delivery</p>
            <p className="mb-0">Add Your Restaurant</p>
          </Col>
          <Col xs={1} md={2}></Col>
          <Col xs={3} md={2} className="text-white">
            <p className="mb-1">Get Helps</p>
            <p className="mb-1">Read FAQs</p>
            <p className="mb-1">View All cities</p>
            <p className="mb-0">Restaurant Near Me</p>
          </Col>
        </Row>
        <Row className="pt-5 pb-3">
          <Col xs={5} md={2}>
            <small className="text-muted">
              Copyright &copy; 2021 Online Food
            </small>
          </Col>
          <Col xs={1} md={4}></Col>
          <Col className="text-white text-lg-end" xs={2} md={2}>
            Privacy Policy
          </Col>
          <Col className="text-white text-lg-end" xs={2} md={2}>
            Terms of Use
          </Col>
          <Col className="text-white text-lg-end" xs={2} md={2}>
            Pricing
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
