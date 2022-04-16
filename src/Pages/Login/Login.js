import React, { useRef } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };
  const navigate = useNavigate();

  return (
    <Container>
      <div className="w-50 mx-auto">
        <h3>Please Login</h3>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            New To Genius Car?
            <span className="text-danger" onClick={() => navigate("/register")}>
              Please Register
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
