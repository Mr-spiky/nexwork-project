import type {
  Meeting,
  NewsArticle,
  TeamMember,
  QuickLink,
  UpcomingEvent,
  Poll,
  WellnessTip,
  User,
} from './types';
import {
  Briefcase,
  PiggyBank,
  Wrench,
  BookOpen,
  Calendar,
  Users,
} from 'lucide-react';

export const user: User = {
  name: 'Alex',
  avatar: 'https://assets.promptbase.com/DALLE_IMAGES%2F3X1SXaf7riVzZ4fmeD70dlwbQvD3%2Fresized%2F1701344919910q_800x800.webp?alt=media&token=dfb5b9c7-df2f-45c5-a0a1-9b1daa077bf9',
  role: 'Software Engineer',
  department: 'Technology',
  team: 'Project Phoenix',
  email: 'alex.doe@nexwork.com',
};

export const meetings: Meeting[] = [
  {
    id: 'm1',
    title: 'Project Phoenix: Weekly Sync',
    time: '10:00 AM',
    duration: '45 min',
    participants: ['Lena', 'John', 'Sarah'],
    details: 'Discussing Q3 roadmap and feature prioritization.',
  },
  {
    id: 'm2',
    title: 'Marketing Campaign Brainstorm',
    time: '1:30 PM',
    duration: '1 hr',
    participants: ['Mike', 'Chloe', 'David'],
    details: 'Creative session for the new product launch.',
  },
  {
    id: 'm3',
    title: '1-on-1 with Manager',
    time: '4:00 PM',
    duration: '30 min',
    participants: ['Jane Doe'],
    details: 'Performance review and goal setting.',
  },
];

export const news: NewsArticle[] = [
  {
    id: 'n1',
    title: 'NexWork Recognized as a Top Workplace 2024',
    summary:
      "We're thrilled to announce that NexWork has been awarded the 'Top Workplace' award for its outstanding company culture and employee satisfaction...",
    author: 'HR Department',
    date: '3 days ago',
    image: 'https://www.stateofflux.co.uk/getmedia/c3d6c4d8-c62d-453b-8bcb-d2d38a0bed47/IMG-Article-March2020-AD-Catch-the-tiger-by-the-tail.gif?width=600&height=287&ext=.gif',
  },
  {
    id: 'n2',
    title: 'Introducing Our New AI-Powered Analytics Tool',
    summary:
      'The engineering team has launched a new internal tool, "Insight," to help teams make data-driven decisions faster and more efficiently.',
    author: 'Tech Blog',
    date: 'Last week',
    image: 'https://fpt.com/-/media/project/fpt-corporation/fpt/news/2023/04/tan-chu-tich-fpt-japan-tu-thang-3.jpg',
  },
];

export const teamSpotlight: TeamMember = {
  name: 'Maria Garcia',
  role: 'Lead UX Designer',
  photo: 'https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg',
  funFact: '"I can solve a Rubik\'s Cube in under a minute!"',
  birthday: 'Happy Birthday!',
  workAnniversary: 'Celebrating 5 years!',
};

export const quickLinks: QuickLink[] = [
  {
    id: 'ql1',
    label: 'HR Portal',
    icon: Users,
    href: '#',
  },
  {
    id: 'ql2',
    label: 'Expenses',
    icon: PiggyBank,
    href: '#',
  },
  {
    id: 'ql3',
    label: 'IT Support',
    icon: Wrench,
    href: '#',
  },
  {
    id: 'ql4',
    label: 'My Projects',
    icon: Briefcase,
    href: '#',
  },
  {
    id: 'ql5',
    label: 'Org Chart',
    icon: Users,
    href: '#',
  },
  {
    id: 'ql6',
    label: 'Training',
    icon: BookOpen,
    href: '#',
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'e1',
    title: 'Quarterly All-Hands Meeting',
    date: 'Friday, 3:00 PM',
    description: 'Join us for company-wide updates and Q&A with the leadership team.',
  },
  {
    id: 'e2',
    title: 'Team Building: Bowling Night',
    date: 'Next Thursday, 6:00 PM',
    description: "Let's unwind and have some fun at the local bowling alley. Pizza's on us!",
  },
];

export const wellnessTips: WellnessTip[] = [
  {
    title: 'Daily Wellness Tip',
    quote:
      'Take a 5-minute break every hour to stretch and rest your eyes. Your body will thank you.',
    actionLabel: 'Start 2-Min Meditation',
  },
  {
    title: 'A Little Encouragement',
    quote: 'Believe you can and you\'re halfway there.',
    actionLabel: 'Start 2-Min Meditation',
  },
  {
    title: 'Mindful Moment',
    quote: 'The present moment is filled with joy and happiness. If you are attentive, you will see it.',
    actionLabel: 'Start 2-Min Meditation',
  },
    {
    title: 'Positive Vibes Only',
    quote: 'Keep your face always toward the sunshine—and shadows will fall behind you.',
    actionLabel: 'Start 2-Min Meditation',
  },
];

export const quickPoll: Poll = {
  id: 'p1',
  question: 'What should be our next team lunch theme?',
  options: [
    { id: 'po1', text: 'Taco Tuesday', votes: 28 },
    { id: 'po2', text: 'Pizza Party', votes: 45 },
    { id: 'po3', text: 'Sushi Day', votes: 32 },
    { id: 'po4', text: 'Healthy Salads', votes: 15 },
  ],
};
