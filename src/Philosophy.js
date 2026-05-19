import React from 'react';

const ITEMS = [
  ['01', 'Empathetic at Scale', 'Blending technical rigor with people-first leadership — from one-on-ones to global team strategy.'],
  ['02', 'Feedback-Driven Growth', 'Building cultures where continuous improvement is the operating model, not a slogan.'],
  ['03', 'Builder by Nature', 'From CSS gradient generators to Java servers — always building something, always shipping.'],
  ['04', 'Lifelong Learner', 'Fullstack Academy, Code School certifications, and an unending curiosity about how things work and why they break.'],
];

const Philosophy = () => (
  <section id="philosophy">
    <div className="phil-grid">
      <div className="phil-left reveal">
        <div className="phil-giant">LEAD.<br />BUILD.<br /><span className="red">LEARN.</span></div>
        <p className="phil-body">
          10+ years blending technical rigor with empathetic leadership. Solving complex problems at scale while building teams that thrive on feedback, growth, and genuine curiosity.
        </p>
      </div>
      <div className="phil-right reveal rd1">
        {ITEMS.map(([num, title, body]) => (
          <div key={num} className="phil-item">
            <div className="phil-item-num">{num}</div>
            <div className="phil-item-content">
              <div className="phil-item-title">{title}</div>
              <div className="phil-item-body">{body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
