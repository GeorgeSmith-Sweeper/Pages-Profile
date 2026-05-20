import React, { useEffect, useState } from 'react';

const LINKS = [
  ['01', 'Work', '#what'],
  ['02', 'Career', '#career'],
  ['03', 'Garage', '#garage'],
  ['04', 'Now', '#now'],
  ['05', 'Connect', '#connect'],
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <a className="nav-logo" href="#hero">G—SS</a>
        <ul className="nav-links">
          {LINKS.map(([, label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
          <li className="nav-cta-li">
            <a href="#connect" className="nav-cta">Open to work →</a>
          </li>
        </ul>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className="mobile-nav" aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-eyebrow">Menu — GSS</div>
          {LINKS.map(([num, label, href]) => (
            <a key={href} href={href} className="mobile-nav-link" onClick={close}>
              <span className="mn-num">{num}</span>
              <span className="mn-label">{label}</span>
            </a>
          ))}
          <a href="#connect" className="mobile-nav-cta" onClick={close}>
            Open to work →
          </a>
          <div className="mobile-nav-foot">
            <span>Brooklyn, NY</span>
            <span>@bklynautophile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
