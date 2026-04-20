import { useMemo } from "react";

export function Particles({ count = 20 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 8,
        duration: 12 + Math.random() * 18,
        delay: -Math.random() * 20,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `-20px`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: "radial-gradient(circle, oklch(0.88 0.15 86 / 0.9), transparent 70%)",
            borderRadius: "50%",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
