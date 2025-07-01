export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>GOTHHFROGG</h1>
      <ul style={styles.links}>
        <li><a href="#music">MUSIC</a></li>
        <li><a href="#shows">SHOWS</a></li>
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '2px solid pink',
    background: 'black',
    color: 'pink',
    fontFamily: 'monospace',
  },
  logo: {
    fontSize: '1.5rem',
    letterSpacing: '2px',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem',
  }
};
