"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FeaturedProject } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: FeaturedProject | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-ash/90 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <motion.div
            className="rune-frame relative max-w-lg bg-ash-2 p-8 sm:p-10"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-lg text-bone-dim transition-colors hover:text-ember"
            >
              ✕
            </button>

            <p className="mb-2 text-xs uppercase tracking-[0.4em] text-bone-dim">
              Great Rune
            </p>
            <h3 className="font-display text-2xl text-ember text-glow sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm italic text-bone-dim">
              {project.tagline}
            </p>

            <div className="divider-rune my-6 w-16" />

            <p className="text-sm leading-relaxed text-bone-dim">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-ember/40 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ember"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border-b border-ember/50 pb-0.5 text-xs uppercase tracking-[0.2em] text-ember transition-colors hover:border-ember-bright hover:text-ember-bright"
              >
                View Repository →
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
