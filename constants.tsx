
import React from 'react';
import { Shield, Globe, Database, GraduationCap, Users, BarChart3, FileText, Briefcase } from 'lucide-react';
import { VolumeCategory, Stats, NewsItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#/' },
  { name: 'About Us', href: '#/about' },
  { name: 'Compendium', href: '#/compendium' },
  { name: 'Gallery', href: '#/gallery' },
  { name: 'Pillars', href: '#/pillars' },
  { name: 'Fellowship', href: '#/fellowship' },
  { name: 'Contact', href: '#/contact' }
];

export const VOLUME_CATEGORIES: VolumeCategory[] = [
  {
    id: "vol-cat-1",
    title: "Legal & Fiduciary",
    range: "Vols I-VIII",
    description: "Foundational frameworks for Act 992 compliance and institutional transparency.",
    volumes: ["Act 992 Compliance", "Fiduciary Responsibility", "Audit Trails", "Board Governance", "Legal Harmonies"]
  },
  {
    id: "vol-cat-2",
    title: "Diplomatic Protocols",
    range: "Vols IX-XVI",
    description: "Multi-lateral relationship management and international protocol standards.",
    volumes: ["Note Verbale Standards", "Treaty Negotiation", "AU Liaison Protocols", "Commonwealth Diplomacy", "Diplomatic Circulars"]
  },
  {
    id: "vol-cat-3",
    title: "Technical Manuals",
    range: "Vols XVII-XXIV",
    description: "Implementation guides for digital sovereignty and administrative velocity.",
    volumes: ["E-Governance Architecture", "Logic Model Frameworks", "Procurement Workflows", "Cyber Sovereignty", "Data Ethics"]
  },
  {
    id: "vol-cat-4",
    title: "Human Capital & Academy",
    range: "Vols XXV-XXXI",
    description: "Blueprints for the Youth Advisory Corps and elite leadership training.",
    volumes: ["Critical Youth Mandate", "Technical Elite Training", "Induction Protocols", "Mentorship Structures", "YAC Tiers"]
  }
];

export const IMPACT_STATS: Stats[] = [
  { id: 'stat-volumes', label: 'Technical Volumes', value: '30', icon: 'Database' },
  { id: 'stat-pages', label: 'Framework Pages', value: '5,000+', icon: 'FileText' },
  { id: 'stat-ipsas', label: 'IPSAS Compliance', value: '100%', icon: 'Shield' },
  { id: 'stat-fellows', label: 'Active Fellows', value: '120+', icon: 'Users' }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    category: 'Editorial',
    title: 'Beyond Advocacy: The Case for Functional Authority',
    date: 'February 10, 2026',
    author: 'Dr. David Sekyi Yirenkyi',
    excerpt: 'At GGPA, we argue that a seat is insufficient without a blueprint. Functional Authority means youth leaders aren\'t just observers—they are auditors.'
  },
  {
    id: '2',
    category: 'Press',
    title: 'Formal Expression of Interest to UN ECOSOC',
    date: 'February 2, 2026',
    excerpt: 'The Secretariat is pleased to announce the submission of our roadmap toward Special Consultative Status with the United Nations.'
  },
  {
    id: '3',
    category: 'Field Notes',
    title: 'Digitizing the Fiduciary Trail: In-Situ Report',
    date: 'January 28, 2026',
    excerpt: 'Applying the GGPA Logic Model to reduce human error in procurement workflows across West African states.'
  }
];
