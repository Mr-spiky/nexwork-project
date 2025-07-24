import type { LucideIcon } from 'lucide-react';

export interface User {
  name: string;
  avatar: string;
  role: string;
  department: string;
  team: string;
  email: string;
}

export interface Meeting {
  id: string;
  title: string;
  time: string;
  duration: string;
  participants: string[];
  details: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  funFact: string;
  birthday?: string;
  workAnniversary?: string;
}

export interface QuickLink {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface PollOption {
  id:string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

export interface WellnessTip {
    title: string;
    quote: string;
    actionLabel: string;
}

export interface SmartSuggestion {
    id: string;
    emoji: string;
    text: string;
    link?: {
        label: string;
        href: string;
    }
}
