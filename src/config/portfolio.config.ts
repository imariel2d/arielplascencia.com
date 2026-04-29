export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface Project {
  title: string
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
  name: 'Your Name',
  title: 'Full-Stack Developer',
  tagline: 'I build fast, beautiful, and accessible web experiences.',
  about:
    "Hi! I'm a passionate developer with experience building modern web applications. " +
    'I love working with TypeScript, React, and Node.js, and I care deeply about clean code, ' +
    'great UX, and developer experience.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
  email: 'hello@yourname.dev',

  socials: [
    { label: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { label: 'Twitter', url: 'https://twitter.com/yourname', icon: 'twitter' },
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
      title: 'Project Alpha',
      description:
        'A full-stack SaaS platform with real-time collaboration, built with Next.js and Supabase.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/yourname/project-alpha',
    },
    {
      title: 'Project Beta',
      description:
        'An open-source CLI tool that automates repetitive dev workflows, used by 500+ developers.',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      repoUrl: 'https://github.com/yourname/project-beta',
    },
    {
      title: 'Project Gamma',
      description:
        'A performant e-commerce storefront with server components and edge-deployed APIs.',
      tags: ['React', 'Remix', 'Cloudflare Workers'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/yourname/project-gamma',
    },
  ],

  experience: [
    {
      company: 'Acme Corp',
      role: 'Senior Frontend Engineer',
      period: '2023 – Present',
      description:
        'Led the migration of a legacy Angular app to React/TypeScript, reducing bundle size by 40%.',
    },
    {
      company: 'Startup XYZ',
      role: 'Full-Stack Developer',
      period: '2021 – 2023',
      description:
        'Built and maintained core product features, designed REST and GraphQL APIs consumed by mobile clients.',
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2019 – 2021',
      description:
        'Delivered over 15 client projects ranging from marketing sites to custom CMS integrations.',
    },
  ],
}

export default config
