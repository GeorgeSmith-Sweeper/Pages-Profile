import React, { Component } from 'react';
import NavigationBar from './NavBar';
import LandingHeader from './LandingHeader';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LandingHeader />
        <ProjectsSection />
        <AboutMe />
      </div>
    );
  }
}

export default App;
