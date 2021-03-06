import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Colorstream from '../resources/Colorstream.png';


const ColorStream = () => {
  return (
    <article>
      <Row className="no-bottom-margin">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Color Stream</h3>
            <p>
              <span>
                Color Stream uses JavaScript and CSS to generate vibrant gradient backgrounds. Each background is completely unique, and can be used as a great banner for your website or project.
              </span>
            </p>
            <p>
              <span>
                Backgrounds can be recreated by clicking the "Reveal" button to display the exact CSS properties used to create the current gradient.
              </span>
            </p>
            <p>
              <span>
                If you like this project, be sure to click the star button located on the page!
              </span>
            </p>
            <p>
              <span>
                <a href="http://colorstream.design" className="project-links">Visit Color Stream</a>.
              </span>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="media">
          <div className="video-container">
            <a href="http://colorstream.design">
              <Image alt="colorstream's homepage" src={Colorstream} responsive />
            </a>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default ColorStream;
