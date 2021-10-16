import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Signup.css";
import { useForm } from "react-hook-form";
import logo from "../../../../images/logo2.png";
import useAuth from "../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Signup = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const { resgisterEmailPasswordAuth, setUser, writeDatabase } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    resgisterEmailPasswordAuth(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        writeDatabase(data.name, data.email, data.password, user.uid);
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}></Col>
        <Col xs={12} md={4}>
          <Card className="shadow">
            <Card.Img className="img-fluid p-5" variant="top" src={logo} />
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    className="w-100 p-2"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">Name is required</span>
                  )}
                </p>
                <p>
                  <input
                    className="w-100 p-2"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </p>
                <p>
                  <input
                    placeholder="Password"
                    className="w-100 p-2"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">Password is required</span>
                  )}
                </p>
                <p className="text-center">
                  <input
                    className="bg-danger rounded border-0 text-white p-2 w-100"
                    type="submit"
                    value="Sign Up"
                  />
                </p>
              </form>
              <p className="text-center text-danger">
                Already have an account?
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Signup;
