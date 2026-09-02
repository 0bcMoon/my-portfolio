import portfolioData from './portfolio.json';

export interface BasicInfo {
  name: string;
  label: string;
  bio: string;
  techStack: string[];
  email: string;
  phone: string;
  location: string;
  languages: string[];
  status: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  year: string;
  description: string;
  tech: string[];
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SectionItem {
  id: string;
  label: string;
}

export interface Portfolio {
  basics: BasicInfo;
  socials: SocialLink[];
  experience: any[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  sections: SectionItem[];
}

export const portfolio: Portfolio = portfolioData;
export default portfolio;
