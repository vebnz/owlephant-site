import React from "react";
import { Container, Row, Col, Image, Card, CardGroup, ListGroup } from "react-bootstrap";

const PrivacyCommitment = () => {
  return (
    <section className="theme-bg" id="section3">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="">
            <div className="section-title text-center">
              <h2 className="text-white">Privacy Commitment</h2>
              <Image src="/assets/images/white-line.png" fluid />
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item>We do not log anything on our servers, nor save anything</ListGroup.Item>
              <ListGroup.Item>Everything is encrypted</ListGroup.Item>
              <ListGroup.Item>We are committed to making sure everyone is completely safe</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyCommitment;
