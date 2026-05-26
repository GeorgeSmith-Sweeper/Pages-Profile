import React from 'react';
import warehouseImg from './assets/warehouse.jpg';
import f355Img from './assets/f355.png';

const PROJECTS = [
  {
    decoration: '1870',
    status: 'Long-Term Restoration',
    title: <>1870s<br />Warehouse</>,
    sub: 'Architectural Restoration',
    body: 'A 19th-century warehouse, brought back to life one beam, brick, and detail at a time. Equal parts research project, construction site, and labor of love — preserving the bones while making it livable for the next century.',
    image: warehouseImg,
    bgPos: 'center 35%',
    imageLabel: 'On Site',
    imageFrame: '01 — Facade',
    mirror: false,
    stats: [
      ['Built', 'c. 1870'],
      ['Scope', 'Full'],
      ['Status', 'Ongoing'],
    ],
  },
  {
    decoration: 'F355',
    status: 'Mechanical Restoration',
    title: <>Ferrari<br />F355</>,
    sub: 'Italian V8 · Mid-90s Icon',
    body: 'Restoring a Ferrari F355 — Pininfarina-bodied, naturally-aspirated V8, the last of the analog Ferraris. Methodical, patient work: nut by nut, system by system. The kind of project that rewards careful documentation and a stubborn refusal to cut corners.',
    image: f355Img,
    bgPos: 'center 55%',
    imageLabel: 'In the Bay',
    imageFrame: '02 — Tail Lights',
    mirror: true,
    stats: [
      ['Origin', 'Maranello'],
      ['Era', '1994–99'],
      ['Status', 'In Bay'],
    ],
  },
];

const Now = () => (
  <section id="now">
    <div className="now-header reveal">
      <div>
        <div className="now-eyebrow">Active · In Progress</div>
        <div className="now-title">CURRENTLY<br /><span className="red">BUILDING</span></div>
      </div>
      <div className="now-meta">
        Section<strong>04 / 05</strong>
      </div>
    </div>
    <div className="now-grid">
      {PROJECTS.map((p, i) => (
        <div
          key={p.decoration}
          className={`now-card reveal${p.mirror ? ' mirror' : ''}${i > 0 ? ` rd${i}` : ''}`}
        >
          <div
            className="now-card-image"
            style={{ '--bg-img': `url(${p.image})`, '--bg-pos': p.bgPos }}
          >
            <span className="now-card-image-label"><span className="dot" />{p.imageLabel}</span>
            <span className="now-card-image-frame">{p.imageFrame}</span>
          </div>
          <div className="now-card-content">
            <span className="now-card-decoration">{p.decoration}</span>
            <div className="now-card-status">
              <span className="dot" />
              <span>In Progress</span>
              <span className="sep">/</span>
              <span className="label">{p.status}</span>
            </div>
            <div className="now-card-title">{p.title}</div>
            <div className="now-card-sub">{p.sub}</div>
            <p className="now-card-body">{p.body}</p>
            <div className="now-card-stats">
              {p.stats.map(([label, value]) => (
                <div key={label} className="now-stat">
                  <div className="now-stat-label">{label}</div>
                  <div className="now-stat-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Now;
