import { useEffect, useRef, useState } from 'react';
import {
  FaInstagram, FaYoutube, FaSpotify, FaEllipsisV,
  FaFacebook, FaLink, FaTwitter
} from 'react-icons/fa';

export default function SocialButton({ icon: Icon, platform, handle, url }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false); // <-- ADD THIS

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

   // Inline merge style based on hovered
  const wrapperStyle = {
    ...styles.wrapper,
    ...(hovered && styles.wrapperHover)
  };

  return (
    <div style={wrapperStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Main button area */}
      <div style={styles.leftContent}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={styles.button}>
          <Icon style={styles.icon} />
          <div>
            <div style={styles.platform}>{platform}</div>
            <div style={styles.handle}>{handle}</div>
          </div>
        </a>
      </div>

      {/* Menu toggle and popup */}
      <div ref={menuRef} style={styles.menuArea}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.optionsBtn}>
          <FaEllipsisV />
        </button>
        {menuOpen && (
          <>
            {/* Click-outside overlay */}
            <div
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 999,
              }}
            />

            {/* Popup shadow and card */}
            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
              width: '340px',
              maxWidth: '96vw',
            }}>
              {/* Popup card */}
              <div style={styles.popupCard}>
                {/* Close 'X' Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  style={styles.closeBtn}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div style={styles.profileRow}>
                  <img
                    src="/gothhfrogg/images/noana.jpg"
                    alt="Profile"
                    style={styles.profileImage}
                  />
                  <div>
                    <div style={styles.popupTitle}>GOTHHFROGG</div>
                    <div style={styles.popupHandle}>@{handle}</div>
                  </div>
                </div>
                {copied && (
                  <div style={styles.copiedFeedback}>Link copied!</div>
                )}
                <hr style={styles.divider} />
                <div style={styles.shareRow}>
                  <div style={styles.shareItem} onClick={() => {
                    navigator.clipboard.writeText(url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}>
                    <div style={styles.shareIconBubble}><FaLink /></div>
                    <div style={styles.shareLabel}>Copy link</div>
                  </div>
                  <div style={styles.shareItem} onClick={() => window.open(`https://twitter.com/share?url=${url}`, '_blank')}>
                    <div style={styles.shareIconBubble}><FaTwitter /></div>
                    <div style={styles.shareLabel}>X</div>
                  </div>
                  <div style={styles.shareItem} onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')}>
                    <div style={styles.shareIconBubble}><FaFacebook /></div>
                    <div style={styles.shareLabel}>Facebook</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ff9dbc',
    borderRadius: '0',
    padding: '1.5rem',
    margin: '0.4rem',
    color: '#000',
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    position: 'relative',
    border: '2px solid #000',
    boxShadow: '8px 8px 0px #fff',
    width: '100%',
    height: '30%',
    boxSizing: 'border-box',
    backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 4px)`,
    flexWrap: 'nowrap',
    marginLeft: '-.1rem',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    gap: '1rem',
    flexGrow: 1,
  },
  icon: {
    fontSize: '2rem',
    color: 'inherit',
    filter: 'drop-shadow(0 0 3px #ffb6e2)',
  },
  platform: {
    fontWeight: 900,
    fontSize: '1.1rem',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',

    lineHeight: '1.1',
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    textShadow: '0 1px 0 #181818, 0 2px 3px #ffb6e2',
    WebkitTextStroke: '1px #000',
  },
  handle: {
    fontSize: '0.7rem',
    color: 'inherit',
    opacity: 1,
    fontFamily: 'monospace',
    fontWeight: 400,
    marginLeft: '0.2rem',
    marginTop: '-0.2rem',
  },
  menuArea: {
    position: 'relative',
    marginLeft: '1rem',
  },
  optionsBtn: {
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontSize: '1.1rem',
    zIndex: 20,
    padding: 0,
    margin: 0,
    alignSelf: 'flex-start',
  },

  // --- POPUP STYLES BELOW THIS LINE ---

  popupCard: {
    position: 'relative',
    background: '#232025',
    border: '2.5px solid #181818',
    borderRadius: 0,
    boxShadow: '8px 8px 0px #fff, 0 0 0px #000',
    width: '340px',
    maxWidth: '96vw',
    padding: '2.5rem 1.2rem 1.2rem 1.2rem',
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    color: '#fff',
    zIndex: 1,
    textAlign: 'left',
    boxSizing: 'border-box',
    minHeight: '225px',
  },

  closeBtn: {
    position: 'absolute',
    top: '1.2rem',
    right: '1.4rem',
    background: 'transparent',
    border: 'none',
    color: '#FC94AB',
    fontSize: '1.5rem',
    fontWeight: 900,
    cursor: 'pointer',
    zIndex: 10,
    lineHeight: 1,
    padding: 0,
  },

  profileRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.1rem',
    marginBottom: '1.3rem',
    marginTop: '0.3rem',
  },

  profileImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2.5px solid #FC94AB',
  },

  popupTitle: {
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    color: '#FC94AB',
    fontWeight: 900,
    fontSize: '1.2rem',
    marginBottom: '0.1em',
    lineHeight: 1,
    letterSpacing: '0.01em',
  },

  popupHandle: {
    color: '#fff',
    opacity: 1,
    fontSize: '1rem',
    fontFamily: 'monospace',
    marginTop: '0.1em',
    marginLeft: 0,
  },

  shareRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1.2rem',
    marginBottom: '0.3rem',
    width: '100%',
  },

  shareItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    minWidth: '60px',
  },

  shareIconBubble: {
    backgroundColor: '#fff',
    color: '#181818',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    fontSize: '1.3rem',
    marginBottom: '0.2rem',
    border: '2px solid #FC94AB',
  },

  shareLabel: {
    fontSize: '0.9rem',
    color: '#fff',
    fontFamily: 'monospace',
    marginTop: '0.1em',
  },

  divider: {
    border: 'none',
    borderTop: '1.5px solid #fff',
    margin: '1rem 0 1rem 0',
    opacity: 0.6,
  },

  copiedFeedback: {
    color: '#ff6ec7',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
    transition: 'opacity 0.3s ease',
  },

  wrapperHover: {
    background: '#181818',
    color: '#ff9dbc',
    boxShadow: '8px 8px 0px #ff9dbc', // invert shadow to pink
    border: '2px solid #ff9dbc',
    transition: 'all 0.18s cubic-bezier(.67,-0.55,.37,1.49)',
  },

};
