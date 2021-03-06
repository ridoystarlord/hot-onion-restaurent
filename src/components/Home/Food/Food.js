import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { key, name, price, description, img } = props.food;
  return (
    <div>
      <Col className="h-100 shadow-sm">
        <Card className="h-100">
          <Card.Img className="w-50 mx-auto pt-3" variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h3 className="text-dark fw-bold">$ {price}</h3>
          </Card.Body>
          <Card.Footer className="text-center">
            <Link to={`/food/${key}`}>
              <Button variant="danger">Buy Now</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
