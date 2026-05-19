import React, { useEffect, useRef } from 'react';

const HOVER_SELECTOR = 'a, button, .what-card, .garage-card, .phil-item, .tag, .connect-link, .now-card';

const Cursor = () => {
  const crossRef = useRef(null);

  useEffect(() => {
    const cross = crossRef.current;
    if (!cross) return undefined;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      const dx = (e.clientX / window.innerWidth - 0.5) * 12;
      const dy = (e.clientY / window.innerHeight - 0.5) * 8;
      const heroName = document.querySelector('.hero-name');
      if (heroName) heroName.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const loop = () => {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      cross.style.left = `${cx}px`;
      cross.style.top = `${cy}px`;
      frame = requestAnimationFrame(loop);
    };

    const onEnter = () => document.body.classList.add('hovering');
    const onLeave = () => document.body.classList.remove('hovering');

    const hoverables = document.querySelectorAll(HOVER_SELECTOR);
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', onMouseMove);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div id="cursor">
      <div id="cursor-cross" ref={crossRef} />
    </div>
  );
};

export default Cursor;
