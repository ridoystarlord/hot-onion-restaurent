import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";

import choose1 from "../../../images/chooseus/choose1.png";
import choose2 from "../../../images/chooseus/choose2.png";
import choose3 from "../../../images/chooseus/choose3.png";
import bell from "../../../images/ICON/Group 1133.png";
import delivery from "../../../images/ICON/Group 204.png";
import homedelivery from "../../../images/ICON/Group 245.png";

const WhyChooseUs = () => {
  return (
    <Container className="mb-5">
      <h2 className="pb-3">Why You Choose Us?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quasi quisquam consequatur libero voluptas a ad ab, laboriosam, quas,
        modi dolore esse saepe sit quaerat. Sunt odit corporis tenetur dolore,
        aliquam id vel. Cupiditate ratione nisi illum, voluptatibus expedita id,
        suscipit autem, minus ut consectetur enim quisquam doloremque aliquam!
        Nulla.
      </p>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="shadow border-0 p-1">
            <Card.Img className="p-1" variant="top" src={choose1} />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img src={delivery} alt="" />
                </Col>
                <Col xs={10}>
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow border-0 p-1">
            <Card.Img className="p-1" variant="top" src={choose2} />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img className="text-danger" src={bell} alt="" />
                </Col>
                <Col xs={10}>
                  <Card.Title>A Good Auto Responder</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow border-0 p-1">
            <Card.Img className="p-1" variant="top" src={choose3} />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img src={homedelivery} alt="" />
                </Col>
                <Col xs={10}>
                  <Card.Title>Home Delivery</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
