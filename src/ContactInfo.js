import React from 'react';
import { Row, Col } from 'react-bootstrap';


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
            <i id="github" className="fa fa-github-square" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a">
            <i id="linkedin" className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="https://angel.co/george-smith-sweeper"><i id="angellist" className="fa fa-angellist" aria-hidden="true" /> </a>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a href="mailto:george.smsweeper@gmail.com">
            <i id="mail" className="fa fa-envelope" aria-hidden="true" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default ContactInfo;
