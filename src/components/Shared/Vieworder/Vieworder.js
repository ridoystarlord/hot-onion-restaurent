import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Vieworder = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={2}></Col>
        <Col xs={12} md={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <input
                className="p-2 w-75 d-block mx-auto"
                defaultValue={user.displayName}
                placeholder="Enter Username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-danger d-block text-center">
                  Name is required
                </span>
              )}
            </p>
            <p>
              <input
                className="p-2 w-75 d-block mx-auto"
                placeholder="Enter Your Address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-danger d-block text-center">
                  Addrsss is required
                </span>
              )}
            </p>
            <p>
              <input
                className="p-2 w-75 d-block mx-auto"
                placeholder="Enter Floor No."
                {...register("floor", { required: true })}
              />
              {errors.floor && (
                <span className="text-danger d-block text-center">
                  Floor No. is required
                </span>
              )}
            </p>
            <p>
              <input
                className="p-2 w-75 d-block mx-auto"
                placeholder="Business Name"
                {...register("businessname", { required: true })}
              />
              {errors.businessname && (
                <span className="text-danger d-block text-center">
                  Business Name is required
                </span>
              )}
            </p>
            <p>
              <input
                className="p-2 w-75 d-block mx-auto"
                placeholder="Add delivery instructor"
                {...register("instructor", { required: true })}
              />
              {errors.instructor && (
                <span className="text-danger d-block text-center">
                  Delivery instructor is required
                </span>
              )}
            </p>
            <input
              type="submit"
              value="Save"
              className="bg-danger border-0 text-white w-75 mx-auto py-2 d-block"
            />
          </form>
        </Col>
        <Col md={2}></Col>
        <Col xs={12} md={3}>
          <Card className="shadow">
            <Card.Body>
              <p>
                From <span className="fw-bold">Tangail</span>
              </p>
              <p>Arriving in 20-30 minutes</p>
              <p>
                To <span className="fw-bold">Dhaka</span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Vieworder;
