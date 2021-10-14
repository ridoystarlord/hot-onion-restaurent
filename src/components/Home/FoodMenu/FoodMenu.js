import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div>
            <Tabs
              defaultActiveKey="Breakfast"
              id="uncontrolled-tab-example"
              className="mb-3 justify-content-center"
            >
              <Tab eventKey="Breakfast" title="Breakfast">
                <Breakfast></Breakfast>
              </Tab>
              <Tab eventKey="Lunch" title="Lunch">
                <Lunch></Lunch>
              </Tab>
              <Tab eventKey="Dinner" title="Dinner">
                <Dinner></Dinner>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodMenu;
