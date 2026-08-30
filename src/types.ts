export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'leadership' | 'architecture' | 'fullstack' | 'cloud';
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100 or 1-5
  years: string;
  highlight?: boolean;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  problem: string;
  solution: string;
  architecture: string[];
  results: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  statBadge?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  honors?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  availability: string;
  executiveSummary: string;
  strategicPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  metrics: Metric[];
  socialLinks: SocialLink[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectCaseStudy[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export type ViewMode = 'portfolio' | 'resume' | 'matrix';
export type AccentColor = 'indigo' | 'emerald' | 'amber' | 'sky' | 'rose' | 'slate';
