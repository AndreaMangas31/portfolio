import { Interest, ProjectExperience, Skill } from "./interfaces";

export const professionalExperience: ProjectExperience[] = [
  {
    id: "salescaling",
    name: "Salescaling Platform",
    company: "Salescaling",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description:
      "Developed both the public website and the internal SaaS platform from scratch. Focused on building a scalable front-end architecture, improving SEO, responsiveness, and aligning the UI with the company’s brand identity. Collaborated closely with designers and backend engineers to deliver a cohesive product experience.",
    link: "https://www.salescaling.com/",
    photo: "/salescaling-web.png",
  },
  {
    id: "asdaudit",
    name: "ASD Audit — Auditor & new Quality Platform",
    company: "ASD Audit",
    role: "Senior Frontend Developer & Team Lead",
    period: "2023 - Present",
    description:
      "Leading the front-end development of ASD, the shared platform that powers multiple company products including Auditor, Quality, and Confirmation. Responsible for defining architecture standards, mentoring developers, and ensuring scalability, performance, and UI consistency across projects.",
    link: "https://asdaudit.com/en/",
    photo: "/asd-web.png",
    shortVideo: [
      "https://www.linkedin.com/posts/auditing-software-distributor-sl_asd-auditorcloud-auditoraedadigital-activity-7374695861815107584-7B7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVaprkBzhP2Mi9AEsV_JnUUXMEVm5PvlnE",
      "https://www.linkedin.com/posts/auditing-software-distributor-sl_asd-auditorcloud-auditoraedadigital-ugcPost-7376879885149097984-p-_r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVaprkBzhP2Mi9AEsV_JnUUXMEVm5PvlnE",
      "https://www.linkedin.com/posts/auditing-software-distributor-sl_asd-asdauditorcloud-auditoraedafinanciera-activity-7351563892105330693-IMSu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVaprkBzhP2Mi9AEsV_JnUUXMEVm5PvlnE",
    ],
    shortVideoThumbnails: [
      "/asd-post-1.png",
      "/asd-post-2.png",
      "/asd-post-3.png",
    ],
  },
];

export const initialSoftSkills: Skill[] = [
  { name: "Leadership", percentage: 90 },
  { name: "Team Collaboration", percentage: 87 },
  { name: "Problem-Solving", percentage: 85 },
  { name: "Attention to Detail", percentage: 100 },
  { name: "Adaptability", percentage: 88 },
  { name: "Communication", percentage: 82 },
  { name: "Time Management", percentage: 85 },
  { name: "Mentoring", percentage: 80 },
];

export const personalInterests: Interest[] = [
  {
    name: "UI/UX Design",
    description:
      "I love crafting interfaces that feel intuitive and visually consistent, combining aesthetics and usability.",
  },
  {
    name: "Web Performance Optimization",
    description:
      "I enjoy experimenting with performance audits and improving loading speed through code optimization.",
  },
  {
    name: "AI Tools & Automation",
    description:
      "Exploring ways to integrate AI into development workflows to save time and improve creativity.",
  },
  {
    name: "Travel & Nature",
    description:
      "I like discovering new places and cultures — it helps me find inspiration and fresh perspectives.",
  },
  {
    name: "Anime & Video Games",
    description:
      "I’m passionate about immersive stories and expressive art styles. Anime and games inspire me to think creatively and explore unique worlds.",
  },
  {
    name: "Drawing",
    description:
      "I enjoy sketching and digital illustration — it helps me relax and express ideas visually beyond the screen.",
  },
];
