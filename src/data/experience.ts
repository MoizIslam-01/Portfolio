export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Game Developer",
    org: "Finova Solutions",
    period: "February 2026 – Present",
    current: true,
    bullets: [
      "Shipped 12+ production-ready 2D educational Unity games, improving student concept retention across 3 core subjects.",
      "Engineered interactive game mechanics and physics-based systems in C#, reducing reported gameplay bugs by 25-30% through systematic debugging and iterative testing cycles.",
      "Collaborated with a 3-person team in bi-weekly Agile sprint reviews, delivering 2 new feature modules per sprint on schedule.",
      "Participated in peer code reviews for pull requests, enforcing clean architecture standards and catching 2-3 logic errors before production deployment.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "Pakistan International Airlines (PIA)",
    period: "August 2025 – October 2025",
    current: false,
    bullets: [
      "Designed and deployed a fully responsive Duck Hunt browser game in vanilla JavaScript, achieving smooth 60fps animations and cross-browser compatibility across 3 major browsers with zero external libraries.",
      "Diagnosed and resolved DOM-related bugs during QA, writing manual test cases that reduced post-release defects by 14-15%.",
      "Analyzed PIA's production web architecture alongside a senior engineer, identifying UI/UX inconsistencies and documenting actionable improvement recommendations.",
    ],
  },
];
