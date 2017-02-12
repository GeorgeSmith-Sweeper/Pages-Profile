import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class ProjectsSection extends Component {

  render () {
    return (
          <div className="projects">
          <a name="projects"></a>
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} className="description">
                <div>
                  <h2>Loop</h2>
                  <p>
                    <span>
                      Loop is a communication tool that allows teachers to check for understanding while class is in session.
                    </span>
                  </p>
                  <p>
                    <span>
                      Loop provides teachers with feedback from students in realtime, using Sockets.io, React to quickly handle the state of mutiple students, and D3, to visualise classroom mood.
                    </span>
                  </p>
                  <p>
                    <span>
                        Loop is deployed at: <a href="https://loop-teach.herokuapp.com">loop-teach.herokuapp.com</a>
                    </span>
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="media">
                <div>
                  <div className="video-container">
                    <iframe width="500" height="281" src="https://www.youtube.com/embed/3pzsP2I7e3U" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={7} lg={7} className="description">
                <div>
                  <h1>video</h1>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} className="media">
                <div>
                  <h1>description</h1>
                </div>
              </Col>
            </Row>
          </div>
    );
  }
}

export default ProjectsSection;
