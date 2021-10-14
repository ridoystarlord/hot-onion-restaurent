import React from "react";
import "./Banner.css";
import { Button, Form, FormControl } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-background text-center pt-5">
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
    </div>
  );
};

export default Banner;
