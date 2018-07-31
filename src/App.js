import React from 'react';
import LandingHeader from './LandingHeader';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe';
import ContactInfo from './ContactInfo';

const App = () => {
  return (
    <div>
      <LandingHeader />
      <AboutMe />
      <ProjectsSection />
      <ContactInfo />
    </div>
  );
};

export default App;
