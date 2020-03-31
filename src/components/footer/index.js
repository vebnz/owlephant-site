import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="copy-right-bg">
      <Container fluid>
        <Row>
          <Col md={12} className="text-center">
            <div className="social-footer">
              <div class="slid-btn">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>

                  <i
                    class="fa fa-facebook fa-stack-1x fa-inverse"
                    aria-hidden="true"
                  ></i>
                </span>
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>

                  <i
                    class="fa fa-mastodon fa-stack-1x fa-inverse"
                    aria-hidden="true"
                  ></i>
                </span>
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>

                  <i
                    class="fa fa-twitter fa-stack-1x fa-inverse"
                    aria-hidden="true"
                  ></i>
                </span>
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>

                  <i
                    class="fa fa-instagram fa-stack-1x fa-inverse"
                    aria-hidden="true"
                  ></i>
                </span>
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i
                    class="fa fa-rss fa-stack-1x fa-inverse"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </Col>
          <div className="col-md-12 text-center">
            <p className="copyright">2020 Copyright Owlephant</p>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
