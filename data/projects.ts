export type Project = {
  id: string;
  index: string; // "01", "02"...
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  href?: string;
  image?: string;
  gradient: string; // CSS gradient used as image placeholder
  accent: string; // accent color for the card
};

export const projects: Project[] = [
  {
    id: "smart-event-management",
    index: "01",
    title: "Smart Event Management System",
    category: "Full-Stack Web Application",
    year: "2025 – 2026",
    description:
      "A full-stack platform to streamline college event management, registration, and administration.",
    longDescription:
      "Developed a full-stack smart event management system with role-based authentication, event registration, participation tracking, room allocation, OD letter automation, PDF reports, and analytics dashboards.",
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "jsPDF",
    ],
    highlights: [
      "Role-based authentication with Supabase Auth",
      "Event registration & approval workflows",
      "Room allocation based on availability and capacity",
      "Automated OD letter generation & PDF report export",
      "Interactive analytics dashboards with Recharts",
    ],
    href: "https://smart-event-management-eight.vercel.app",
    image: "/smart-events-logo.png",
    gradient: "from-[#FF4D2E] via-[#FF8A5C] to-[#1A0A06]",
    accent: "#FF4D2E",
  },
  {
    id: "college-hr-management",
    index: "02",
    title: "College HR Management System",
    category: "Full-Stack Web Application",
    year: "2025 – 2026",
    description:
      "A practical HR platform for managing college staff, workflows, records, and day-to-day administration.",
    longDescription:
      "Built a complete college HR product with authenticated access, structured staff data, and responsive interfaces designed around real administrative workflows.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    highlights: [
      "Authenticated HR management workflows",
      "Structured staff and college records",
      "Responsive administrative dashboard",
      "Backend-connected product architecture",
    ],
    href: "https://college-hr.vercel.app",
    image: "/College HR Management System.png",
    gradient: "from-[#243B72] via-[#17254A] to-[#070A14]",
    accent: "#6D8CFF",
  },
  {
    id: "capp-module",
    index: "03",
    title: "Development of a CAPP Module for Machining of Prismatic Components",
    category: "Machine Learning · CAD/CAM · Process Planning",
    year: "2024 – Present",
    description:
      "A DRDO-certified Computer-Aided Process Planning module that recognizes features from AutoCAD DXF files and generates CNC code.",
    longDescription:
      "Developed during the DRDO-CVRDE internship under Scientist 'E'. The system extracts geometry from AutoCAD DXF files, converts features to structured text, validates the process, and generates G-code and M-code for CNC machining.",
    tech: ["Python", "AutoCAD DXF", "Pandas", "NumPy", "pytest", "Git", "G-code", "M-code"],
    highlights: [
      "Feature-based recognition for prismatic components",
      "DXF geometry extraction and structured text conversion",
      "Validated G-code and M-code generation",
      "Unit testing, automated testing, and QA checks",
    ],
    gradient: "from-[#0C6B68] via-[#123C4A] to-[#071416]",
    accent: "#43D6B5",
  },
  {
    id: "ai-ml-experiments",
    index: "04",
    title: "AI/ML Experiments & Models",
    category: "Machine Learning · Self-Directed",
    year: "2025",
    description:
      "Collection of experiments in supervised & unsupervised learning, model evaluation, and deployment.",
    longDescription:
      "Hands-on projects from the Google AI-ML Virtual Internship — covering data preprocessing, TensorFlow model development, and deployment fundamentals.",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Jupyter"],
    highlights: [
      "Supervised & unsupervised learning pipelines",
      "Data preprocessing & feature engineering",
      "Model evaluation & tuning",
      "Deployment fundamentals for ML systems",
    ],
    gradient: "from-[#5A2D7C] via-[#2A1442] to-[#0A0A0A]",
    accent: "#A56BD8",
  },
];
