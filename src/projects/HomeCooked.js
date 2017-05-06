import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class HomeCooked extends Component {

  render () {
    return (
      <Row className="projectsRows">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Home Cooked</h3>
            <p>
              <span>
              Ever have trouble making something to eat with the ingredients you have in the fridge? I did too, so I made this site to help me create delicious meals.
              </span>
            </p>
            <p>
              <span>
               Home Cooked allows you to enter ingredients into a search bar and only get back recipes that contain those components.
              </span>
            </p>
            <p>
              <span>
                Who knew dinner could be solved with software.
              </span>
            </p>
            <p>
              <span>
               I built this project using Yummly's API, Vanilla JS, and a dash of Bootstrap for the Jumbotron.
              </span>
            </p>
            <p>
              <span>
               Home Cooked is deployed <a href="http://fridge-project.surge.sh/" className="project-links">here</a>.
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
    )
  }
}


export default HomeCooked;
