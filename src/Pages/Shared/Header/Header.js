import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#">logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About us</CustomLink>
              <CustomLink to="/shop"> Shop</CustomLink>
              <CustomLink to="/contact"> Contact</CustomLink>
              <CustomLink to="/login">Login</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
