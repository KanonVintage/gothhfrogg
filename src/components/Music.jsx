export default function Music() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.heading}>LISTEN</h2>
      <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: 'auto' }}>
        <img
          src="https://scontent.cdninstagram.com/v/t51.71878-15/509755879_715193674565795_338214759770805056_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY2NTg0NDAwODkzNzUxMjc0MA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkciJ9&_nc_ohc=C8LjfveLc5MQ7kNvwFS6Qlh&_nc_oc=AdmymdofCeUx4EioR0t9UEildldw244Pr7wVaXTaS3oeCYHuJYMlRZ6DIanDcwbOlg4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=7HZVPh1_Llon5fbAZ33zpg&oh=00_AfMwq0A4ZHxaafU3WUPfZc1vAtx9vpC-XdV_tAEXe0-5hQ&oe=6869A61D" // ← Screenshot or custom preview
          alt="Instagram Reel Preview"
          style={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }}
          onClick={() => window.open('https://www.instagram.com/reel/DLfsbQitt8k', '_blank')}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
            color: '#fff',
          }}
        >
          ▶
        </div>
      </div>
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
