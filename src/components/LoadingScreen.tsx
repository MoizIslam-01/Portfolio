"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const timer = setTimeout(() => setVisible(false), reduceMotion ? 200 : 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <motion.div
            className="mb-6 h-10 w-10 rounded-full border border-ember"
            initial={{ scale: 0.2, opacity: 0, boxShadow: "0 0 0px rgba(201,162,75,0)" }}
            animate={{
              scale: 1,
              opacity: 1,
              boxShadow: "0 0 30px rgba(201,162,75,0.7)",
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="divider-rune w-40" />
            <p className="font-display text-sm tracking-[0.4em] text-ember text-glow">
              MOIZ ISLAM
            </p>
            <div className="divider-rune w-40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
