// The recurring visual signature of this site: a vibration-signal waveform,
// tying directly to the flagship project (statistical features extracted
// from bearing vibration signals). Used as a hero backdrop and section
// divider rather than decoration for its own sake.
export default function Waveform({ className = "", stroke = "var(--color-signal)", animated = true }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 L60 60 L80 20 L100 100 L120 40 L140 80 L160 60 L220 60
           L240 15 L258 105 L276 30 L294 90 L312 55 L340 60 L400 60
           L420 25 L438 95 L456 45 L474 75 L492 60 L560 60
           L580 18 L598 102 L616 32 L634 88 L652 60 L720 60
           L740 22 L758 98 L776 60 L800 60"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        style={
          animated
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "draw-waveform 2.4s var(--ease-standard) forwards",
              }
            : undefined
        }
      />
      {animated && (
        <style>{`
          @keyframes draw-waveform {
            to { stroke-dashoffset: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            path { animation: none !important; stroke-dashoffset: 0 !important; }
          }
        `}</style>
      )}
    </svg>
  );
}
