import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Food from "../Food/Food";
import "./Dinner.css";
const Dinner = () => {
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {dinner.map((food) => (
          <Food key={food.key} food={food}></Food>
        ))}
      </Row>
    </div>
  );
};

export default Dinner;
