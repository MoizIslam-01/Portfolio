"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ash px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, letterSpacing: "0.35em" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="font-display text-4xl text-blood-bright sm:text-6xl"
        style={{ textShadow: "0 0 30px rgba(178,58,58,0.65)" }}
      >
        YOU DIED
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 text-sm text-bone-dim"
      >
        This page does not exist in the Lands Between.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <Link
          href="/"
          className="rune-frame mt-10 inline-block bg-ash-2 px-6 py-3 text-xs uppercase tracking-[0.25em] text-ember transition-colors hover:bg-ash-3"
        >
          Return to your last Site of Grace
        </Link>
      </motion.div>
    </div>
  );
}
