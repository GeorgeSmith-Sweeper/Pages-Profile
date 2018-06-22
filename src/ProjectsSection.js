import React from 'react';
import ColorStream from './projects/ColorStream';
import Loop from './projects/Loop';
import HomeCooked from './projects/HomeCooked';
import CubeMaster from './projects/CubeMaster';
import Tails from './projects/Tails';
import BattleShip from './projects/BattleShip';
import TicTacToe from './projects/TicTacToe';

const ProjectsSection = () => {
  return (
    <section className="projects">
      <a name="projects" id="projAnchor"href="#projects">.</a>
      <ColorStream />
      <BattleShip />
      <TicTacToe />
      <Loop />
      <HomeCooked />
      <CubeMaster />
      <Tails />
    </section>
  );
};

export default ProjectsSection;
