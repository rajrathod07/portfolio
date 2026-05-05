import React from 'react';

export default function NoiseOverlay() {
  return (
    // z-[9999] ensures it sits on top of EVERYTHING, pointer-events-none lets you click through it
    <div className="pointer-events-none fixed inset-0 z-[9999] h-[100dvh] w-screen opacity-[0.035] mix-blend-overlay">
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-0 h-full w-full"
      >
        <filter id="noiseFilter">
          {/* baseFrequency controls the size of the static (higher = finer) */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.85" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}