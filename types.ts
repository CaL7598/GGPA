
export enum AppPillar {
  GOVERNANCE = 'Governance',
  DIPLOMACY = 'Diplomacy',
  RESEARCH = 'Research',
  ACADEMY = 'Academy',
  PARTNERSHIPS = 'Partnerships'
}

export interface VolumeCategory {
  id: string;
  title: string;
  range: string;
  description: string;
  volumes: string[];
}

export interface Stats {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  category: 'Press' | 'Field Notes' | 'Academy' | 'Editorial';
  title: string;
  date: string;
  excerpt: string;
  author?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface AppState {
  hero: {
    headline: string;
    subHeadline: string;
    image: string;
  };
  founder: {
    quote: string;
    name: string;
    title: string;
    image: string;
  };
  stats: Stats[];
  news: NewsItem[];
  compendium: VolumeCategory[];
  gallery: GalleryImage[];
}
