// Career progression data. To add an entry, add an object at the top of the array.
// Fields:
//   title, company, period        -> header text
//   current (bool)                -> blue highlight; false = grey (e.g. education)
//   points (string[])             -> bullet points (split in two columns automatically)
export const experience = [
  {
    title: "Frontend Developer",
    company: "Kulsys Technologies · Cairo, Egypt",
    period: "Mar 2026 - Present",
    current: true,
    points: [
      "Build production business apps with React, Next.js & TypeScript in a modular monolith",
      "Own features end-to-end: analysis, implementation, testing, review, deployment & support",
      "Build enterprise platforms, dashboards and POS systems with backend teams & stakeholders",
      "Review code, enforce standards, troubleshoot production issues and support releases",
    ],
  },
  {
    title: "Frontend Developer (Freelancer)",
    company: "Remote",
    period: "Oct 2023 - Present",
    current: true,
    points: [
      "Delivered 11 web applications with 90+ Lighthouse scores",
      "Maintained 100% client satisfaction across 10 clients",
      "Reduced page load times by ~30% through SSR optimization",
      "Built bilingual, accessible interfaces",
    ],
  },
  {
    title: "AI Trainer",
    company: "Outlier (Remote)",
    period: "Feb 2024 - Present",
    current: true,
    points: [
      "Evaluate AI-generated code for reasoning quality and technical accuracy",
      "Apply structured evaluation criteria to improve model outputs",
      "Gained hands-on expertise in prompt engineering",
      "LLM evaluation and AI quality assessment",
    ],
  },
  {
    title: "Computer Science Student",
    company: "Future University in Egypt & University of Cincinnati",
    period: "2021 - 2025",
    current: false,
    points: [
      "Dual degree program in Computer Science & Information Technology",
      "Graduated July 2025",
    ],
  },
];
