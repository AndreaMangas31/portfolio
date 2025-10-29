import { ComponentType } from "react";
import { MainPage } from "../src/pages/main-page.page";
import Experience from "../src/pages/experience.page";
import MultimediaEngineering from "../src/pages/multimedia-engineering.page";
import WorkExperiences from "../src/pages/work-experiences.page";
import CodingDesign from "../src/pages/coding-design.page";

interface RouteConfig {
  path: string;
  element: ComponentType;
}

export const routeViews: Record<string, RouteConfig> = {
  main: {
    path: "/",
    element: MainPage,
  },
  multimediaEngineering: {
    path: "/multimedia-engineering",
    element: MultimediaEngineering,
  },
  experience: {
    path: "/experience",
    element: Experience,
  },
  workExperiences: {
    path: "/work-experiences",
    element: WorkExperiences,
  },
  codingDesign: {
    path: "/coding-design",
    element: CodingDesign,
  },
};
