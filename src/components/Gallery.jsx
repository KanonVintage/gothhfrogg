import { useRef, useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import './Gallery.css';
import MagicCard from "./MagicCard"; // <-- add this import

function Gallery({ setHideNavAndFooter, backgroundRef }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  function enterFullscreen() {
    if (backgroundRef?.current?.requestFullscreen) {
      backgroundRef.current.requestFullscreen();
    }
  }

  useEffect(() => {
    function handleFullscreenChange() {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      setHideNavAndFooter(fs);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      setHideNavAndFooter(false);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [setHideNavAndFooter]);

  // Main message disappears in fullscreen, but button always stays
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "inherit",
        transition: "background 0.3s",
        position: "relative",
      }}
    >
      {/* Centered Message */}
      {!isFullscreen && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontFamily: "Black Han Sans, monospace, sans-serif",
            color: "#181818",
            fontWeight: 900,
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
          }}>
            Page under maintenance
          </h1>
        </div>
      )}

      {/* Fullscreen Button, always visible bottom-right */}
      <button
        className="fullscreen-toggle"
        onClick={() => {
          if (isFullscreen) {
            document.exitFullscreen();
          } else if (backgroundRef?.current?.requestFullscreen) {
            backgroundRef.current.requestFullscreen();
          }
        }}
        aria-label={isFullscreen ? "Exit fullscreen" : "Go fullscreen"}
        tabIndex={0}
        style={{
          position: "fixed",
          bottom: "2vw",
          right: "2vw",
          background: "#181818",
          color: "#ffb6e2",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.15,
          zIndex: 9999,
          cursor: "pointer",
          boxShadow: "0 4px 18px #ffb6e2a0",
          transition: "background 0.25s, color 0.25s, opacity 0.25s"
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={e => (e.currentTarget.style.opacity = 0.65)}
      >
        <FaExpand />
      </button>

      {/* --- MAGIC CARDS GRID --- */}
      {isFullscreen && (
        <div className="magic-card-grid">
            <MagicCard key={1} title={`Letter #1`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Card 1 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
            <MagicCard key={2} title={`Letter #2`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Letter #2 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
            <MagicCard key={3} title={`Letter #3`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Letter #3 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
            <MagicCard key={4} title={`Letter #4`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Letter #4 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
            <MagicCard key={5} title={`Letter #5`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Letter #5 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
            <MagicCard key={6} title={`Letter #6`} isFullscreen={isFullscreen}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod...</p>
              <p>Letter #6 hidden magic! ✨</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>
                This popup is scrollable if the content is long enough.
              </p>
            </MagicCard>
        </div>
      )}
      
    </section>
  );
}

export default Gallery;
