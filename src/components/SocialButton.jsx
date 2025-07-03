import { useEffect, useRef, useState } from 'react';
import {
  FaInstagram, FaYoutube, FaSpotify, FaEllipsisV,
  FaFacebook, FaLink, FaTwitter
} from 'react-icons/fa';

export default function SocialButton({ icon: Icon, platform, handle, url }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [copied, setCopied] = useState(false);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const shareOptions = [
  {
    label: 'Copy Link',
    icon: <FaLink />,
    action: () => {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
  },
  {
    label: 'Share to Facebook',
    icon: <FaFacebook />,
    action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank'),
  },
  {
    label: 'Share on Twitter',
    icon: <FaTwitter />,
    action: () => window.open(`https://twitter.com/share?url=${url}`, '_blank'),
  },
];


  return (
    <div style={styles.wrapper}>
      {/* Main button area */}
      <a href={url} target="_blank" rel="noopener noreferrer" style={styles.button}>
        <Icon style={styles.icon} />
        <div>
          <div style={styles.platform}>{platform}</div>
          <div style={styles.handle}>{handle}</div>
        </div>
      </a>

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

            {/* Popup card */}
            <div
              className="popup-fade"
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#222',
                color: 'white',
                borderRadius: '1rem',
                padding: '1.5rem 1rem 1rem',
                zIndex: 1000,
                width: '80%',
                maxWidth: '320px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                fontFamily: 'monospace',
                textAlign: 'center',
              }}
            >
              {/* Close 'X' Button */}
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.75rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <br></br>

              <div style={styles.profile}>
                <img
                  src="/gothhfrogg/images/noana.jpg"
                  alt="Profile"
                  style={styles.profileImage}
                />
                <div style={styles.profileText}>
                  <div style={styles.profileName}>GOTHHFROGG</div>
                  <div style={styles.profileHandle}>@{handle}</div>
                </div>
              </div>

              <br></br>
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
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    background: '#1a1a1a',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    margin: '1rem 0',
    color: 'white',
    fontFamily: 'monospace',
    position: 'relative',
    boxShadow: '0 0 10px #ff6ec7',
    justifyContent: 'space-between',
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
    fontSize: '1.5rem',
    color: '#ff6ec7',
  },
  platform: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  handle: {
    fontSize: '0.8rem',
    opacity: 0.8,
  },
  menuArea: {
    position: 'relative',
    marginLeft: '1rem',
  },
  optionsBtn: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    zIndex: 20,
    position: 'relative',
  },
  popup: {
    position: 'absolute',
    top: '2.5rem',
    right: 0,
    background: '#2a2a2a',
    borderRadius: '0.75rem',
    boxShadow: '0 0 20px #000000aa',
    zIndex: 19,
    overflow: 'hidden',
    width: '220px',
    padding: '0.75rem',
    animation: 'fadeIn 0.2s ease-out',
  },
  popupTitle: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    color: '#ff6ec7',
  },
  popupItem: {
    padding: '0.5rem 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.85rem',
    color: '#fff',
    transition: 'background 0.2s',
    borderBottom: '1px solid #444',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },

  profileImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ff6ec7',
  },

  profileText: {
    textAlign: 'left',
  },

  profileName: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },

  profileHandle: {
    fontSize: '0.875rem',
    opacity: 0.8,
    color: '#ccc',
  },

  shareRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1rem 0 0.5rem',
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
    color: '#000',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    fontSize: '18px',
    marginBottom: '0.25rem',
  },

  shareLabel: {
    fontSize: '0.75rem',
    color: '#ddd',
    fontFamily: 'monospace',
  },

  divider: {
    border: 'none',
    borderTop: '1px solid #444',
    margin: '1rem 0 0.5rem 0',
    opacity: 0.5,
  },

  copiedFeedback: {
    color: '#ff6ec7',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
    transition: 'opacity 0.3s ease',
  },

};
