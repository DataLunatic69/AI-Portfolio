
import { tool } from "ai";
import { z } from "zod";

// Project data from Data.tsx
const PROJECT_CONTENT = [
  {
    title: 'Agentic SDLC',
    description:
      'An AI-powered Software Development Life Cycle (SDLC) system that automates and streamlines the entire development process. This project leverages advanced AI agents to handle requirements gathering, design, development, testing, and deployment phases, making software development more efficient and intelligent.',
    techStack: [
      'Python',
      'AI/ML',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Microservices',
      'REST APIs',
      'PostgreSQL',
      'Redis'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DataLunatic69/Agentic-SDLC',
      },
      {
        name: 'Demo',
        url: '#',
      },
    ],
  },
  {
    title: 'CodeAnalyser',
    description:
      'An intelligent code analysis tool that uses AI to review, optimize, and suggest improvements for code quality. The system can detect potential bugs, security vulnerabilities, and performance issues while providing actionable recommendations for better code practices.',
    techStack: [
      'Python',
      'AST Analysis',
      'Machine Learning',
      'NLP',
      'FastAPI',
      'React',
      'TypeScript',
      'Docker'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DataLunatic69/CodeAnalyser',
      },
      {
        name: 'Demo',
        url: '#',
      },
    ],
  },
  {
    title: 'MultiModal PDF',
    description:
      'A comprehensive PDF processing system that combines computer vision and natural language processing to extract, analyze, and understand content from PDF documents. The system can handle text, images, tables, and complex layouts.',
    techStack: [
      'Python',
      'Computer Vision',
      'OCR',
      'NLP',
      'Transformers',
      'FastAPI',
      'React',
      'PDF Processing',
      'TensorFlow'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DataLunatic69/MultiModal-PDF',
      },
      {
        name: 'API Documentation',
        url: '#',
      },
    ],
  },
  {
    title: 'FallbackSystem',
    description:
      'A robust fallback and error handling system designed for high-availability applications. This system provides intelligent failover mechanisms, automatic recovery, and comprehensive monitoring to ensure continuous service availability.',
    techStack: [
      'Python',
      'System Design',
      'Microservices',
      'Docker',
      'Kubernetes',
      'Monitoring',
      'Logging',
      'Alerting',
      'Redis',
      'PostgreSQL'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DataLunatic69/FallbackSystem',
      },
      {
        name: 'Architecture Docs',
        url: '#',
      },
    ],
  },
];

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Aman Singh",
  parameters: z.object({}),
  execute: async () => {
    const projectsList = PROJECT_CONTENT.map(project => 
      `**${project.title}** (${project.date})
${project.description}

**Technologies:** ${project.techStack.join(', ')}

**Links:** ${project.links.map(link => `[${link.name}](${link.url})`).join(' | ')}
`
    ).join('\n\n---\n\n');

    return `Here are all my projects:

${projectsList}

Feel free to ask me more about any specific project! I can dive deeper into the technical details, challenges faced, or what I learned from each one.`;
  },
});