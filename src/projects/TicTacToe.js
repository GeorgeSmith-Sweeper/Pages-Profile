import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import TTTBoard from '../resources/TTTBoard.png';

const TicTacToe = () => {
  return (
    <article>
     <Row className="no-bottom-margin">
        <Col xs={12} sm={12} md={5} lg={5} className="text-align-left">
          <div className="description">
            <h3>Tic Tac Toe</h3>
            <p>
              <span>
               My employer gave me the chance to learn a new language, focus on  S.O.L.I.D design, and clean code, and I jumped at the chance with Tic Tac Toe. The game seemed simple on the surface, but creating a commandline version of it with an unbeatable AI, is another thing entirely.
               </span>
            </p>
            <p>
              <span>
                Tic Tac Toe is a command line game made entirely with Java.  I created a simple AI that a person could play against, two game boards to monitor the ships, and a generator to randomly place hidden ships on the boards at the start of the game. Players alternate turns until all the opponents ships have been destroyed.
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
                <a href="https://github.com/GeorgeSmith-Sweeper/Battle-Ship" className="project-links">Tic Tac Toe Repo</a>.
              </span>
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="media">
          <div className="video-container">
            <Image alt="Black and white tic tac toe board"src={TTTBoard} responsive />
          </div>
        </Col>
      </Row>
      Hello TicTacToe
    </article>
  );
};


export default TicTacToe;
