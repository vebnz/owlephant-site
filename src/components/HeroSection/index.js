import React from 'react';
import { Container, Row, Col, ButtonGroup, Button , ListGroup} from 'react-bootstrap';
import { Riot, Peertube, Mastodon, Pleroma, Diaspora } from "@icons-pack/react-simple-icons";
import { IPhoneX, Pixel3XL } from 'react-device-frames';

const HeroSection = (props) => {
  return (
    <section className="slide-bg">
      <div className="animation-circle">
        <i></i>
        <i></i>
        <i></i>
      </div>
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
                    (e.g. Riot, Mastadon, Peertube, Pleroma) from the
                    convenience of a single app.
                  </h4>
                  <div className="slid-btn">
                    <Riot color="#ffffff" size={24} />
                    <Mastodon color="#ffffff" size={24} />
                    <Peertube color="#ffffff" size={24} />
                    <Pleroma color="#ffffff" size={24} />
                    <Diaspora color="#ffffff" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="home-right">
              <div className="mobile-slid">
                <IPhoneX screenshot={"http://placehold.jp/1125x2436.png"} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;