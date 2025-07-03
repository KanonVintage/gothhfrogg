import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">GOTHHFROGG</Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <div className="nav-separator" />
        <Link to="/who-am-i" onClick={() => setMenuOpen(false)}>Who Am I</Link>
        <div className="nav-separator" />
        <Link to="/what-i-do" onClick={() => setMenuOpen(false)}>What I Do</Link>
        <div className="nav-separator" />
        <Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link>
        <div className="nav-separator" />
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <div className="nav-separator" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
