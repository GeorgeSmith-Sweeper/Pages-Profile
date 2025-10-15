import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaAngellist, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <footer className="contact-info" id="contact">
      <Row className="social no-bottom-margin">
        <div>
          <h5>Contact me below</h5>
        </div>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://github.com/GeorgeSmith-Sweeper" aria-label="Visit my GitHub profile">
            <FaGithubSquare id="github" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a" aria-label="Visit my LinkedIn profile">
            <FaLinkedin id="linkedin" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://angel.co/george-smith-sweeper" aria-label="Visit my AngelList profile">
            <FaAngellist id="angellist" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="mailto:george.smsweeper@gmail.com" aria-label="Send me an email">
            <FaEnvelope id="mail" aria-hidden="true" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default ContactInfo;
