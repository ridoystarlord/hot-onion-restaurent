import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Food from "../Food/Food";
import "./Breakfast.css";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) =>
        setBreakfast(data.filter((food) => food.category === "Breakfast"))
      );
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {breakfast.map((food) => (
          <Food key={food.key} food={food}></Food>
        ))}
      </Row>
    </div>
  );
};

export default Breakfast;
