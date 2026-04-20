export function StarSeal({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="starGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="oklch(0.95 0.12 88)" />
          <stop offset="60%" stopColor="oklch(0.82 0.16 86)" />
          <stop offset="100%" stopColor="oklch(0.62 0.16 70)" />
        </radialGradient>
      </defs>
      <polygon
        points="50,5 61,38 96,38 67,59 78,92 50,72 22,92 33,59 4,38 39,38"
        fill="url(#starGrad)"
        stroke="oklch(0.45 0.15 60)"
        strokeWidth="1"
      />
    </svg>
  );
}
