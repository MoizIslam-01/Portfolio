export type FeaturedProject = {
  name: string;
  tagline: string;
  stack: string[];
  description: string;
  github?: string;
};

export type OtherProject = {
  name: string;
  stack: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "IntelliSpace",
    tagline: "A 3D immersive shopping plaza",
    stack: ["Unity WebGL", "React", "Node.js", "MongoDB"],
    description:
      "Built a 3D immersive WebGL shopping plaza with multi-floor navigation, integrated with a full Node.js/MongoDB backend handling user accounts, product management, and real-time transactions. Wrote and manually tested core API endpoints across 7-8 user flows before deployment.",
  },
  {
    name: "Animenation Blogs",
    tagline: "A full-stack blogging platform",
    stack: ["MERN Stack", "Redux", "JWT", "MongoDB"],
    description:
      "Developed a full-stack blogging platform with JWT authentication, role-based access control, and a RESTful Express.js API. Implemented Redux state management and wrote unit tests for core components to ensure reliability before release.",
    github: "https://github.com/MoizIslam-01/animenation-blogs-mern-stack",
  },
  {
    name: "Ecommerce Store",
    tagline: "A typed full-stack ecommerce app",
    stack: ["Next.js 14", "TypeScript", "PHP", "MySQL", "Tailwind CSS"],
    description:
      "Engineered a full-stack ecommerce application with a typed Next.js frontend and PHP/MySQL backend, featuring an admin dashboard, shopping cart, and user authentication.",
    github: "https://github.com/MoizIslam-01/Ecommerce-App",
  },
];

export const otherProjects: OtherProject[] = [
  { name: "Welp", stack: "Flutter · Firebase" },
  { name: "Chef's Delight", stack: "Flutter" },
  { name: "Lost Beyond Realms", stack: "Unity 2D" },
  { name: "SipraBot", stack: "Discord.js" },
  { name: "KianiBot", stack: "Discord.js" },
  { name: "Duck Hunt", stack: "HTML5 · JavaScript" },
];
