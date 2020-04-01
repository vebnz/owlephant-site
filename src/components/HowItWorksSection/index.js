import React from "react";
import { Container, Row, Col, Image, Card, CardGroup, Button } from "react-bootstrap";

const HowItWorks = (props) => {
  return (
    <section ref={props.innerRef} className="light-bg" id="section2">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <div className="section-title">
              <Image
                alt="Owlephant logo"
                src="/assets/images/elephant-color.svg"
                fluid
                style={{ height: 120, marginBottom: 20 }}
              />
              <h2>What is Owlephant?</h2>
            </div>
            <p>
              Owlephant is an open source platform dedicated to growing the
              fediverse that enables users to view and interact with any
              instance on the fediverse like Mastodon, PeerTube, Pleroma, and
              more all in the same feed. it will be available on iOS and
              Android. We are committed to improving the reach of ActivityPub
              because we believe in free and open source software that can
              protect, respect and fulfill our rights and civil liberties in
              free flowing communication, and owlephant is the mobile answer.
            </p>
            <p>
              We want to make it even easier for the average person to download
              our app and be thrusted into the Fediverse. By using owlephant
              <strong>you</strong> change the rules of the game.
            </p>
            <p>
              Another factor that we're extremely dedicated to is accessibility.
              One of the founders of owlephant is deaf, and the struggles he
              faces on a daily basis is something that we would like to change.
              There's many other people with disabilities who also struggle to
              access social media and we would like to help them.
            </p>
            <p>
              We want to bring everyone together with a unified experience
              across iOS and Android.
            </p>
          </Col>
        </Row>

        <Row>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="/assets/images/card1.svg" alt="Cross platform image showing iOS, Android and Desktop" />
              <Card.Body>
                <Card.Title>Cross Platform</Card.Title>
                <Card.Text>
                  iOS, Android, Desktop, Web Appliance, Smart Fridges, works on
                  multiple platforms and devices
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/assets/images/card2.svg" alt="An image showing different networks tied to one source, Owlephant" />
              <Card.Body>
                <Card.Title>One App, Multiple Service</Card.Title>
                <Card.Text>
                  View and chat from a single source, from numerous sources
                  (Like Mastodon, PixelFed, Pleroma)
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/assets/images/card3.svg" alt="An image depicting a person for accessibility" />
              <Card.Body>
                <Card.Title>Accessible</Card.Title>
                <Card.Text>
                  Our accessibility commitment will be evident in our app design
                  and flow
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
