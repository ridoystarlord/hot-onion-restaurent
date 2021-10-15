import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const [singleFood, setSingleFood] = useState([]);
  const { name, img, price, description } = singleFood;
  useEffect(() => {
    fetch("http://localhost:3000/food.json")
      .then((res) => res.json())
      .then((data) =>
        setSingleFood(data.find((fo) => fo.key === parseInt(id)))
      );
  }, [id]);
  return (
    <Container className="py-5">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="shadow border-0 p-3">
            <Row>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>
                    <h1>$ {price}</h1>
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col xs={6}>
                <Card.Img variant="top" src={img} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
