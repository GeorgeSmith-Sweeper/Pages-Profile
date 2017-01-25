import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class ProjectsSection extends Component {

  render () {
    return (
          <div className="projects">
          <a name="projects"></a>
            <Row className="no-margin">
              <h1 id="projects-title">PROJECTS / TALKS</h1>
                <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="statement">
                    <h2>Loop</h2>
                    <div className="video-container">
                      <iframe width="500" height="281" src="https://www.youtube.com/embed/3pzsP2I7e3U" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p>
                      <span>
                        A tool for giving teachers realtime feedback from students in the classroom.
                      </span>
                    </p>
                  </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="statement">
                    <h2>Tails</h2>
                    <div className="video-container">
                      <iframe width="500" height="281" src="https://www.youtube.com/embed/A-LKDSz4Ik4" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p>
                      <span>
                      A brief talk about remaining anonymous online using TAIL, and the TOR network.
                      </span>
                    </p>
                  </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="statement">
                    <h2>Cube Master</h2>
                    <div className="video-container">
                      <iframe width="500" height="281" src="https://www.youtube.com/embed/PNkrEoNgo-A" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p>
                      <span>
                      Unitys "Roll A Ball" tutorial remade in Virtual Reality.
                      </span>
                    </p>
                  </div>
                </Col>

                <Col xs={12} sm={12} md={6} lg={3}>
                  <div className="statement">
                    <h2>Home Cooked</h2>
                    <div className="video-container">
                      <iframe width="500" height="281" src="https://www.youtube.com/embed/aQAHGaJZjM8?list=PLx0iOsdUOUmk4F-mEQuJsLn41qXF5alF9" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p>
                      <span>
                      A basic receipe site, using Yummlys Api to match search querys with ingredients.
                      </span>
                    </p>
                  </div>
                </Col>

            </Row>
          </div>
    );
  }
}

export default ProjectsSection;
