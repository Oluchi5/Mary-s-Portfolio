
export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'AI & Automation';
  summary: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  results?: string[];
  repoLink?: string;
  demoLink?: string;
  challenge?: string;
  approach?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  startingPrice?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface ReasonToChoose {
  title: string;
  description: string;
}
