import { Link } from 'react-router-dom';
import SocialButton from './SocialButton';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { useRef } from 'react';
import './Hero.css';
import { FaChevronDown } from 'react-icons/fa'; // Add to top!

export default function Hero() {
  const socialsRef = useRef(null);
  return (
    <>
      <section style={styles.hero}>
        <div style={styles.imageBanner} className="image-banner">
          <h1 style={styles.nameTitle}>NAOMIE.</h1>
          <p style={styles.subtitle}>GUITARRIST AND <br></br>PHOTOGRAPHER</p>
          <span
            style={styles.startExplore}
            onClick={() => socialsRef.current.scrollIntoView({ behavior: 'smooth' })}
            role="button"
            tabIndex={0}
          >
            START TO <br></br>EXPLORE{' '}
            <FaChevronDown style={{ fontSize: '1.2em', marginLeft: '0.4em', verticalAlign: 'middle' }} /> 
          </span>
          
          <Link to="/who-am-i" className="bubbleButton">
            <span style={styles.bubbleText}>MORE ABOUT ME</span>
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
        </div>
      </section>

      <div style={styles.socials} ref={socialsRef}>
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

      <div style={styles.divider}></div>
    </>
  );
}

const styles = {
  hero: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
    fontFamily: '"Black Han Sans", sans-serif',
  },

  imageBanner: {
    position: 'relative',
    width: '100%',
    minHeight: '50vh', // or height: 'calc(100vh - 70px)'
    backgroundImage: `url(${import.meta.env.BASE_URL}images/gothhfrogg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center', // <-- THIS
    display: 'flex',
    flexDirection: 'column', // if you want your overlay stacked
  },

  nameTitle: {
    fontFamily: '"Black Han Sans", sans-serif',
    fontSize: 'clamp(4.2rem, 14vw, 11rem)',
    color: '#fc94ab',
    WebkitTextStroke: '2px #000',
    textAlign: 'center',     // ← Change this!
    margin: 0,
    marginLeft: 0,           // ← Remove or set to 0!
    lineHeight: 1,
    letterSpacing: '0.1em',
    zIndex: 2,
    width: '100%',           // ← Use 100% for full container width
    background: 'rgba(255,255,255,0)',
    marginTop: 'clamp(4.5rem, 8vw, 8rem)',
    overflow: 'hidden',
    wordBreak: 'break-word',
  },

  subtitle: {
    fontFamily: '"Black Han Sans", sans-serif',
    fontSize: 'clamp(1.25rem, 2vw, 2rem)',
    textTransform: 'uppercase',
    color: '#fff',
    display: 'inline-block',
    alignSelf: 'flex-end',
    marginRight: '2vw',
    marginTop: '1vw',
    padding: '0.2em 0.9em',
    fontWeight: 700,
    WebkitTextStroke: '1px #000',
    borderRadius: '0.1em',
    zIndex: 3,
    letterSpacing: '0.05em',
  },

  startExplore: {
    position: 'absolute',
    left: '2vw',
    bottom: '2vw',
    fontFamily: '"Black Han Sans", sans-serif',
    fontSize: 'clamp(1.1rem, 2vw, 2.5rem)',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 700,
    padding: '0.15em 0.75em',
    borderRadius: '0.1em',
    WebkitTextStroke: '1px #000',
    zIndex: 4,
    letterSpacing: '0.02em',
    display: 'inline-block',
  },

  overlay: {
    backgroundColor: '#000',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },

  bubbleText: {
    fontFamily: 'monospace',
  },

  divider: {
    height: '2vw',
    background: 'transparent',
  },

  socials: {
    margin: '2vw auto',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5vw',
  },
};
