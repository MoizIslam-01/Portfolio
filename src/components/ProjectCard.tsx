"use client";

import { motion } from "framer-motion";
import type { FeaturedProject } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: FeaturedProject;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="rune-frame group flex flex-col bg-ash-2/60 p-6 text-left transition-colors hover:bg-ash-3/70 sm:p-7"
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-bone-dim">
        Great Rune {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="font-display text-xl text-ember transition-colors group-hover:text-ember-bright sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-1 text-sm italic text-bone-dim">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-sm border border-ember/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-bone-dim"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 text-xs uppercase tracking-[0.2em] text-ember opacity-0 transition-opacity group-hover:opacity-100">
        Approach the fog gate →
      </span>
    </motion.button>
  );
}
