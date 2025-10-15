import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaAngellist, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <footer className="contact-info">
      <a name="contact"> </a>
      <Row className="social no-bottom-margin">
        <div>
          <h5>Contact me below</h5>
        </div>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://github.com/GeorgeSmith-Sweeper">
            <FaGithubSquare id="github" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a">
            <FaLinkedin id="linkedin" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://angel.co/george-smith-sweeper">
            <FaAngellist id="angellist" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="mailto:george.smsweeper@gmail.com">
            <FaEnvelope id="mail" aria-hidden="true" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default ContactInfo;
