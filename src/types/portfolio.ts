export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  shortBio: string;
  fullBio: string;
  careerObjective: string;
  philosophy: string;
  location: string;
  email: string;
  phone?: string;
  availability: string;
  languages: string[];
  fieldOfStudy: string;
  university: string;
  portraitUrl: string;
  cvUrl: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    proficiency: 'Learning' | 'Familiar' | 'Working Knowledge' | 'Proficient' | 'Developing';
    description?: string;
    isKeySkill?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Leadership' | 'Contract';
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  skillsUsed: string[];
  isCurrent?: boolean;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  objectives: string[];
  myRole: string;
  architecture: string;
  toolsUsed: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  lessonsLearned: string[];
}

export type ProjectCategory = 'Programming' | 'Algorithms' | 'Digital Logic' | 'Web Development' | 'Cybersecurity' | 'Networking' | 'Academic Project';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  badge?: string;
  summary: string;
  description: string;
  imageUrl: string;
  stack: string[];
  problemAddressed?: string;
  keyContribution: string;
  keyLearningAreas?: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudy?: CaseStudy;
  featured: boolean;
}

export interface LeadershipActivity {
  id: string;
  role: string;
  organization: string;
  period: string;
  logoUrl?: string;
  overview: string;
  responsibilities: string[];
  achievements?: string[];
  gallery: {
    title: string;
    caption: string;
    imageUrl: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  status?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: 'Cybersecurity' | 'Networking' | 'Communication' | 'Leadership';
  skills: string[];
  highlights?: string[];
  badgeUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  relevantCoursework: string[];
  academicHighlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  metrics: Metric[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  leadership: LeadershipActivity[];
  certifications: CertificationItem[];
  education: EducationItem[];
  socialLinks: SocialLink[];
}
