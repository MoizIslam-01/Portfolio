import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-ember/20 px-6 py-10 text-center">
      <p className="font-display text-xs tracking-[0.3em] text-bone-dim">
        &ldquo;May you find your grace.&rdquo;
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-bone-dim/70">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}
