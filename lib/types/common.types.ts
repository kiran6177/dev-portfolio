export type NavigationItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  subImages?: string[];
  stack: string[];
  features: string[];
  github: string;
};

export type Experience = {
  id: string;
  commit: string;
  title: string;
  company: string;
  period: string;
  quote: string;
  tags: string[];
};

export type Education = {
  id: string;
  commit: string;
  institution: string;
  degree: string;
  period: string;
  tags?: string[];
};
