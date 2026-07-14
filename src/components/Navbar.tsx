"use client";

import { useEffect, useId, useState } from "react";
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
                <span
                  className={
                    active === site.id ? "text-ember text-glow font-medium" : ""
                  }
                >
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
                  active === site.id
                    ? "text-ember text-glow font-medium"
                    : "text-bone-dim"
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
  const uid = useId();
  const gradientId = `flame-${uid}`;

  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
      {active && (
        <motion.span
          aria-hidden="true"
          className="absolute h-3 w-3 rounded-full bg-ember blur-[5px]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        className="relative"
        animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={
          active
            ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
            {active ? (
              <>
                <stop offset="0%" stopColor="#b23a3a" />
                <stop offset="55%" stopColor="#c9a24b" />
                <stop offset="100%" stopColor="#f0cf7c" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#2a2930" />
                <stop offset="100%" stopColor="#4a4852" />
              </>
            )}
          </linearGradient>
        </defs>
        <path
          d="M12 2c-1.1 3.4-4.6 5.9-4.6 10.1A4.6 4.6 0 0 0 12 16.7a4.6 4.6 0 0 0 4.6-4.6c0-1.8-.8-3-1.6-4.1.2 1.5-.5 2.6-1.3 3-.2-1.9-1.3-3.2-1.7-4.5-.3 1.1-.8 1.9-.8 1.9C11.6 5.8 12 3.8 12 2Z"
          fill={`url(#${gradientId})`}
          stroke={active ? "#f0cf7c" : "#57545c"}
          strokeWidth="0.4"
        />
        <ellipse
          cx="12"
          cy="20.5"
          rx="4.6"
          ry="1"
          fill={active ? "#c9a24b" : "#3a3a42"}
          opacity={active ? 0.6 : 0.8}
        />
      </motion.svg>
    </span>
  );
}
