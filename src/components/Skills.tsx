"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="talismans" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="Equipped Loadout" title="Talismans & Sorceries" />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="rune-frame bg-ash-2/50 p-6"
          >
            <h3 className="mb-4 font-display text-sm uppercase tracking-[0.25em] text-ember">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-ember/30 bg-ash/40 px-2.5 py-1 text-xs text-bone-dim transition-colors hover:border-ember/70 hover:text-bone"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
