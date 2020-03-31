import React from "react";
import { Container, Row, Col, Image, Card, CardGroup, ListGroup } from "react-bootstrap";

const Accessibility = (props) => {
  return (
    <section ref={props.innerRef} className="team-bg" id="section2">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <div className="section-title">
              <Image
                src="/assets/images/card3.svg"
                fluid
                style={{ height: 120, marginBottom: 20 }}
              />
              <h2>Accessibility</h2>
              <div className="slid-btn" style={{ color: "#3fa9f5" }}>
                <i className="fa fa-blind fa-3x "></i>
                <i className="fa fa-deaf fa-3x "></i>
                <i className="fa fa-cc fa-3x "></i>
                <i className="fa fa-low-vision fa-3x "></i>
              </div>
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item>A color palate that is easy on the eyes, with the option to change if needed</ListGroup.Item>
              <ListGroup.Item>We offer dictation so people with disabilities can enjoy the fediverse</ListGroup.Item>
              <ListGroup.Item>Hands free ways to navigate the mobile app</ListGroup.Item>
              <ListGroup.Item>Captioning on video content when possible</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Accessibility;
