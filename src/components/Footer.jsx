export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
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
    </footer>
  );
}

const styles = {
  footer: {
    padding: '2rem 1rem',
    textAlign: 'center',
    backgroundColor: '#111',
    color: '#ff6ec7',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    borderTop: '1px solid #333',
    boxShadow: 'inset 0 1px 0 #333',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  text: {
    margin: 0,
  },
};

const iconStyle = {
  fontSize: '2rem',
  color: '#ff6ec7',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
};
