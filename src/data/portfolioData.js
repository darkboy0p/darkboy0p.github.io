export const personalInfo = {
  name: 'Mahdi',
  title: 'Full-Stack Developer',
  email: 'mahdi@example.com', // Replace with your actual email
  location: 'Narsingdi, Bangladesh',
  phone: '+880 1XXX-XXXXXX', // Replace with your actual phone
  resumeLink: '/resume.pdf',
  tagline: 'A passionate full-stack developer from Bangladesh crafting clean, user-centric digital experiences.',
  social: {
    github: 'https://github.com/darkboy0p',
    linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn
    twitter: 'https://twitter.com/yourusername', // Replace with your Twitter
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
    "I'm Mahdi, a full-stack developer from Narsingdi, Bangladesh with a passion for building digital products that make a real impact. My journey into tech started with a curiosity about how websites work, which quickly turned into a passion for creating seamless user experiences.",
    "Based in Narsingdi Sadar, I work remotely with clients worldwide. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community in Bangladesh.",
    "I specialize in React ecosystem, Node.js, and cloud services, with a growing interest in AI integrations and serverless architectures. My goal is to build technology that is not only functional but also intuitive and accessible to everyone."
  ]
};