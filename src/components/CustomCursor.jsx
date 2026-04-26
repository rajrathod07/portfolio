import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // 1. Hardware-level tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Trailing physics (Stiffness 200/Damping 25 gives a nice "magnetic" feel)
  const springConfig = { stiffness: 200, damping: 25, mass: 0.5 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      // Logic to detect interactive elements including "more" types
      const target = e.target.closest('a, button, input, textarea, .group, [role="button"]');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="cursor-wrapper">
      
      {/* THE LIQUID STALKER RING */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-[#111] pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          // Difference mode works beautifully on both yellow and white backgrounds
          mixBlendMode: "difference"
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          // When hovering, it becomes a solid highlighter. 
          // Since it's 'difference' mode, white becomes black and vice versa.
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovering ? "white" : "white",
          borderWidth: isHovering ? "0px" : "2px"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </div>
  );
}
