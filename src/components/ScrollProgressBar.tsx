"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-ash-3/60"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-blood via-ember to-ember-bright"
        style={{ scaleX }}
      />
    </div>
  );
}
