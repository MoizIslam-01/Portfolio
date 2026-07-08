"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || reduceMotion) return;

    // One-time sync of React state with a browser capability check that
    // isn't available during SSR, so it can't be computed during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("no-cursor");

    function handleMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.classList.remove("no-cursor");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        animate={{ scale: hovering ? 1.6 : 1, rotate: hovering ? 45 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <line
          x1="13"
          y1="1"
          x2="13"
          y2="25"
          stroke="#c9a24b"
          strokeWidth="1.5"
        />
        <line
          x1="1"
          y1="13"
          x2="25"
          y2="13"
          stroke="#c9a24b"
          strokeWidth="1.5"
        />
        <circle
          cx="13"
          cy="13"
          r="4"
          stroke="#c9a24b"
          strokeWidth="1.2"
          fill="none"
        />
      </motion.svg>
    </motion.div>
  );
}
