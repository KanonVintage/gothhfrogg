export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>MUSIC! OF COURSE.</h1>
        <p style={styles.subtitle}>And also photography.</p>
        <p style={styles.subtitle}>follow me. now.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://www.instagram.com/noanaomirage/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram" style={iconStyle}></i>
          </a>
          <a href="https://www.youtube.com/@noalepont" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube" style={iconStyle}></i>
          </a>
          <a href="https://open.spotify.com/user/78vwm321e0adz1uox0k5in4mz?si=59c1c2c0daca4ec7" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-spotify" style={iconStyle}></i>
          </a>
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
    fontSize: 'clamp(2.2rem, 8vw, 5rem)',
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
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
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