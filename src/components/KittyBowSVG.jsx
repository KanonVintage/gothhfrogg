export default function KittyBowSVG({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#ff6ec7" stroke="black" strokeWidth="8" strokeLinejoin="round">
        <ellipse cx="50" cy="80" rx="40" ry="60" />
        <ellipse cx="150" cy="80" rx="40" ry="60" />
        <circle cx="100" cy="80" r="30" />
      </g>
    </svg>
  );
}
