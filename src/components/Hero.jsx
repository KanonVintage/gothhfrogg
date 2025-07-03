import { Link } from 'react-router-dom';
import SocialButton from './SocialButton';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div className="vhs-effect" style={styles.overlay}>
        <h1 style={styles.title}>GOTHHFROGG</h1>
        <p style={styles.subtitle}>Guitarrist and Photographer.</p>
        <Link to="/who-am-i" style={styles.bubbleButton}>
          <span style={styles.bubbleText}>More about me</span>
          <svg
            width="min(max(2.564vw, 0.625rem), 1rem)"
            height="min(max(2.564vw, 0.625rem), 1rem)"
            style={styles.arrow}
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.9043 11.0039L10.0272 2.12684" stroke="currentColor" strokeWidth="2.4569" strokeLinecap="round" />
            <path d="M18.9043 10.9961L10.0274 19.873" stroke="currentColor" strokeWidth="2.4569" strokeLinecap="round" />
            <path d="M18.9004 11.0098L1.99917 10.9994" stroke="currentColor" strokeWidth="2.4569" strokeLinecap="round" />
          </svg>
        </Link>

        <div style={{ marginTop: '2rem' }}>
          <SocialButton
            icon={FaInstagram}
            platform="Instagram"
            handle="noanaomirage"
            url="https://www.instagram.com/noanaomirage/"
          />
          <SocialButton
            icon={FaYoutube}
            platform="YouTube"
            handle="noalepont"
            url="https://www.youtube.com/@noalepont"
          />
          <SocialButton
            icon={FaSpotify}
            platform="Spotify"
            handle="noanaomirage"
            url="https://open.spotify.com/user/78vwm321e0adz1uox0k5in4mz?si=59c1c2c0daca4ec7"
          />
        </div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${import.meta.env.BASE_URL}images/gothhfrogg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  bubbleButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: '#c7ff6e', // Chartreuse
    color: 'black',
    borderRadius: '50px',
    padding: '0.75rem 1.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none',
    marginTop: '2rem',
    boxShadow: '0 0 10px #c7ff6e70',
    transition: 'all 0.3s ease-in-out',
  },
  bubbleText: {
    color: '#000',
    fontFamily: 'monospace',
  },
  arrow: {
    stroke: '#000', // contrast arrow
    transition: 'transform 0.2s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // soft dark overlay
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'monospace',
    textAlign: 'center',
    padding: '1rem',
  },
  title: {
    fontSize: 'clamp(2.2rem, 10vw, 5rem)',
    color: '#ff6ec7',
    letterSpacing: '0.2rem',
    marginBottom: '1rem',
    wordBreak: 'break-word',
    maxWidth: '90vw',
    textShadow: `
      0 0 5px #ff6ec7,
      0 0 10px #ff6ec7,
      0 0 20px #ff6ec7,
      0 0 40px #ff1493,
      0 0 80px #ff1493
    `,
    animation: 'flicker 2.5s infinite alternate',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
    maxWidth: '90vw',
    opacity: 0.9,
    color: '#ffffffcc',
    textShadow: '0 0 2px #ff9bd1, 0 0 4px #ff9bd1',
  },
};

const iconStyle = {
  fontSize: '2rem',
  color: '#ff6ec7',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
};