import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container
} from "react-bootstrap";

const OwlNavbar = (props) => {
console.log("OwlNavbar -> props", props)
  
  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant={props.dark ? "dark" : "light"}
      className={`theme-nav blurry`}
    >
      <Container fluid className="">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={`/assets/images/owl${!props.dark ? "dark" : "white"}.svg`}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span className="navbar-brand-name">owlephant</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

OwlNavbar.defaultProps = {
  dark: false
}
export default OwlNavbar;
