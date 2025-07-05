import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const LETTERS = [
  ["N", "G", "A"],
  ["U", "O", "I"],
  ["D", "M", "L"],
  ["B", "E", "CLR"]
];

export default function PinPad({ onSubmit, onCancel, show = true, maxLen = 10, error = "", resetInput = 0 }) {
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    setInput("");
  }, [resetInput]);
  
  function handlePress(val) {
    if (val === "CLR") {
      setInput((curr) => curr.slice(0, -1));
      return;
    }
    if (val === "") return;
    if (input.length < maxLen) setInput(input + val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      onSubmit &&
        onSubmit(input, (success) => {
          if (!success) {
            setAttempts((prev) => {
              const next = prev + 1;
              if (next >= 3) {
                setTimeout(() => window.location.reload(), 600);
              }
              return next;
            });
          } else {
            setAttempts(0); // reset on success
          }
        });
    }
  }

  function handleCancel() {
    setInput("");
    if (onCancel) onCancel();
  }

  return show ? (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>ENTER PASSCODE</h2>
        <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
          {/* Asterisks bar */}
          <div style={styles.passwordBar}>
            {input.length > 0 ? "*".repeat(input.length) : <span style={styles.placeholder}>&nbsp;</span>}
          </div>

          {/* Pinpad */}
          <div style={styles.gridWrapper}>
            <div style={styles.grid}>
              {LETTERS.flat().map((letter, i) =>
                letter
                  ? letter === "CLR"
                    ? (
                      <button
                        type="button"
                        key="backspace"
                        style={{
                          ...styles.btn,
                          background: "#ff9dbc",
                          color: "#181818"
                        }}
                        onClick={() => handlePress("CLR")}
                        tabIndex={0}
                      >
                        <FaArrowLeft size={28} />
                      </button>

                    )
                    : (
                      <button
                        type="button"
                        key={i}
                        style={styles.btn}
                        onClick={() => handlePress(letter)}
                        tabIndex={0}
                      >
                        {letter}
                      </button>
                    )
                  : <span key={i} style={styles.spacer}></span>
              )}
            </div>
          </div>
          {error && <div style={styles.error}>{error}</div>}
          <div style={styles.actions}>
            <button
              type="button"
              style={styles.cancelBtn}
              onClick={handleCancel}
            >CANCEL</button>
            <button
              type="submit"
              style={styles.submitBtn}
              disabled={!input}
            >SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

// --- STYLES ---
const styles = {
  overlay: {
    position: "fixed",
    zIndex: 20000,
    top: 0, left: 0, width: "100vw", height: "100vh",
    background: "rgba(18,0,32, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  popup: {
    background: "#fff",
    color: "#181818",
    border: "5px solid #181818",
    borderRadius: "0",
    boxShadow: "8px 8px 0px #ff6ec7",
    minWidth: 360,
    minHeight: 480,
    padding: "2.5rem 2.5rem 2rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    position: "relative",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    fontSize: "1.4rem",
    fontWeight: 900,
    letterSpacing: "0.2em",
    margin: "0 0 1.2rem 0",
    textAlign: "center"
  },
  passwordBar: {
    width: "14ch",
    minHeight: "2.7rem",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "2.15rem",
    letterSpacing: "0.18em",
    borderBottom: "3.5px solid #ffb6e2",
    marginBottom: "1.2em",
    textAlign: "center",
    color: "#181818",
    background: "none",
    outline: "none",
    userSelect: "none"
  },
  placeholder: {
    opacity: 0.2,
    fontFamily: "monospace"
  },
  gridWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 58px)",
    gap: "0.8em",
    margin: "0.7em 0 0.2em 0",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    fontWeight: 700,
    fontSize: "1.4rem",
    background: "#fff",
    border: "3px solid #181818",
    borderRadius: "0",
    color: "#181818",
    width: 54,
    height: 54,
    boxShadow: "3px 3px 0 #ff6ec7",
    cursor: "pointer",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // <-- This is crucial!
    padding: 0, // <-- Remove extra padding
    transition: "background 0.1s, color 0.1s"
  },
  backBtn: {
    background: "#ff9dbc",
    color: "#181818",
    border: "3px solid #181818",
    borderRadius: "0",
    width: 54,
    height: 54,
    boxShadow: "3px 3px 0 #ff6ec7",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },
  clrBtn: {
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    fontWeight: 700,
    fontSize: "1.4rem",
    background: "#ff9dbc",
    border: "3px solid #181818",
    borderRadius: "0",
    color: "#181818",
    width: 58,
    height: 58,
    boxShadow: "3px 3px 0 #ffb6e2",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  spacer: {
    width: 58,
    height: 58
  },
  error: {
    color: "#ff6ec7",
    margin: "0.7em 0 0 0",
    fontFamily: "monospace",
    fontWeight: 700,
    fontSize: "1em",
    textAlign: "center"
  },
  actions: {
    marginTop: "1.7em",
    display: "flex",
    justifyContent: "center",
    gap: "1.7em"
  },
  submitBtn: {
    background: "#ff6ec7",
    color: "#181818",
    border: "3px solid #181818",
    borderRadius: "0",
    padding: "0.55em 2em",
    fontWeight: 900,
    fontSize: "1.15rem",
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    cursor: "pointer"
  },
  cancelBtn: {
    background: "#181818",
    color: "#fff",
    border: "3px solid #181818",
    borderRadius: "0",
    padding: "0.55em 2em",
    fontWeight: 900,
    fontSize: "1.15rem",
    fontFamily: '"Black Han Sans", monospace, sans-serif',
    cursor: "pointer",
  }
};
