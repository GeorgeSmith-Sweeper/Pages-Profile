import React, { Component } from 'react';
import LandingHeader from './LandingHeader';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe.jsx';
import ContactInfo from './ContactInfo';

class App extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <div className="divider"></div>
        <AboutMe />
        <div className="divider"></div>
        <ProjectsSection />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
