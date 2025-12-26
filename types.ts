
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  category: 'website' | 'marketing' | 'maintenance' | 'design';
  showOnHome?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export enum AppRoute {
  HOME = '/',
  SERVICES = '/dich-vu',
  PROJECTS = '/du-an',
  NEWS = '/tin-tuc',
  CONTACT = '/lien-he',
  SERVICE_DETAIL = '/dich-vu/:slug'
}
