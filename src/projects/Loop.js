import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Loop = () => {
  return (
    <article>
      <Row className="projectsRows">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Loop</h3>
            <p>
              <span>
                Loop is a communication tool that allows teachers to check for understanding while class is in session.
              </span>
            </p>
            <p>
              <span>
                Loop provides teachers with feedback from students in realtime, using sockets.io and React to quickly handle the state of multiple students, and D3, to visualize classroom mood.
              </span>
            </p>
            <p>
              <span>
                <a href="https://loop-teach.herokuapp.com" className="project-links">Visit Loop</a>.
              </span>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="media">
          <div className="video-container">
            <iframe
              width="500"
              height="281"
              src="https://www.youtube.com/embed/3pzsP2I7e3U"
              title="Loop Video"
              frameBorder="0"
              alt="A video of the loop project"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Loop;
