"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="The Journey So Far" title="Areas Traversed" />

      <div className="relative border-l border-ember/30 pl-8 sm:pl-10">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.org}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border border-ember bg-ash shadow-[0_0_10px_rgba(201,162,75,0.6)] sm:-left-[calc(2.5rem+5px)]" />

            <div className="rune-frame bg-ash-2/60 p-6 sm:p-8">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl text-bone">{entry.role}</h3>
                {entry.current && (
                  <span className="rounded-full border border-ember/50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-ember">
                    Current Legacy Dungeon
                  </span>
                )}
              </div>
              <p className="mb-1 text-sm text-ember">{entry.org}</p>
              <p className="mb-5 text-xs uppercase tracking-[0.15em] text-bone-dim">
                {entry.period}
              </p>
              <ul className="space-y-2.5">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-bone-dim"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
