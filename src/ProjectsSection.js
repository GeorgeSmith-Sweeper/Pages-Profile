import React, { Component } from 'react';
import ColorStream from './projects/ColorStream';
import Loop from './projects/Loop';
import HomeCooked from './projects/HomeCooked';
import CubeMaster from './projects/CubeMaster';
import Tails from './projects/Tails';

class ProjectsSection extends Component {

  render () {
    return (
      <div className="projects">
          <a name="projects"> </a>
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
