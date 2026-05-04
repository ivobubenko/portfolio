import englishContent from './text-eng.json';
import slovakContent from './text-svk.json';

export const supportedLanguages = ['en', 'sk'] as const;

export type Language = (typeof supportedLanguages)[number];

export type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  link?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  technologies?: string[];
  details: string[];
};

export type Education = {
  school: string;
  program: string;
  period: string;
  details?: string[];
};

export type PortfolioContent = {
  brand: {
    desktopTitle: string;
    mobileTitle: string;
    copyrightName: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  profile: {
    name: string;
    role: string;
    location: string;
    summary: string;
  };
  heroCtas: {
    projects: string;
    experience: string;
    contact: string;
  };
  projectCtas: {
    demo: string;
    details: string;
  };
  sections: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    contact: string;
  };
  about: {
    paragraphs: string[];
    focusAreas: string[];
  };
  projects: Project[];
  experience: Experience[];
  skillGroups: {
    title: string;
    items: string[];
  }[];
  education: Education[];
  languages: string[];
  contact: {
    text: string;
    links: {
      title: string;
      variant?: 'text' | 'outlined' | 'contained';
      link: string;
      rel?: string;
    }[];
  };
  footer: {
    builtWith: string;
  };
};

export const defaultLanguage: Language = 'en';

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: englishContent as PortfolioContent,
  sk: slovakContent as PortfolioContent,
};

export function getPortfolioContent(language: Language = defaultLanguage) {
  return portfolioContent[language];
}
