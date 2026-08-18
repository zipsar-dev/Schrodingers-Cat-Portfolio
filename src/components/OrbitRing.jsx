/**
 * OrbitRing — the partial orbit ring with celestial dots from the brand logo,
 * used as a subtle decorative element behind hero/section content.
 */
export default function OrbitRing({ className = "", size = 220, ...rest }) {
  return (
    <svg
      viewBox="0 0 220 220"
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      fill="none"
      {...rest}
    >
      {/* partial orbit */}
      <circle
        cx="110"
        cy="110"
        r="96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="432 172"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* celestial dots along the arc */}
      <circle cx="110" cy="14" r="5.5" fill="currentColor" />
      <circle cx="205" cy="86" r="4" fill="currentColor" />
      <circle cx="30" cy="150" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="96" cy="212" r="3" fill="currentColor" opacity="0.45" />
    </svg>
  );
}
