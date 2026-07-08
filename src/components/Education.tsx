"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import SectionHeading from "@/components/SectionHeading";

const GPA_MAX = 4.0;

export default function Education() {
  const gpaValue = parseFloat(education.gpa);
  const gpaPercent = Math.min(100, (gpaValue / GPA_MAX) * 100);

  return (
    <section id="stats" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Character Sheet" title="Origin & Stats" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rune-frame bg-ash-2/50 p-8 sm:p-10"
      >
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bone-dim">Class</p>
            <h3 className="font-display text-xl text-ember sm:text-2xl">
              {education.degree}
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-bone-dim">
            {education.period}
          </p>
        </div>

        <p className="mb-8 text-sm text-bone-dim">
          <span className="text-bone">Origin —</span> {education.school}
        </p>

        <div className="mb-9">
          <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-bone-dim">
            <span>Intelligence (CGPA)</span>
            <span className="text-ember">{education.gpa} / {GPA_MAX.toFixed(1)}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-ash-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${gpaPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-blood via-ember to-ember-bright"
            />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
              Spells Learned
            </p>
            <ul className="space-y-1.5 text-sm text-bone-dim">
              {education.coursework.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
              Deeds Beyond the Classroom
            </p>
            <ul className="space-y-1.5 text-sm text-bone-dim">
              {education.activities.map((activity) => (
                <li key={activity} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex gap-6 border-t border-ember/20 pt-6 text-xs uppercase tracking-[0.2em] text-bone-dim">
          {education.languages.map((lang) => (
            <span key={lang.name}>
              {lang.name} — <span className="text-ember">{lang.level}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
