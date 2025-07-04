import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">GOTHHFROGG</Link>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/who-am-i">Who Am I</Link>
        <Link to="/what-i-do">What I Do</Link>
        <Link to="/music">Music</Link>
        <Link to="/gallery">Gallery</Link>
      </div>

      {/* Hamburger */}
      <div className="burger" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu">
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={closeMenu}>
          <Link to="/who-am-i">Who Am I</Link>
          <Link to="/what-i-do">What I Do</Link>
          <Link to="/music">Music</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
      )}
    </nav>
  );
}
