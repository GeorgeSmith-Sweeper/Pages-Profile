import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class CubeMaster extends Component {
  render () {
    return (
      <Row className="projectsRows">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Cube Master</h3>
            <p>
              <span>
              Cube Master is the result of a short creative hackathon. I chose to remake Unity's "Roll A Ball" tutorial, while enhancing it to run on Samsung's Gear VR headset.
              </span>
            </p>
            <p>
              <span>
              During the hackathon, I had to retrain myself to develop in three dimensions, and account for depth along with height and width.
              </span>
            </p>
            <p>
            <span>
              Unity's game engine is incredibly powerful, and was a pleasure to work with.
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
    )
  }
}


export default CubeMaster;
