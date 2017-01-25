import React, { Component } from 'react';
import NavigationBar from './NavBar';
import LandingHeader from './LandingHeader';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LandingHeader />
        <div className="divider"></div>
        <ProjectsSection />
        <div className="divider"></div>
        <AboutMe />
      </div>
    );
  }
}

export default App;
