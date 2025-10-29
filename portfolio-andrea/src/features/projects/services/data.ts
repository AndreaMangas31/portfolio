import { Project } from "./interfaces";

export const initialProjects: Project[] = [
  {
    id: "personal-CV-website",
    name: "Personal CV Website",
    photo: "/zoro-prueba.png",
    shortVideo: "https://example.com/videos/personal-cv.mp4",
    description:
      "A personal CV website to showcase my professional skills, projects, and experience.",
    link: "https://mycvwebsite.com",
  },
  {
    id: "online-store",
    name: "Online Store",
    photo: "/zoro-prueba.png",
    shortVideo: "https://example.com/videos/online-store.mp4",
    description:
      "An e-commerce platform for selling various products online, with a user-friendly UI.",
    link: "https://onlinestore.com",
  },
  {
    id: "task-manager-app",
    name: "Task Manager App",
    photo: "/zoro-prueba.png",
    shortVideo: "https://example.com/videos/task-manager.mp4",
    description:
      "A web app to manage daily tasks efficiently with features like drag-and-drop and deadlines.",
    link: "https://taskmanagerapp.com",
  },
  {
    id: "photo-gallery",
    name: "Photo Gallery",
    photo: "/zoro-prueba.png",
    shortVideo: "https://example.com/videos/photo-gallery.mp4",
    description:
      "A responsive photo gallery app with infinite scrolling and category filters.",
    link: "https://photogallery.com",
  },
  {
    id: "weather-app",
    name: "Weather App",
    photo: "/zoro-prueba.png",
    shortVideo: "https://example.com/videos/weather-app.mp4",
    description:
      "A weather forecast app that provides real-time updates based on the user's location.",
    link: "https://weatherapp.com",
  },
];

export const initialSoftSkills = [
  { name: "Leadership", percentage: 90 },
  { name: "Team Collaboration", percentage: 87 },
  { name: "Problem-Solving", percentage: 85 },
  { name: "Attention to Detail", percentage: 100 },
  { name: "Adaptability", percentage: 88 },
  { name: "Communication", percentage: 82 },
  { name: "Time Management", percentage: 85 },
  { name: "Mentoring", percentage: 80 },
];
