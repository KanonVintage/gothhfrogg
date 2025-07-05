import './Portfolio.css'; // Import the CSS file for styles
import StarField from './StarField'; // Import the StarField component

export default function Music() {
  return (
    <section style={styles.section} className="portfolio-wrapper">
      {/* Cosmic Nebula + Constellations BG */}
      <StarField />
      <div style={styles.innerWrapper} className="portfolio-content">
        <h2 style={styles.heading}>LISTEN</h2>
        <div style={styles.cardsRow}>
          {/* First Card */}
          <div
            style={styles.card}
            className="music-brutal-card"
            tabIndex={0}
            role="button"
            aria-label="Open Instagram Reel"
            onClick={() => window.open('https://www.instagram.com/reel/DLfsbQitt8k', '_blank')}
            onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && window.open('https://www.instagram.com/reel/DLfsbQitt8k', '_blank')}
          >
            <div style={styles.cardImageWrapper}>
              <img
                src="https://scontent.cdninstagram.com/v/t51.71878-15/509755879_715193674565795_338214759770805056_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY2NTg0NDAwODkzNzUxMjc0MA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkciJ9&_nc_ohc=73KQITVD8fIQ7kNvwGXjZHi&_nc_oc=AdlAmOWCf96SkR3Q5g4uFUeOtmsGyVihpGutzUwmR31RaTLxwnkmiM1A-aUgKmNXBRc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=BJPYNPPX2IQJWznq9DR-Uw&oh=00_AfPSOI7wD-HiwHX9nIjhirFEA6lmXDIvC2mZ9WZJSc90YA&oe=686D9A9D"
                alt="Instagram Reel Preview"
                style={styles.cardImg}
              />
              <div style={styles.playOverlay}>▶</div>
            </div>
            <div style={styles.caption}>
              <span style={styles.songTitle}>NOANAOMIRAGE</span>
              <span style={styles.songDesc}>Go check me on Instagram!</span>
            </div>
          </div>
          {/* Second Card */}
          <div
            style={styles.card}
            className="music-brutal-card"
            tabIndex={0}
            role="button"
            aria-label="Open Spotify Playlist"
            onClick={() => window.open('https://www.tiktok.com/@ssupnoa3k/video/7510599616329452822', '_blank')}
            onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && window.open('https://www.tiktok.com/@ssupnoa3k/video/7510599616329452822', '_blank')}
          >
            <div style={styles.cardImageWrapper}>
              <img
                src="https://p16-pu-sign-no.tiktokcdn-eu.com/tos-no1a-p-0037-no/osJoeAfzkOIBrARsEVgHIdFE6cVrYo7pD8FwBS~tplv-photomode-zoomcover:720:720.avif?dr=14555&x-expires=1751835600&x-signature=vvS3cro%2BYDRob5Jm3tzJL0Q9fT0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=maliva&ftpl=1"
                alt="Spotify Playlist Preview"
                style={styles.cardImg}
              />
              <div style={styles.playOverlay}>▶</div>
            </div>
            <div style={styles.caption}>
              <span style={styles.songTitle}>@ssupnoa3k</span>
              <span style={styles.songDesc}>Follow me on TikTok!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '65vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    background: 'white',
    padding: '5vw 0 6vw 0',
  },
  innerWrapper: {
    width: '100%',
    maxWidth: 920,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.6rem',
    color: '#ff6ec7',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    margin: '5vw 0 3vw 0',
    fontWeight: 900,
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    textAlign: 'center',
    WebkitTextStroke: '2px #fff',
    textShadow: '0 2px 0 #000, 2px 4px 12px #ffb6e2',
    userSelect: 'none',
  },
  cardsRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2.3rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    flexWrap: 'wrap',
  },
  card: {
    width: '100%',
    maxWidth: 410,
    background: '#ffb6e2',
    border: '3px solid #000',
    borderRadius: '0.3em',
    boxShadow: '8px 8px 0px #fff, 0 8px 36px #000c',
    padding: '1.3rem 1.1rem 1.1rem',
    margin: 'auto',
    cursor: 'pointer',
    transition: 'background 0.23s, color 0.23s, border-color 0.19s, box-shadow 0.22s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    outline: 'none',
    minWidth: 0,
    minHeight: 0,
  },
  cardImageWrapper: {
    width: '100%',
    aspectRatio: '1 / 1',
    position: 'relative',
    borderRadius: '0.25em',
    overflow: 'hidden',
    boxShadow: '0 4px 16px #2226',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'contrast(1.08) saturate(1.06) grayscale(0.07)',
    display: 'block',
  },
  playOverlay: {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '4.2rem',
    color: '#fff',
    textShadow: '0 3px 16px #ffb6e2, 0 0 2px #000',
    pointerEvents: 'none',
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    fontWeight: 900,
    opacity: 0.95,
    userSelect: 'none',
    lineHeight: 1,
  },
  caption: {
    width: '100%',
    textAlign: 'center',
    paddingTop: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'monospace',
  },
  songTitle: {
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    color: '#181818',
    fontWeight: 900,
    fontSize: '1.18rem',
    letterSpacing: '0.13em',
    marginBottom: 0,
    textShadow: '0 2px 0 #fff, 0 8px 26px #fa77bd',
    textTransform: 'uppercase',
    userSelect: 'none',
  },
  songDesc: {
    color: '#222',
    fontWeight: 600,
    fontSize: '1rem',
    letterSpacing: '0.07em',
    opacity: 0.85,
    fontFamily: 'monospace',
  },
};

// Responsive media query for cards row
// Add to your index.css:
/*
@media (max-width: 900px) {
  .music-inner-wrapper, .music-cards-row {
    flex-direction: column !important;
    gap: 1.2rem !important;
    align-items: center !important;
  }
}
*/

