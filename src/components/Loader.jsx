import { useEffect, useState } from "react";
import KittyBowSVG from './KittyBowSVG';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800); // 1.8 seconds
    const hide = setTimeout(() => setVisible(false), 1800); // hide after fade
    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
        <div style={styles.bow}>
          <div style={{
            animation: 'glitch-shake 0.6s infinite',
          }}>
              <KittyBowSVG size={100} />
            </div>
        </div>
    </div>    
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    overflow: 'hidden',
  },
  bow: {
    fontSize: '5rem',
    animation: 'spin 1.5s linear infinite',
    color: '#ff6ec7',
  },
};