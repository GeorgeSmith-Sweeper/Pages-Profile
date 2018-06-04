import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Battleship from '../resources/BattleShip.png';


const BattleShip = () => {
  return (
    <article>
      <Row className="no-bottom-margin">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Battle Ship</h3>
            <p>
              <span>
                Battle Ship is a command line game made entirely with Python. The goal was to emulate the classic Hasbro® game of the same name. I created a simple AI that a person could play against, two game boards to monitor the ships, and a generator to randomly place hidden ships on the boards at the start of the game. Players alternate turns until all the opponents ships have been destroyed.
              </span>
            </p>
            <p>
              <span>
                While the game may not be as feature rich as the original, it is still challenging, and offers a nerve racking race to find enemy ships.
              </span>
            </p>
            <p>
              <span>
                If you like this project, be sure to click the star button located on the Repo!
              </span>
            </p>
            <p>
              <span>
                <a href="https://github.com/GeorgeSmith-Sweeper/Battle-Ship" className="project-links">Battle Ship Repo</a>.
              </span>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="media">
          <div className="video-container">
            <Image alt="Battle Ship Game Board"src={Battleship} responsive />
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default BattleShip;
