export const personalInfo = {
  name: 'Alex Chen',
  title: 'Full-Stack Developer',
  email: 'alex.chen@example.com',
  location: 'San Francisco, CA',
  phone: '+1 (555) 123-4567',
  resumeLink: '/resume.pdf',
  tagline: 'A passionate full-stack developer crafting clean, user-centric digital experiences.',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  }
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing online stores. Solved the problem of fragmented sales data by providing real-time analytics and inventory tracking in one unified interface.',
    problemSolved: 'Fragmented sales data across multiple platforms',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '/images/projects/ecommerce-dashboard.jpg',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'TaskFlow App',
    description: 'A collaborative project management tool built to streamline team workflows. Addressed communication gaps by integrating real-time chat, task assignments, and progress tracking.',
    problemSolved: 'Team communication gaps in project management',
    tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    image: '/images/projects/taskflow-app.jpg',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description: 'A dynamic tool that helps developers create stunning portfolios in minutes. Solved the challenge of time-consuming portfolio creation with customizable templates and one-click deployment.',
    problemSolved: 'Time-consuming portfolio creation process',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL', 'Prisma'],
    image: '/images/projects/portfolio-generator.jpg',
    live: '#',
    github: '#',
  },
];

export const skills = [
  {
    icon: 'Code2',
    title: 'Clean Code',
    description: 'I write maintainable, scalable code with a focus on best practices and performance optimization.'
  },
  {
    icon: 'Palette',
    title: 'Design Sensibility',
    description: 'I bridge the gap between design and development, ensuring pixel-perfect implementations.'
  },
  {
    icon: 'Zap',
    title: 'Fast & Responsive',
    description: 'Every project I build is optimized for speed and works flawlessly on any device.'
  },
];

export const bio = {
  paragraphs: [
    "I'm a full-stack developer with over 5 years of experience building digital products that make a real impact. My journey into tech started with a curiosity about how websites work, which quickly turned into a passion for creating seamless user experiences.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and mentoring. I believe in continuous learning and the power of community-driven development.",
    "I specialize in React ecosystem, Node.js, and cloud services, with a growing interest in AI integrations and serverless architectures. My goal is to build technology that is not only functional but also intuitive and accessible to everyone."
  ]
};