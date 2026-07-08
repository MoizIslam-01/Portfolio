export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Dart", "C#", "C", "C++", "Java", "Python", "PHP"],
  },
  {
    category: "Web",
    items: [
      "MongoDB/NoSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
      "JWT Auth",
      "Firebase",
    ],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Android Studio"],
  },
  {
    category: "Game Dev",
    items: ["Unity 2D", "Unity 3D", "Unity WebGL"],
  },
  {
    category: "Testing",
    items: ["Manual Testing", "Unit Testing", "Integration Testing", "Test Case Writing"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux", "Discord.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Firebase Realtime Database"],
  },
  {
    category: "Other",
    items: ["Agile/Scrum", "Code Review", "OOP", "Clean Architecture", "AI/ML Fundamentals"],
  },
];
