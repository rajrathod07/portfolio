import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default');

  // 1. GPU-Level tracking (Zero-lag movement)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. High-performance Spring (Fast & Smooth)
  const springConfig = { stiffness: 800, damping: 50, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleInteraction = (e) => {
      const target = e.target;
      if (target.closest('.no-cursor')) {
        setCursorState('hidden');
      } else if (target.closest('a, button, .group, .counter')) {
        setCursorState('hovering');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleInteraction);
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleInteraction);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none bg-white hidden lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        // Layer 2: Between the box background and the text
        zIndex: 20, 
        borderRadius: '50%',
        mixBlendMode: 'exclusion', 
      }}
      animate={{
        // Small Plain White sizes
        width: cursorState === 'hovering' ? 80 : 14,
        height: cursorState === 'hovering' ? 80 : 14,
        opacity: cursorState === 'hidden' ? 0 : 1,
      }}
      transition={{
        width: { type: "spring", stiffness: 400, damping: 30 },
        height: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    />
  );
}
