import React from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase.config";

const Register = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email);
  };
  return (
    <div>
      <Container>
        <div className="w-50 mx-auto">
          <h3>Please Register</h3>
          <div className="register-form">
            <form onSubmit={handleRegister}>
              <input type="text" name="name" />
              <br />
              <input type="email" name="email" />
              <br />
              <input type="password" name="password" />
              <br />
              <input type="submit" value="Register" />
              <p>
                Already Registered?
                <Link
                  className="text-danger pe-auto ms-1"
                  to="/login"
                  onClick={() => navigate("/login")}
                >
                  Please Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
