export type ExperienceItem = {
  id: string;
  index: string;
  role: string;
  organization: string;
  type: string; // Internship, Open Source, Leadership...
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "drdo-cvrde",
    index: "01",
    role: "Project Intern",
    organization: "DRDO – Combat Vehicles Research & Development Establishment (CVRDE)",
    type: "Research Internship",
    period: "Dec 2024 – Jan 2025",
    location: "Avadi, Chennai, Tamil Nadu",
    description:
      "Worked on a Computer-Aided Process Planning (CAPP) module for machining prismatic components using feature-based recognition. Guided by Scientist 'E' at DRDO-CVRDE.",
    achievements: [
      "Developed a Python-based DXF processing system to extract geometric data from AutoCAD files and convert it into structured text for automated process planning.",
      "Implemented automated generation of G-code and M-code for CNC machining operations.",
      "Performed unit testing, automated testing, and quality assurance checks to validate processing and machining workflows.",
      "Built a feature-based recognition system to identify prismatic component features from DXF geometry.",
    ],
  },
  {
    id: "self-learning",
    index: "02",
    role: "Self-Directed Learner & Open-Source Explorer",
    organization: "Google · AWS Academy · Personal Projects",
    type: "Continuous Learning",
    period: "2024 – Present",
    location: "Remote",
    description:
      "Completed three industry-recognized virtual internships and actively explore open-source projects, full-stack development, and modern web tooling.",
    achievements: [
      "Android Developer Virtual Internship — Google (Sept 2025). Built apps in Kotlin/Java with Android Studio, MVVM, REST APIs, SQLite & Firebase.",
      "AI-ML Virtual Internship — Google (Jun 2025). Hands-on with Python, TensorFlow, preprocessing, and supervised/unsupervised learning.",
      "AWS Cloud Virtual Internship (Oct–Dec 2024). 10-week program covering AWS services, cloud architecture, networking, storage, and deployment.",
      "Continuously ship personal projects across React, TypeScript, Python, and modern web stacks.",
    ],
  },
  {
    id: "leadership",
    index: "03",
    role: "Volunteer & Cadet Leader",
    organization: "SRM IST · National Cadet Corps (NCC)",
    type: "Leadership & Volunteering",
    period: "Sept 2023 – Present",
    location: "Tiruchirappalli, Tamil Nadu",
    description:
      "Active in NCC (A, B & C Certificates — A Grade in all three) and volunteering for innovation and entrepreneurship initiatives at SRM IST.",
    achievements: [
      "Achieved A Grade in NCC A, B & C Certificates — demonstrating leadership, discipline, teamwork, and responsibility.",
      "Volunteer at the AICTE Innovation, Design & Entrepreneurship (IDE) Bootcamp at SRM IST, supporting event coordination and participant engagement.",
      "Recognized for active participation in technical workshops and national-level symposiums.",
    ],
  },
];

export const education = {
  institution: "SRM Institute of Science and Technology, Tiruchirappalli",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2023 – 2027",
  cgpa: "8.74 / 10",
};
