import React from 'react';
import './WhoAmI.css';

export default function WhoAmI() {
  return (
    <div className="who-container">

      {/* HERO */}
      <section className="who-hero">
        <div className="hero-content">
          <h1>A Little<br />About Me</h1>
          <p className="hero-sub">Este es el unico lugar en el que pense seria buena idea de escribirte una carta!</p>
        </div>
        <div className="hero-bg" />
      </section>

      {/* VISION */}
      <section className="who-section">
        <div className="text-block">
          <h2>Vision</h2>
          <p>My vision </p>
        </div>
        <div className="image-block vision-img" />
      </section>

      {/* MISSION */}
      <section className="who-section reverse">
        <div className="text-block">
          <h2>Mission</h2>
          <p>To connect art, sound, and presence through brutal honesty and soft chaos.</p>
        </div>
        <div className="image-block mission-img" />
      </section>

      {/* VALUES */}
      <section className="who-section">
        <div className="text-block">
          <h2>Values</h2>
          <ul>
            <li>Chaos and Control</li>
            <li>Authenticity over polish</li>
            <li>Glitter, always</li>
            <li>Kindness as rebellion</li>
          </ul>
        </div>
        <div className="image-block values-img" />
      </section>

      {/* ORIGIN */}
      <section className="who-origin">
        <h2>Where I Come From</h2>
        <p>
          Ecuador — born in clouded peaks, raised in rhythm, built in cables and code. <br />
          My world is a bridge between mythology and math.
        </p>
      </section>

    </div>
  );
}

const styles = {
  
}