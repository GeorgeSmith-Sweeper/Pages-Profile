import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setExpanded(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="navigation shadow-sm" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home" onClick={handleBrandClick}>
          <span className="brand-name">GSS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('ab-me')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
