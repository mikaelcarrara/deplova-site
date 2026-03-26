(() => {
  const s = document.createElement('style');
  s.id = 'spotlight-style';
  s.textContent = `
  :root { --mx: 50vw; --my: 50vh; }
  .spotlight-layer{
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 3;
    mix-blend-mode: screen;
    background: radial-gradient(circle 220px at var(--mx) var(--my),
      rgba(255,255,255,.42) 0%,
      rgba(255,255,255,.20) 40%,
      rgba(255,255,255,0) 72%);
  }
  @media (prefers-reduced-motion: reduce) {
    .spotlight-layer { display: none; }
  }`;
  document.head.appendChild(s);

  const layer = document.createElement('div');
  layer.className = 'spotlight-layer';
  document.body.appendChild(layer);

  const root = document.documentElement;
  const setPos = (x, y) => {
    root.style.setProperty('--mx', x + 'px');
    root.style.setProperty('--my', y + 'px');
  };

  setPos(window.innerWidth / 2, window.innerHeight / 2);

  const onMove = (e) => {
    let x, y;
    if (e.touches && e.touches[0]) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    setPos(x, y);
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
})();
