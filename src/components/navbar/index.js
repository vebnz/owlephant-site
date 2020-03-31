import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";

const OwlNavbar = (props) => {
console.log("OwlNavbar -> props", props)
  
  return (
    <Navbar expand="lg" fixed="top" variant={props.dark?"dark":"light"} className="theme-nav">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/assets/images/elephant-color.svg"
          width="80"
          height="80"
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
    </Navbar>
  );
};

OwlNavbar.defaultProps = {
  dark: false
}
export default OwlNavbar;
