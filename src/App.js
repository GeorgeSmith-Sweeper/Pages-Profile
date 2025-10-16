import React from 'react';
import Navigation from './Navigation';
import LandingHeader from './LandingHeader';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe';
import ContactInfo from './ContactInfo';

const App = () => {
  return (
    <div>
      <Navigation />
      <LandingHeader />
      <AboutMe />
      <ProjectsSection />
      <ContactInfo />
    </div>
  );
};

export default App;
