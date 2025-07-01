export default function Music() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.heading}>LISTEN</h2>
      <a
        href="https://open.spotify.com/user/78vwm321e0adz1uox0k5in4mz?si=59c1c2c0daca4ec7"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            alt="Spotify"
            style={styles.icon}
        />
        Listen on Spotify
    </a>
      <iframe
        title="YouTube"
        style={styles.embed}
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/QnTEoXoUydE?si=xGFuNnxr40oljDSI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#111',
    color: '#f8f8f8',
    fontFamily: 'monospace',
  },
  heading: {
    fontSize: '2rem',
    color: '#fa77bd',
    marginBottom: '1rem',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    backgroundColor: '#ff6ec7',
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    fontFamily: 'monospace',
    cursor: 'pointer',
    textDecoration: 'none',
    marginTop: '1rem',
    },
  icon: {
    height: '24px',
    width: '24px',
    },
  embed: {
    margin: '1rem 0',
    borderRadius: '4px',
  }
};
