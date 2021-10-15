import React from "react";
import "./Banner.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="banner-background text-center pt-5">
      <Row>
        <Col xs={12}>
          <h1 className="hero-title">Best Food Waiting For Your Belly</h1>
          <div className="d-flex justify-content-center mt-4">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 border-0"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
