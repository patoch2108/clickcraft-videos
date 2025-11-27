// Types for ClickCraft App

export type PlanType = 'iniciante' | 'criador' | 'vip';

export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface VideoClip {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: number;
  createdAt: Date;
  platform: 'youtube' | 'tiktok' | 'instagram' | 'facebook';
}

export interface ViralAccount {
  id: string;
  username: string;
  platform: string;
  avatar: string;
  views: number;
  rank: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  videoUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type Language = 'pt' | 'fr' | 'en' | 'es';
