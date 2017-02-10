import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LandingHeader extends Component {

  render () {
    return (
      <div className="landing">
        <Row>
          <Col sm={12}>
            <div className="statement">
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingHeader;
