import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

/* uncomment to use react-bootstrap*/
//import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class NavigationBar extends Component {

  render () {
    return (
      <Navbar brand='George Smith-Sweeper' right fixed>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#ab-me">About Me</NavItem>
      </Navbar>
    );
  }
}

export default NavigationBar;
