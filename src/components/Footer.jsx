// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} GOTHHFROGG — Crafted with chaos & glitter 
      </p>
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
  text: {
    margin: 0,
  },
};
