import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LandingHeader = () => {
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col sm={12}>
            <h1>George Smith-Sweeper</h1>
            <p className="tagline">
              Software Engineer | Problem Solver | Lifelong Learner
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingHeader;
