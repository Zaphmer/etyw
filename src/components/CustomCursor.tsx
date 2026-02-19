import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use raw MotionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Define the move function
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for high-performance updates
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, .cursor-pointer"));
    };

    // 2. Attach to window
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", () => setIsClicking(true));
    window.addEventListener("mouseup", () => setIsClicking(false));
    window.addEventListener("mouseover", handleHover);

    // 3. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", () => setIsClicking(true));
      window.removeEventListener("mouseup", () => setIsClicking(false));
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[99999]" 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center pointer-events-none">
          {/* Main Dot */}
          <motion.div
            className="bg-white rounded-full mix-blend-difference absolute"
            animate={{
              width: isHovering ? 12 : 8,
              height: isHovering ? 12 : 8,
              scale: isClicking ? 0.8 : 1,
            }}
          />

          {/* Outer Ring */}
          <motion.div
            className="border border-white/50 rounded-full absolute"
            animate={{
              width: isHovering ? 48 : 32,
              height: isHovering ? 48 : 32,
              opacity: isHovering ? 1 : 0.5,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;