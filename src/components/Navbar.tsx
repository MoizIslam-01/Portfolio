"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SITES = [
  { id: "character", label: "Character" },
  { id: "journey", label: "Journey" },
  { id: "runes", label: "Great Runes" },
  { id: "talismans", label: "Talismans" },
  { id: "stats", label: "Stats" },
  { id: "summon", label: "Summon" },
];

export default function Navbar() {
  const [active, setActive] = useState("character");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = SITES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ember/20 bg-ash/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#character"
          className="font-display text-sm tracking-[0.3em] text-ember text-glow"
        >
          M. ISLAM
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {SITES.map((site) => (
            <li key={site.id}>
              <a
                href={`#${site.id}`}
                className="group relative flex items-center gap-2 rounded px-3 py-2 text-xs uppercase tracking-[0.15em] text-bone-dim transition-colors hover:text-ember"
              >
                <BonfireIcon active={active === site.id} />
                <span className={active === site.id ? "text-ember" : ""}>
                  {site.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-ember" />
          <span className="h-px w-6 bg-ember" />
          <span className="h-px w-6 bg-ember" />
        </button>
      </nav>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col border-t border-ember/20 bg-ash px-5 py-3 md:hidden"
        >
          {SITES.map((site) => (
            <li key={site.id}>
              <a
                href={`#${site.id}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 py-2.5 text-xs uppercase tracking-[0.15em] ${
                  active === site.id ? "text-ember" : "text-bone-dim"
                }`}
              >
                <BonfireIcon active={active === site.id} />
                {site.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}

function BonfireIcon({ active }: { active: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
      <circle
        cx="5"
        cy="5"
        r="3.5"
        fill={active ? "#c9a24b" : "transparent"}
        stroke="#c9a24b"
        strokeWidth="1"
        style={active ? { filter: "drop-shadow(0 0 4px #c9a24b)" } : undefined}
      />
    </svg>
  );
}
