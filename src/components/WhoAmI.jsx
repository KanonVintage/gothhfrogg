import React from 'react';
import './WhoAmI.css';

export default function WhoAmI() {
  return (
    <div className="who-container">

      {/* HERO */}
      <section className="who-hero">
        <div className="hero-content">
          <h1>A Little<br />About Me</h1>
          <p className="hero-sub">I love music, and cats!<br /></p>
          <p className="hero-sub">"The risk I took was calculated, but man, am I bad at math."</p>
          <img
            src="/gothhfrogg/images/ankher.png"
            alt="Ankh"
            className="ankh-img"
          />
        </div>
        <div className="hero-bg" />
      </section>

      {/* VISION */}
      <section className="who-section">
        <div className="text-block">
          <h2>Vision</h2>
          <p>I hope that people learn to love and accept my style.</p>
        </div>
        <div className="image-block vision-img" />
      </section>

      {/* MISSION */}
      <section className="who-section reverse">
        <div className="text-block">
          <h2>Mission</h2>
          <p>To make yourself proud!</p>
        </div>
        <div className="image-block mission-img" />
      </section>

      {/* VALUES */}
      <section className="who-section">
        <div className="text-block">
          <h2>Values</h2>
          <ul>
            <li>I believe in kindness</li>
            <li>I believe in love</li>
            <li>I believe in soulmates</li>
            <li>Glitter, always</li>
          </ul>
        </div>
        <div className="image-block values-img" />
      </section>

      {/* ORIGIN */}
      <section className="who-origin">
        <h2>Where I Come From</h2>
        <p>
          Reunion Island. c:
        </p>
      </section>

    </div>
  );
}

const styles = {
  
}