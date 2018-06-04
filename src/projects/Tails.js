import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Tails = () => {
  return (
    <article>
      <Row className="projectsRows">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Tails</h3>
            <p>
              <span>
                Given the revelations about the NSA’s massive surveillance operations, and large scale data collection done by advertisers, I thought it would be appropriate to give
                a brief talk about remaining anonymous online.
              </span>
            </p>
            <p>
              <span>
                This talk covers the Tails OS, and skims the surface of how the TOR network handles communications, and uses public and private keys to encrypt information.
              </span>
            </p>
            <p>
              <span>
                If you enjoyed this talk, more information can be found at <a href="https://tails.boum.org/" className="project-links">Tails home page</a>.
              </span>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="media">
          <div className="video-container">
            <iframe
              width="500"
              height="281"
              src="https://www.youtube.com/embed/A-LKDSz4Ik4"
              title="Tails Video"
              frameBorder="0"
              alt="A presentation about web security"
              allowFullScreen
            >
            </iframe>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Tails;
