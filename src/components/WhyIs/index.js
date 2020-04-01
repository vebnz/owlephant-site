import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  CardGroup,
  ListGroup
} from "react-bootstrap";

const WhyIs = props => {
  return (
    <section ref={props.innerRef} className="gradient-bg " id="section3">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center text-white">
            <div className="section-title text-center">
              <h2>WHY is Owlephant?</h2>
            </div>
            <p>
              Owlephant is designed from the start to be accessible, and cross
              platform.
            </p>
            <p>
              We've found that the current apps are not great, and that they're
              not cross platform and they do not seem to care about
              accessibility, and we do.
            </p>
            <p>
              Our app is designed with accessibility in mind, and we will do
              everything in our power to make sure people with various
              disabilities can enjoy the fediverse - dictation, captions for
              videos, and so on. We will be talking with various disability
              groups to make sure that we can make this work for everyone.
            </p>
            <br/>
            <br/>
            <p>As for the name?  We like puns</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyIs;
