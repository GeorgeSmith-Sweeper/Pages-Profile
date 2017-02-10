import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class LandingHeader extends Component {

  render () {
    return (
      <div className="container-fluid landing">
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
              /*<h1>JAVASCRIPT DEVELOPER</h1>
              <p>
                <span>
                Hi, I'm George. I enjoy building gorgeous, interactive, and responsive websites, using Vanilla JS, combined with the lastest frameworks.
                </span>
              </p>*/
