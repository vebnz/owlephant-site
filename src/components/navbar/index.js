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
import Link from "next/link";

const OwlNavbar = props => {
  console.log("OwlNavbar -> props", props);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant={props.dark ? "dark" : "light"}
      className={`theme-nav blurry`}
    >
      <Container fluid className="">
        <Link passHref href="/">
          <Navbar.Brand>
            <img
              alt="Owlephant image in text"
              src={`/assets/images/owl${!props.dark ? "dark" : "white"}.svg`}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <span className="navbar-brand-name">owlephant</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/about">
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

OwlNavbar.defaultProps = {
  dark: false
};
export default OwlNavbar;
