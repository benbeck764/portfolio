export type Project = {
  name: string;
  description: string;
  url?: string;
  gitHubUrl?: string;
  technologies: string[];
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    name: 'BenBeck.dev',
    description: `This is where you are right now! This app is a continued work in progress, as I learn new skills, I will attempt to apply them to this website.`,
    url: 'https://benbeck.dev',
    gitHubUrl: 'https://github.com/benbeck764/portfolio',
    technologies: ['React', 'Next.js', 'TypeScript', 'MUI', 'Azure'],
  },
  {
    name: 'React Components Library',
    description: `A React library featuring a collection of custom and abstracted MUI components along with a base theme which can be overriden. 
    These are the very components this app is built upon.`,
    gitHubUrl: 'https://github.com/benbeck764/react-components',
    technologies: ['React', 'TypeScript', 'MUI', 'Storybook'],
  },
   {
    name: 'PowerBI.Tips Tools',
    description: `Tools designed to unlock your creativity and provide a comfortable and simplistic way to generate a Power BI theme.
    Users are able to view a theme gallery, generate wireframes and color palettes and modify hundreds of theme properties!`,
    technologies: ['TypeScript', 'React', 'React Query', 'MUI', 'Azure'],
    url: 'https://tools.powerbi.tips',
  },
  {
    name: 'CustomerFirst',
    description: `An enhanced online ordering system featuring a personalized dashboard, smart search and ordering, robust list management, finance management, and more — from any device you choose to work from!`,
    technologies: ['TypeScript', 'React', 'Redux', 'MUI', 'Azure B2C'],
    url: 'https://www.performancefoodservice.com/Your-Operation/Manage-Your-Order/Account-Management',
  },
  {
    name: 'Regulatory Clarity',
    description: `A next generation, automated tool that provides Form ADV monitoring and flagging for fund allocators. Monitors fund managers and funds, notifies you daily of all changes, indicates the level of importance for those changes, and suggests next steps.`,
    technologies: [
      'C#',
      '.NET Core Web API',
      'Entity Framework',
      'Azure',
      'Azure B2C',
      'SQL Server',
      'Angular',
    ],
    url: 'https://www.kroll.com/en/services/alternative-asset-advisory/regulatory-clarity',
  },
  {
    name: 'PeriWatch Vigilance',
    description: `An automated maternal-fetal early warning system for obstetrics that automates the process of identifying patients who may be at risk for adverse outcomes during labor and delivery.`,
    technologies: ['D3.js', 'TypeScript', 'Angular', 'SignalR', 'C#'],
    url: 'https://perigen.com/periwatch-vigilance',
  },
];
