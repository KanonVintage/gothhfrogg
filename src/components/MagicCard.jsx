import { useState } from "react";

export default function MagicCard({ title, children, isFullscreen }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (isFullscreen) setOpen(true);
  }

  return (
    <>
      <div
        className="magic-card"
        tabIndex={isFullscreen ? 0 : -1}
        onClick={handleClick}
        style={{ pointerEvents: isFullscreen ? "auto" : "none" }}
      >
        <span className="magic-card-title">{title}</span>
        {!isFullscreen && <span className="magic-hint">Fullscreen only</span>}
      </div>
      {open && (
        <div
          className="magic-popup"
          onClick={() => setOpen(false)}
        >
          <div
            className="magic-popup-content slide-in"
            onClick={e => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
            {/* Letter Header */}
            <div className="popup-header">{title}</div>
            <hr className="popup-divider" />
            {/* Letter Content */}
            <div className="popup-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
