import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LandingHeader extends Component {

  render () {
    return (
      <div className="container-fluid landing">
        <Row>
          <Col sm={12}>
            <div className="statement">
              <h1>JAVASCRIPT DEVELOPER / VR ENTHUSIAST</h1>
              <p>
                <span>
                Hey, I'm George. I enjoy creating gorgeous applications,
                and making objects in virtual reality.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingHeader;
