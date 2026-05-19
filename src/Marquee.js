import React from 'react';

const ITEMS = [
  'Technical Leadership',
  'Tri-State Car Culture',
  '750+ Integrations',
  'Lifelong Learner',
  'Cars & Code',
  'Craftsman Mindset',
  'Cloud Scale',
  'Empathetic Leadership',
];

const Marquee = () => {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {loop.map((label, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i} className="marquee-item">
            {label}
            <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
