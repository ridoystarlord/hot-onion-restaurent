import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { id } = useParams();
  const [singleFood, setSingleFood] = useState([]);
  const { name, img, price, description } = singleFood;
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ridoystarlord/hot-onion-restaurent/main/public/food.json"
    )
      .then((res) => res.json())
      .then((data) =>
        setSingleFood(data.find((fo) => fo.key === parseInt(id)))
      );
  }, [id]);
  const handleIncrease = () => {
    let count = document.getElementById("foodCount").innerText;
    count++;
    document.getElementById("foodCount").innerText = count;
    document.getElementById("foodPrice").innerText = count * price;
    console.log(count);
  };
  const handleDecrease = () => {
    let count = document.getElementById("foodCount").innerText;
    if (parseInt(count) === 1) {
      return;
    }
    count--;
    document.getElementById("foodCount").innerText = count;
    document.getElementById("foodPrice").innerText = count * price;
    console.log(count);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="shadow border-0 p-3">
            <Row>
              <Col xs={8} md={6}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text className="fs-1 fw-bold">
                    $ <span id="foodPrice">{price}</span>
                  </Card.Text>
                  <div className="">
                    <div className="d-flex justify-content-start align-items-center">
                      <Button
                        onClick={handleIncrease}
                        className="text-danger fs-3 py-0 rounded-pill"
                        variant="light"
                      >
                        +
                      </Button>
                      <p id="foodCount" className="mx-3 mb-0 fs-4">
                        1
                      </p>
                      <Button
                        onClick={handleDecrease}
                        className="fs-3 py-0 rounded-pill"
                        variant="light"
                      >
                        -
                      </Button>
                    </div>
                  </div>
                  <Link to="/viewcart">
                    <Button className="rounded-pill px-5 mt-5" variant="danger">
                      Add to Cart
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
              <Col
                xs={4}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Card.Img src={img} />
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
