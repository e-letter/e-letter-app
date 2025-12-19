"use client";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <>
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="gradient-orb-purple w-96 h-96 top-20 -left-48" />
        <div className="gradient-orb-orange w-96 h-96 bottom-20 -right-48" />
        <div className="gradient-orb-blue w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <svg
        className="noise fixed inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
        </filter>
        <rect width="100%" height="100%" fill="currentColor" opacity="0.03" />
      </svg>
    </>
  );
}
