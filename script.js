  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Crosshair cursor (desktop only, respects reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const ch = document.getElementById('crosshair-h');
  const cv = document.getElementById('crosshair-v');
  const label = document.getElementById('coord-label');

  if (prefersReduced || isTouch) {
    ch.style.display = 'none';
    cv.style.display = 'none';
    label.style.display = 'none';
  } else {
    window.addEventListener('mousemove', (e) => {
      ch.style.top = e.clientY + 'px';
      cv.style.left = e.clientX + 'px';
      label.style.left = (e.clientX + 14) + 'px';
      label.style.top = (e.clientY + 14) + 'px';
      label.textContent = 'X:' + String(e.clientX).padStart(4,'0') + ' Y:' + String(e.clientY).padStart(4,'0');
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
