import React, { useEffect, useState } from 'react';

const formatTime = (date) => `${date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})} EST`;

const Hero = () => {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Technical Support Leader · Car Guy · Builder</p>
        <h1 className="hero-name">
          George<br />Smith-<br /><span className="accent">Sweeper</span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-tags">
            <span className="tag">Brooklyn, NYC</span>
            <span className="tag">@bklynautophile</span>
            <span className="tag">Open to opportunities</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-index">
          <div className="hero-index-item"><span>Location</span><span>Brooklyn, NY</span></div>
          <div className="hero-index-item"><span>Expertise</span><span>Technical Support Leadership</span></div>
          <div className="hero-index-item"><span>Background</span><span>SaaS · Cloud · Software Eng</span></div>
          <div className="hero-index-item"><span>Education</span><span>Ithaca College · Fullstack Academy</span></div>
          <div className="hero-index-item"><span>Passion</span><span>Cars & Craftsmanship</span></div>
          <div className="hero-index-item">
            <span>Time</span>
            <span className="live-clock">{time}</span>
          </div>
        </div>
        <div className="hero-right-bottom">
          <p className="hero-statement">
            <strong>Seasoned technical support engineering leader</strong>
            {' '}
            with 10+ years building teams, debugging complex systems, and creating cultures of continuous improvement — at cloud scale.
          </p>
          <a href="#connect" className="hero-cta">Get in touch →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
