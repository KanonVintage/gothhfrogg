import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">GOTHHFROGG</Link>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/who-am-i">Who Am I</Link>
        <Link to="/what-i-do">What I Do</Link>
        <Link to="/gallery">Gallery</Link>
      </div>

      {/* Hamburger */}
      <div className="burger" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu">
        <span />
        <span />
        <span />
      </div>

      {/* Overlay and Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay, fills the screen behind the menu */}
          <div
            className="nav-overlay"
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(24,0,32,0.14)",
              zIndex: 1099, // less than menu
            }}
          />
          {/* Menu itself */}
          <div
            className="mobile-menu"
            onClick={e => e.stopPropagation()} // Don't close when clicking menu
            style={{ zIndex: 1100 }}
          >
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link to="/who-am-i" onClick={closeMenu}>Who Am I</Link>
            <Link to="/what-i-do" onClick={closeMenu}>What I Do</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          </div>
        </>
      )}
    </nav>
  );
}
