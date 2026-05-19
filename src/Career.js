import React from 'react';

const ROLES = [
  {
    year: 'NOW',
    role: <>Technical Support<br />Engineering Leader</>,
    company: 'Open to new roles',
    desc: 'Bringing 10+ years of cloud-scale support leadership, deep technical fluency, and a track record of building high-performing teams and scalable operational systems.',
  },
  {
    year: '2018–2025',
    role: <>Technical Solutions Eng<br />→ Manager → Director</>,
    company: 'Datadog',
    desc: 'Progressed from Technical Solutions Engineer to Senior Manager to Director, overseeing global technical support across 750+ integrations. Built incident response processes, knowledge bases, and mentored multiple layers of managers and engineers.',
  },
  {
    year: '2016',
    role: 'Junior Software Developer',
    company: '8th Light',
    desc: 'Craftsman-style engineering apprenticeship. Built a Java server with SOLID principles and keen design sense. Completed Fullstack Academy prior to joining.',
  },
  {
    year: 'Early',
    role: 'Assistant Manager',
    company: 'Burton Snowboards',
    desc: 'Operations, inventory, staff training, warranty. Where people-management instincts and a love for gear culture first clicked.',
  },
];

const Career = () => (
  <section id="career">
    <div className="career-header">
      <div className="career-header-left reveal">
        <div className="career-header-num">02 / 05</div>
        <div className="career-big-title">CAREER<br />PATH</div>
      </div>
      <div className="career-header-right reveal rd1">
        <blockquote className="career-quote">
          &ldquo;Strong work ethic and tireless drive to learn as much as possible about whatever technology he is working with.&rdquo;
          <cite>— Colleague recommendation</cite>
        </blockquote>
        <p className="career-intro">
          A trajectory from retail ops and software craftsmanship to leading one of the most customer-critical teams in SaaS observability. Every role added a layer.
        </p>
      </div>
    </div>
    <div className="timeline">
      {ROLES.map((r) => (
        <div key={r.company + r.year} className="tl-row reveal">
          <div className="tl-year-cell">
            <span className="tl-year">{r.year}</span>
            <div className="tl-dot-line" />
          </div>
          <div className="tl-content">
            <div className="tl-role">{r.role}</div>
            <div className="tl-company">{r.company}</div>
            <p className="tl-desc">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Career;
