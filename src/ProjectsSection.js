import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class ProjectsSection extends Component {

  render () {
    return (
          <div className="projects">
          <a name="projects"></a>
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} className="description text-align-left">
                <div>
                  <h3>Loop</h3>
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
             {/* Next Project */}
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} className="description text-align-left">
                <div>
                  <h3>Cube Master</h3>
                    <p>
                      <span>
                      Unitys "Roll A Ball" tutorial remade in Virtual Reality.
                      </span>
                    </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="media">
                <div>
                  <div className="video-container">
                    <iframe width="500" height="281" src="https://www.youtube.com/embed/PNkrEoNgo-A" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Next Project */}
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} className="description text-align-left">
                <div>
                  <h3>Tails</h3>
                    <p>
                      <span>
                      A brief talk about remaining anonymous online using TAIL, and the TOR network.
                      </span>
                    </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="media">
                  <div className="video-container">
                    <iframe width="500" height="281" src="https://www.youtube.com/embed/A-LKDSz4Ik4" frameBorder="0" allowFullScreen></iframe>
                  </div>
              </Col>
            </Row>
            {/* Next Project */}
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} className="description text-align-left">
                <div>
                  <h3>Home Cooked</h3>
                    <p>
                      <span>
                      A brief talk about remaining anonymous online using TAIL, and the TOR network.
                      </span>
                    </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="media">

                  <div className="video-container">
                      <iframe width="500" height="281" src="https://www.youtube.com/embed/aQAHGaJZjM8?list=PLx0iOsdUOUmk4F-mEQuJsLn41qXF5alF9" frameBorder="0" allowFullScreen></iframe>
                  </div>

              </Col>
            </Row>
          </div>
    );
  }
}

export default ProjectsSection;
