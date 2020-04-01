import React from "react";
import { Waypoint } from "react-waypoint";
import ColorSection from "../src/components/ColorSection";
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  CardDeck,
  Button,
  Container,
  CardColumns
} from "react-bootstrap";
import { Github } from "@icons-pack/react-simple-icons";

const About = props => {
  return (
    <React.Fragment>
      <Container>
        <ColorSection {...props} fullscreen>
          <div style={{ paddingTop: 20 }} className="section-title text-center">
            <h1>About us</h1>
          </div>
          <CardColumns>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Mike Mackenzie</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  <p>
                    Mike has spent time developing software and networks within
                    the New Zealand healthcare industry. As someone who has been
                    deaf since birth, and received a Cochlear Implant, Mike's
                    got a very good grasp on how business, software and social
                    media combine here in New Zealand and abroad.
                  </p>
                  <p>
                    A practical person, with a knack of solving real world
                    problems with Information Technology. He thinks the time is
                    perfect for people to make the next jump into managing their
                    health better. He's obsessed with accessibility and wants to
                    make the world more accessible to those with disabilities -
                    from personal experience, it makes his ambition even
                    stronger.
                  </p>
                  <p>
                    Mike created a group called CaptionItNZ, in which he made
                    notable companies such as Air New Zealand, Slingshot and
                    Spark create captions for their social media videos via
                    educating them on why it's a good idea. Not just for those
                    who are deaf, but for those who are foreign as captions can
                    be easily translated. They are still doing it to this day.
                  </p>
                </Card.Text>
              </Card.Body>
              <ListGroup>
                <ListGroup.Item>Has a BInfoTech degree</ListGroup.Item>
                <ListGroup.Item>
                  Built up some sizable online communities for games, tv shows,
                  potato chips, you name it
                </ListGroup.Item>
                <ListGroup.Item>
                  Has spent more than 12 years as a software developer
                </ListGroup.Item>
                <ListGroup.Item>Seemingly knows what he's doing</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="mailto:mike@veb.co.nz">
                  mike @ veb.co.nz
                </Card.Link>
                <Card.Link href="http://nz.linkedin.com/in/vebbed">
                  LinkedIn
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Ray Arvin Rimorin</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  <p>
                    Arvin is an experienced mobile/desktop/website/toaster
                    developer. He excels at developing rapid applications and
                    picks up new technology pretty quickly. If it involves a
                    challenge, he's up to the task. And he can double as a
                    writer for humor magazines
                  </p>
                  <p>
                    An inquisitive person with a wide range of interests. Front
                    end, backend, devops, graphic design; a passable full stack
                    developer if there ever was one
                  </p>
                  <p>A part time designer/digital artist</p>
                </Card.Text>
              </Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Started with Java apps for feature phones. Yes, he's a hipster
                </ListGroup.Item>
                <ListGroup.Item>
                  Almost a decade and a half being paid to write software
                </ListGroup.Item>
                <ListGroup.Item>
                  Co founder of Scrambled Eggs Ltd, a moderately successful
                  mobile startup in the Philippines
                </ListGroup.Item>
                <ListGroup.Item>
                  Has very little clue of what he's doing
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="mailto:rayarvin@veb.co.nz">
                  rayarvin @ veb.co.nz
                </Card.Link>
                <Card.Link href="http://ph.linkedin.com/pub/ray-arvin-rimorin">
                  LinkedIn
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Jamie Gracie</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  <p>
                    He olden day before flaunting finds mote, he made sorrow
                    neer yet, cared smile pillared like given long he, a.
                  </p>
                  <p>
                    His ere one where there and birth drowsy. Massy lands the
                    grace these, been and sadness done his. Nor like vile flow
                    such dote rill carnal gild. Reverie break men.
                  </p>
                </Card.Text>
              </Card.Body>
              <ListGroup>
                <ListGroup.Item>Has a BInfoTech degree</ListGroup.Item>
                <ListGroup.Item>
                  Built up some sizable online communities for games, tv shows,
                  potato chips, you name it
                </ListGroup.Item>
                <ListGroup.Item>
                  Has spent more than 12 years as a software developer
                </ListGroup.Item>
                <ListGroup.Item>Seemingly knows what he's doing</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="mailto:jamie@veb.co.nz">
                  jamie @ veb.co.nz
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/jamiegracie/">
                  LinkedIn
                </Card.Link>
              </Card.Body>
            </Card>
          </CardColumns>
        </ColorSection>

        <ColorSection {...props}>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto" className="text-center">
                <div className="section-title">
                  <h2>About the site</h2>
                </div>
                <p>Powered by the following technologies</p>
                <ListGroup horizontal>
                  <ListGroup.Item>React.js</ListGroup.Item>
                  <ListGroup.Item>Next.js</ListGroup.Item>
                  <ListGroup.Item>Bootstrap 4</ListGroup.Item>
                  <ListGroup.Item>Caffeine</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row
              style={{ paddingTop: 10 }}
              className="justify-content-md-center"
            >
              <Col md="auto" className="text-center">
                <a href="https://github.com/vebnz/owlephant-site">
                  <Button
                    className="btn-theme"
                    variant="primary"
                    size="lg"
                    block
                  >
                    <i className="fa fa-github fa-1x fa-fw "></i>
                    View in Github
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>
        </ColorSection>
      </Container>
    </React.Fragment>
  );
};

export default About;
