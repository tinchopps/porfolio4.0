export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}