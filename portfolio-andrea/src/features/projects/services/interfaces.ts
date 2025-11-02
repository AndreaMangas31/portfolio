import { Card } from "../../../utils/interfaces";

export interface Project {
  id: string;
  name: string;
  photo: string;
  shortVideo: string;
  description: string;
  link: string;
}

export interface ProjectExperience extends Card {
  company: string;
  role: string;
  period: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Interest {
  name: string;
  description: string;
}