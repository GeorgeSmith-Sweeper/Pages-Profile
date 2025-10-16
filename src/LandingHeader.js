import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingHeader = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing">
      <Container>
        <Row>
          <Col sm={12}>
            <h1>George Smith-Sweeper</h1>
            <p className="tagline">
              Software Engineer | Problem Solver | Lifelong Learner
            </p>
            <div className="cta-buttons">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="cta-primary"
              >
                View My Work
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="cta-secondary"
              >
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingHeader;
