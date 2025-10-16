import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <footer className="contact-info" id="contact">
      <Container>
        <div className="social">
          <h5>Let's Connect</h5>
          <div className="social-icons">
            <a href="https://github.com/GeorgeSmith-Sweeper" aria-label="Visit my GitHub profile">
              <FaGithubSquare id="github" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a" aria-label="Visit my LinkedIn profile">
              <FaLinkedin id="linkedin" aria-hidden="true" />
            </a>
            <a href="mailto:george.smsweeper@gmail.com" aria-label="Send me an email">
              <FaEnvelope id="mail" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default ContactInfo;
