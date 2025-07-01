export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>GOTHHFROGG</h1>
        <p style={styles.subtitle}>Guitarrist and Photographer.</p>
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
    background: 'rgba(0, 0, 0, 0.5)', // darken image a bit
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
    fontSize: '4rem',
    color: '#ff6ec7',
    letterSpacing: '0.2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    opacity: 0.9,
  },
};