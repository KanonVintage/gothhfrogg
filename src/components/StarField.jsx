
import React, { useMemo } from 'react';

// Number of stars and lines you want (tweak for more/less clutter)
const STAR_COUNT = 8;
const LINE_COUNT = 8;

function getRandomInt(a, b) {
  return a + Math.random() * (b - a);
}

// Generates random star positions and some lines between them
function generateStarsAndLines() {
  const stars = [];
  for (let i = 0; i < STAR_COUNT; ++i) {
    stars.push({
      x: getRandomInt(0, 100),
      y: getRandomInt(0, 100),
      r: getRandomInt(0.3, 1.5),
      twinkle: getRandomInt(2, 7), // Twinkle duration
    });
  }

  // Make some lines between random pairs
  const lines = [];
  for (let i = 0; i < LINE_COUNT; ++i) {
    const from = stars[Math.floor(Math.random() * STAR_COUNT)];
    const to = stars[Math.floor(Math.random() * STAR_COUNT)];
    lines.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y });
  }

  return { stars, lines };
}

export default function StarField() {
  // Keep same stars on rerender
  const { stars, lines } = useMemo(generateStarsAndLines, []);

  return (
    <svg
      className="starfield-bg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.45,
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Draw constellation lines */}
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke="#b0b4c4" strokeWidth="0.18" opacity="0.45"
        />
      ))}
      {/* Draw stars */}
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#fff"
          style={{
            opacity: 0.8,
            animation: `star-twinkle ${s.twinkle}s linear infinite, star-float ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 7}s`,
          }}
        />
      ))}
    </svg>
  );
}
