import React from 'react';

const Garage = () => (
  <section id="garage">
    <div className="garage-banner reveal">
      <div className="garage-big">THE<br />GARAGE</div>
      <div className="garage-banner-right">
        <span className="garage-handle">@bklynautophile</span>
        <span className="garage-sub">03 / 05</span>
      </div>
    </div>
    <div className="speedo-ornament">
      <svg className="speedo-svg spin-cw" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="43" stroke="#0a0a0a" strokeWidth="1" />
        <circle cx="45" cy="45" r="33" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="45" cy="45" r="5" fill="#0a0a0a" />
        <line x1="45" y1="2" x2="45" y2="12" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="45" y1="78" x2="45" y2="88" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="2" y1="45" x2="12" y2="45" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="78" y1="45" x2="88" y2="45" stroke="#0a0a0a" strokeWidth="1.5" />
      </svg>
      <svg className="speedo-svg spin-ccw" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="43" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="45" cy="45" r="22" stroke="#0a0a0a" strokeWidth="1" />
      </svg>
      <span className="speedo-text">AUTOPHILE · TRI-STATE · GEARHEAD ·&nbsp;</span>
    </div>
    <div className="garage-cards">
      <div className="garage-card reveal">
        <div className="garage-card-num">01 / PASSION</div>
        <div className="garage-card-title">Tri-State Autophile</div>
        <p className="garage-card-body">
          Cars are kinetic sculpture, engineering expression, community. Based in Brooklyn — documenting the car culture of the tri-state area, from NYC meets to Jersey backroads to Connecticut cars-and-coffee, under the handle @bklynautophile.
        </p>
      </div>
      <div className="garage-card reveal rd1">
        <div className="garage-card-num">02 / MINDSET</div>
        <div className="garage-card-title">I Like Taking Things Apart</div>
        <p className="garage-card-body">
          &ldquo;I like taking stuff apart. The tough part is remembering to put them back together.&rdquo; — The same curiosity that drives wrenching drives deep technical problem-solving.
        </p>
      </div>
      <div className="garage-card reveal rd2">
        <div className="garage-card-num">03 / CULTURE</div>
        <div className="garage-card-title">Gear. Community. Craft.</div>
        <p className="garage-card-body">
          From Burton Snowboards to the tri-state car scene — a life-long appreciation for objects built with intention, communities built around passion, and craftsmanship at every level.
        </p>
      </div>
    </div>
  </section>
);

export default Garage;
