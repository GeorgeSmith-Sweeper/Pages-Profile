import React from 'react';
import { Container } from 'react-bootstrap';
import ColorStream from './projects/ColorStream';
import Loop from './projects/Loop';
import HomeCooked from './projects/HomeCooked';
import CubeMaster from './projects/CubeMaster';
import Tails from './projects/Tails';
import BattleShip from './projects/BattleShip';
import TicTacToe from './projects/TicTacToe';

const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <ColorStream />
        <BattleShip />
        <TicTacToe />
        <Loop />
        <HomeCooked />
        <CubeMaster />
        <Tails />
      </Container>
    </section>
  );
};

export default ProjectsSection;
