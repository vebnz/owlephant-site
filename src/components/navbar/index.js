import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";

const OwlNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="theme-nav"
    >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/assets/images/elephant-color.svg"
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{" "}
        owlephant
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

export default OwlNavbar;
