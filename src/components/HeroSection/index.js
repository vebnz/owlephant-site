import React from 'react';
import { Container, Row, Col, ButtonGroup, Button , ListGroup, Image} from 'react-bootstrap';

import { IPhoneX, Pixel3XL } from 'react-device-frames';
import HeroFX from '../HeroFX';


const HeroSection = (props) => {
  return (
    <section className="slide-bg" id="section1">
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
                    (e.g. Pixelfed, Mastadon, Peertube, Pleroma) from the
                    convenience of a single app.
                  </h4>
                  <div className="slid-btn">
                    <i className="fa fa-pixelfed fa-3x fa-inverse"></i>
                    <i className="fa fa-mastodon fa-3x fa-inverse"></i>
                    <i className="fa fa-social-home fa-3x fa-inverse"></i>
                    <i className="fa fa-pleroma fa-3x fa-inverse"></i>
                    <i className="fa fa-peertube fa-3x fa-inverse"></i>
                    <i className="fa fa-diaspora fa-3x fa-inverse"></i>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" style={{display: 'flex', alignContent:"center"}}>
            <HeroFX/>
            <Image src="assets/images/hero.svg" fluid className="d-flex-1" style={{flex: '1 1 auto'}}/>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;