"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7 }}
      className="mb-14 flex flex-col items-center text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.5em] text-bone-dim">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl text-ember text-glow sm:text-4xl">
        {title}
      </h2>
      <div className="divider-rune mt-5 w-20" />
    </motion.div>
  );
}
