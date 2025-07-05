// passkey.js

// SHA-256 for "UADN" (uppercase, no spaces)
export const PASSCODE_HASH = "3b86cc383816cf57f9888170c7b45a063592d860116636423c30955b7154f798";

// Utility function to hash input with SHA-256
export async function hashCode(input) {
  // Always uppercase, and remove spaces just in case
  const safe = (input || "").toUpperCase().replace(/\s+/g, "");
  const encoder = new TextEncoder();
  const data = encoder.encode(safe);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}
