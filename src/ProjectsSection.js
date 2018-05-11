import React, { Component } from 'react';
import ColorStream from './projects/ColorStream';
import Loop from './projects/Loop';
import HomeCooked from './projects/HomeCooked';
import CubeMaster from './projects/CubeMaster';
import Tails from './projects/Tails';
import BattleShip from './projects/BattleShip';

class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects">
          <a name="projects"> </a>
          <BattleShip />
          <ColorStream />
          <Loop />
          <HomeCooked />
          <CubeMaster />
          <Tails />
        </div>
    );
  }
}

export default ProjectsSection;
