import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="copy-right-bg">
      <Container fluid>
        <Row>
          <Col md={12} className="text-center">
            <div className="social-footer">
              <div className="slid-btn">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <a href="https://mastodon.social/@owlephant" target="_blank">
                    <i
                      className="fa fa-mastodon fa-stack-1x fa-inverse"
                      aria-hidden="true"
                    ></i>
                    <span style={{ display: 'none' }}>Owlephant account at Mastodon</span>
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <a href="https://twitter.com/owlephantapp" target="_blank">
                    <i
                      className="fa fa-twitter fa-stack-1x fa-inverse"
                      aria-hidden="true"
                    ></i>
                    <span style={{ display: 'none' }}>Owlephant account at Twitter</span>
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <a href="https://pixelfed.social/owlephant" target="_blank">
                    <i
                      className="fa fa-pixelfed fa-stack-1x fa-inverse"
                      aria-hidden="true"
                    ></i>
                    <span style={{ display: 'none' }}>Owlephant account at PixelFed</span>
                  </a>
                </span>

              </div>
            </div>
          </Col>
          <div className="col-md-12 text-center">
            <p className="copyright">2020 Copyright Owlephant</p>
          </div>
        </Row>
      </Container>
    </footer >
  );
};

export default Footer;
