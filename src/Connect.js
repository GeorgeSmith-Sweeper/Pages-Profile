import React from 'react';

const LINKS = [
  ['LinkedIn', 'https://www.linkedin.com/in/george-smith-sweeper/'],
  ['GitHub', 'https://github.com/GeorgeSmith-Sweeper'],
  ['@bklynautophile', 'https://www.instagram.com/bklynautophile/'],
];

const Connect = () => (
  <section id="connect">
    <div className="connect-top reveal">
      <div className="connect-title">LET&rsquo;S<br /><span className="red">TALK</span></div>
      <div className="connect-right">
        <p className="connect-desc">
          Always interested in interesting problems, great cars, and conversations that go somewhere. Currently open to new opportunities.
        </p>
      </div>
    </div>
    <div className="connect-links reveal">
      {LINKS.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="connect-link">
          {label}
          {' '}
          <span className="connect-link-arrow">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Connect;
