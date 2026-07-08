"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="character"
      className="relative flex min-h-screen flex-col items-center px-6 pb-10 pt-24 text-center"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.5em] text-bone-dim"
        >
          Tarnished of {profile.location}
        </motion.p>

        <div className="divider-rune mb-6 w-24" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-4xl font-semibold tracking-wide text-ember text-glow sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 font-display text-lg text-bone sm:text-xl"
        >
          {profile.title}
        </motion.p>

        <div className="divider-rune my-6 w-24" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl text-sm leading-relaxed text-bone-dim sm:text-base"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#runes"
            className="rune-frame bg-ash-2 px-6 py-3 text-xs uppercase tracking-[0.2em] text-ember transition-colors hover:bg-ash-3"
          >
            Enter the Lands Between
          </a>
          <a
            href="#summon"
            className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-ember"
          >
            Summon Cooperation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-bone-dim"
        >
          <a href={`mailto:${profile.email}`} className="hover:text-ember">
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ember"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ember"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-10 flex flex-col items-center gap-2 text-bone-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-gradient-to-b from-ember to-transparent"
        />
      </motion.div>
    </section>
  );
}
