export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface Project {
  title: string
  category?: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface PortfolioConfig {
  name: string
  title: string
  tagline: string
  about: string
  avatarUrl: string
  email: string
  socials: SocialLink[]
  skills: string[]
  projects: Project[]
  experience: Experience[]
}

const config: PortfolioConfig = {
  name: 'Ariel Plascencia',
  title: 'Full-Stack Developer',
  tagline: 'I build fast, beautiful, and accessible web experiences.',
  about:
    "Hi! I'm a passionate developer with experience building modern web applications. " +
    'I love working with TypeScript, React, and Node.js, and I care deeply about clean code, ' +
    'great UX, and developer experience.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
  email: 'imariel2d@gmail.com',

  socials: [
    { label: 'GitHub', url: 'https://github.com/imariel2d', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arielplascencia/', icon: 'linkedin' },
    {
      label: 'Resume',
      url: 'https://drive.google.com/file/d/1Zth_nmEYDz8W-9REuYUNZSF7hlCX6dt-/view?usp=sharing',
      icon: 'resume',
    },
  ],

  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Docker',
    'Git',
  ],

  projects: [
    {
      title: 'Pomodoro App',
      category: 'My Projects',
      description:
        'Pomodoro timer for studying, focus, and deep work to help people stay productive with structured work sessions.',
      tags: ['React', 'TypeScript', 'Productivity'],
      liveUrl: 'https://focuswithpomo.com/',
    },
    {
      title: 'Culto Perro Cafe',
      category: 'Tepache Projects',
      description:
        'Worked as a project manager to help lead the development of this coffee shop website.',
      tags: ['Project Management', 'E-commerce', 'Team Leadership'],
      liveUrl: 'https://www.perro.cafe/',
    },
    {
      title: 'Dolar en Bancos',
      category: 'Tepache Projects',
      description:
        'App for tracking dollar to peso conversion rates across different Mexican banks.',
      tags: ['Fintech', 'Web App', 'Mexico'],
      liveUrl: 'https://dolarenbancos.com/',
    },
    {
      title: 'Es Legal Mi Trabajo',
      category: 'Tepache Projects',
      description:
        'Website to help workers understand if labor conditions at their job are legal in Mexico.',
      tags: ['Legal Tech', 'Information Platform', 'Mexico'],
      liveUrl: 'https://eslegalmitrabajo.com/',
    },
  ],

  experience: [
    {
      company: 'The Shift Network',
      role: 'Software Engineer',
      period: 'Mar 2023 - Present',
      description:
        'Leading full-stack product initiatives with Next.js and TypeScript, designing reliable integrations across internal platforms, and building AI-assisted tools that reduce repetitive work and accelerate delivery.',
    },
    {
      company: 'Framework Science',
      role: 'Frontend Engineer',
      period: 'Jul 2021 - Jan 2023',
      description:
        'Owned frontend architecture across multiple React products, mentored junior teammates, improved release confidence through automated testing, and modernized CI pipelines for dramatically faster deployments.',
    },
    {
      company: 'Guaostudio',
      role: 'Frontend Developer',
      period: 'Feb 2021 - May 2021',
      description:
        'Built a client-facing MVP from zero to production with Next.js, integrated CMS-driven content workflows, and partnered with design and PM teams to deliver polished features on aggressive timelines.',
    },
    {
      company: 'El Culto al Perro Cafe',
      role: 'Software Engineer',
      period: 'Oct 2019 - Feb 2021',
      description:
        'Engineered and scaled customer-facing web experiences, improved performance through React refactors, implemented resilient authentication flows, and standardized frontend tooling to support faster team execution.',
    },
  ],
}

export default config
