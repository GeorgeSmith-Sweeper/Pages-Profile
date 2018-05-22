import React from 'react';
import ColorStream from './projects/ColorStream';
import Loop from './projects/Loop';
import HomeCooked from './projects/HomeCooked';
import CubeMaster from './projects/CubeMaster';
import Tails from './projects/Tails';
import BattleShip from './projects/BattleShip';

const ProjectsSection = () => {
  return (
    <div className="projects">
      <a name="projects" id="projAnchor"href="#projects">.</a>
      <ColorStream />
      <BattleShip />
      <Loop />
      <HomeCooked />
      <CubeMaster />
      <Tails />
    </div>
  );
};

export default ProjectsSection;
