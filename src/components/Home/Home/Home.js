import React from "react";
import Banner from "../Banner/Banner";
import FoodMenu from "../FoodMenu/FoodMenu";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodMenu></FoodMenu>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
