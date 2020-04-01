import React from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  ListGroup,
  Image
} from "react-bootstrap";

import { IPhoneX, Pixel3XL } from "react-device-frames";
import HeroFX from "../HeroFX";

const HeroSection = props => {
  return (
    <section ref={props.innerRef} className="slide-bg" id="section1">
      {/* <div className="animation-circle">
        <i></i>
        <i></i>
        <i></i>
      </div> */}
      <Container>
        <Row>
          <Col md="6">
            <div className="d-flex-1">
              <div className="slide-text">
                <div>
                  <h1>Connect and interact with the entire fediverse</h1>
                  <h4>
                    Owlephant is a cross-platform mobile app that allows users
                    to manage and interact with any popular “fediverse” service
                    (e.g. Pixelfed, Mastodon, Peertube, Pleroma) from the
                    convenience of a single app.
                  </h4>
                  <div className="slid-btn">
                    <a href="https://pixelfed.org/" target="_blank">
                      <span style={{ display: 'none' }}>PixelFed website</span>
                      <i className="fa fa-pixelfed fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://joinmastodon.org/" target="_blank">
                      <span style={{ display: 'none' }}>Mastodon website</span>
                      <i className="fa fa-mastodon fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://socialhome.network/" target="_blank">
                      <span style={{ display: 'none' }}>SocialHome website</span>
                      <i className="fa fa-social-home fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://pleroma.social/" target="_blank">
                      <span style={{ display: 'none' }}>Pleroma website</span>
                      <i className="fa fa-pleroma fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://joinpeertube.org/" target="_blank">
                      <span style={{ display: 'none' }}>PeerTube website</span>
                      <i className="fa fa-peertube fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://diasporafoundation.org/" target="_blank">
                      <span style={{ display: 'none' }}>Diasopra website</span>
                      <i className="fa fa-diaspora fa-3x fa-inverse"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="particle-container">
            <HeroFX />
            <Image
              alt="Owlephant in fancy text"
              src="assets/images/hero.svg"
              fluid
              className="d-flex-1"
              style={{ flex: "1 1 auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
