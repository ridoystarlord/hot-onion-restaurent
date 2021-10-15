import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Food from "../Food/Food";
import "./Lunch.css";
const Lunch = () => {
  const [lunch, setLunch] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) =>
        setLunch(data.filter((food) => food.category === "Lunch"))
      );
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {lunch.map((food) => (
          <Food key={food.key} food={food}></Food>
        ))}
      </Row>
    </div>
  );
};

export default Lunch;
