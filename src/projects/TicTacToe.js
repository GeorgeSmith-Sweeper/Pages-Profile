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
               My employer gave me the chance to learn a new language (Java), focus on  S.O.L.I.D design, and clean code, and I jumped at the chance with Tic Tac Toe. The game seemed simple on the surface, but creating a commandline version of it with an unbeatable AI, was another thing entirely.
              </span>
            </p>
            <p>
              <span>
               I researched the Minimax and Negamax algorithms to make the AI unbeatable on a standard 3x3 game board, and created an extensive test suite to make sure that the game could handle all types of user input.
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
    </article>
  );
};


export default TicTacToe;
