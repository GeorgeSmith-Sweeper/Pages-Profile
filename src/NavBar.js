import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

/* uncomment to use react-bootstrap*/
//import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class NavigationBar extends Component {

  render () {
    return (
      <Navbar brand='George Smith-Sweeper' right>
        <NavItem href="#projects" alt="Link to Projects">Projects</NavItem>
        <NavItem href="#ab-me" alt="Link to About Me">About Me</NavItem>
        <NavItem href="#contact" alt="Link to Contact Me">Contact Me</NavItem>
      </Navbar>
    );
  }
}

export default NavigationBar;
