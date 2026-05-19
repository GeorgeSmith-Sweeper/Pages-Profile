import React from 'react';

const What = () => (
  <section id="what">
    <div className="what-header">
      <span className="what-header-title">WHAT I DO</span>
      <span className="what-header-num">01 / 05</span>
    </div>
    <div className="what-grid">
      <div className="what-card reveal">
        <div className="what-card-num">01 / LEADERSHIP</div>
        <div className="what-card-title">Lead Teams at Scale</div>
        <p className="what-card-body">
          Mentoring layers of managers and engineers across global support for 750+ integrations at cloud scale. Building high-performing, feedback-driven teams that solve hard problems fast.
        </p>
      </div>
      <div className="what-card reveal rd1">
        <div className="what-card-num">02 / DEBUGGING</div>
        <div className="what-card-title">Debug Anything</div>
        <p className="what-card-body">
          A craftsman-level debugging mindset honed across SaaS infrastructure, software engineering, and customer-facing technical work. Complex problems are just puzzles with consequences.
        </p>
      </div>
      <div className="what-card reveal rd2">
        <div className="what-card-num">03 / BUILDING</div>
        <div className="what-card-title">Build & Ship</div>
        <p className="what-card-body">
          From Java servers at 8th Light to knowledge bases and incident response processes — I build things that last and scale. Currently tinkering at{' '}
          <a href="https://github.com/GeorgeSmith-Sweeper" target="_blank" rel="noreferrer">@GeorgeSmith-Sweeper</a>.
        </p>
      </div>
    </div>
  </section>
);

export default What;
