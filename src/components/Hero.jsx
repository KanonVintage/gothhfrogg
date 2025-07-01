export default function Hero() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>ECHOES OF VOLTAGE & FOG</h2>
      <p style={styles.subtitle}>brutal noise meets soft glitch</p>
    </section>
  );
}

const styles = {
  section: {
    height: '60vh',
    background: 'linear-gradient(black, #111)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#ff6ec7',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.8,
  }
};
