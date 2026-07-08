"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="summon" className="relative mx-auto max-w-2xl px-6 py-28">
      <SectionHeading eyebrow="Place Your Summon Sign" title="Summon Cooperation" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rune-frame flex flex-col gap-5 bg-ash-2/50 p-8 sm:p-10"
      >
        <Field
          label="Your Name"
          type="text"
          required
          value={form.name}
          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        />
        <Field
          label="Your Email"
          type="email"
          required
          value={form.email}
          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        />
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-bone-dim">
            Your Message
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="resize-none border border-ember/30 bg-ash px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-ember"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rune-frame mt-2 bg-ash-3 px-6 py-3 text-xs uppercase tracking-[0.25em] text-ember transition-colors hover:bg-ash disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Placing Summon Sign..." : "Place Summon Sign"}
        </button>

        {status === "sent" && (
          <p className="text-center text-xs uppercase tracking-[0.2em] text-ember">
            Your summon sign has been placed — thank you, and I&apos;ll respond soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-xs uppercase tracking-[0.2em] text-blood-bright">
            The summon failed to reach the Lands Between. Please try again or email
            directly.
          </p>
        )}
      </motion.form>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-bone-dim">
        <a href={`mailto:${profile.email}`} className="hover:text-ember">
          {profile.email}
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
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  required,
  value,
  onChange,
}: {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.25em] text-bone-dim">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-ember/30 bg-ash px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-ember"
      />
    </div>
  );
}
