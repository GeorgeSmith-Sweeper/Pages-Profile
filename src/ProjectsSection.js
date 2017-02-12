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
                        Loop is deployed <a href="https://loop-teach.herokuapp.com" className="project-links">here</a>.
                    </span>
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} className="media">
                <div className="video-container">
                  <iframe width="500" height="281" src="https://www.youtube.com/embed/3pzsP2I7e3U" frameBorder="0" allowFullScreen></iframe>
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
                    Cube master is the result of a short creative hackathon. I chose to remake Unitys "Roll A Ball" tutorial, while enchancing it to run on Samsungs Gear VR headset.
                    </span>
                  </p>
                  <p>
                    <span>
                    During the hackathon, I had to retrain myself to develop in three dimesions, and account for depth along with height and width.
                    </span>
                  </p>
                  <p>
                  <span>
                    Unitys game engine is incredibly powerful, and was a pleasure to work with.
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
                      Given the revelations about the NSA massive survelience opperations, and the ever present data collection done by advertisers, I thought it would be appropriate to give
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
                      If you enjoyed this talk, more information can be found <a href="https://tails.boum.org/" className="project-links">here</a>.
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
                    Ever have touble making something to eat with the ingredients you have in the fridge? I did too, so I made this site to help me out.
                    </span>
                  </p>
                  <p>
                    <span>
                     Home Cooked allows you to enter ingredients into a search bar and only get back recipies that contain those components.
                    </span>
                  </p>
                  <p>
                    <span>
                     Although this was one of my earlist creations, I still find it to be one of my favorites. Who knew dinner could be solved with software.
                    </span>
                  </p>
                  <p>
                    <span>
                     I built this project using Yummly's API, Vanilla JS, and a dash of Bootstrap for the Jumbotron. It can be viewed <a href="http://fridge-project.surge.sh/" className="project-links">here</a>.
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
