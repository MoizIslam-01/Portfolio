"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="runes" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Great Runes Claimed" title="Featured Projects" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            onSelect={() => setSelected(i)}
          />
        ))}
      </div>

      <ProjectModal
        project={selected !== null ? featuredProjects[selected] : null}
        onClose={() => setSelected(null)}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-24"
      >
        <p className="mb-8 text-center text-xs uppercase tracking-[0.4em] text-bone-dim">
          Lesser Foes Vanquished
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rune-frame flex flex-col items-center gap-1.5 bg-ash-2/40 px-3 py-5 text-center transition-colors hover:bg-ash-3/50"
            >
              <span className="text-sm text-bone">{project.name}</span>
              <span className="text-[10px] uppercase tracking-wide text-bone-dim">
                {project.stack}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
