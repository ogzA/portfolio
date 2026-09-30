export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const ICONS = 'assets/images/icons/';

const ANGULAR: Technology = { name: 'Angular', icon: `${ICONS}angular.svg` };
const TYPESCRIPT: Technology = { name: 'TypeScript', icon: `${ICONS}typescript.svg` };
const JAVASCRIPT: Technology = { name: 'JavaScript', icon: `${ICONS}javascript.svg` };
const HTML: Technology = { name: 'HTML', icon: `${ICONS}html.svg` };
const CSS: Technology = { name: 'CSS', icon: `${ICONS}css.svg` };
const SUPABASE: Technology = { name: 'Supabase', icon: `${ICONS}supabase.svg` };

export const PROJECTS: Project[] = [
  {
    name: 'Join',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    technologies: [ANGULAR, TYPESCRIPT, HTML, CSS, SUPABASE],
    image: 'assets/images/Join.png',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'El Pollo Loco',
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    technologies: [HTML, CSS, JAVASCRIPT],
    image: 'assets/images/ElPolloLoco.png',
    githubUrl: '#',
    liveUrl: '#',
  },
];
