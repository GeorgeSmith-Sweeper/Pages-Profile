import React from 'react';
import Cursor from './Cursor';
import Navigation from './Navigation';
import Hero from './Hero';
import Marquee from './Marquee';
import What from './What';
import Career from './Career';
import Garage from './Garage';
import Now from './Now';
import Philosophy from './Philosophy';
import Connect from './Connect';
import Footer from './Footer';
import useScrollReveal from './useScrollReveal';

const App = () => {
  useScrollReveal();
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Marquee />
      <What />
      <Career />
      <Garage />
      <Now />
      <Philosophy />
      <Connect />
      <Footer />
    </>
  );
};

export default App;
