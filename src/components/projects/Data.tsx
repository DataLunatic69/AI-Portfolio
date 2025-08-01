import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
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
    images: [
      {
        src: '/Agentic SDLC.jpeg',
        alt: 'Agentic SDLC System Overview',
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
        name: 'Documentation',
        url: '#',
      },
    ],
    images: [
      {
        src: '/CodeAnalyser.png',
        alt: 'CodeAnalyser Interface',
      },
    ],
  },
  {
    title: 'Image Quantization',
    description:
      'A sophisticated image processing application that implements advanced quantization algorithms to reduce image file sizes while maintaining visual quality. This tool is particularly useful for web optimization and storage efficiency.',
    techStack: [
      'Python',
      'OpenCV',
      'NumPy',
      'Pillow',
      'Streamlit',
      'Image Processing',
      'K-means Clustering',
      'Color Theory'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DataLunatic69/Image-Quantization',
      },
      {
        name: 'Live Demo',
        url: '#',
      },
    ],
    images: [
      {
        src: '/image quantization.jpeg',
        alt: 'Image Quantization Results',
      },
    ],
  },
  {
    title: 'MultiModal PDF',
    description:
      'A cutting-edge PDF processing system that combines multiple AI modalities to extract, analyze, and understand content from PDF documents. The system can handle text, images, tables, and complex layouts with high accuracy.',
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
    images: [
      {
        src: '/MultiModalPDF.png',
        alt: 'MultiModal PDF Processing Interface',
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
    images: [
      {
        src: '/FallbackSystem.png',
        alt: 'Fallback System Architecture',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links
              .filter(link => link.name === 'GitHub')
              .map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black text-white flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-gray-800"
                >
                  <span className="font-light capitalize">{link.name}</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'AI Development',
    title: 'Agentic SDLC',
    src: '/Agentic SDLC.jpeg',
    content: <ProjectContent project={{ title: 'Agentic SDLC' }} />,
  },
  {
    category: 'Code Analysis',
    title: 'CodeAnalyser',
    src: '/CodeAnalyser.png',
    content: <ProjectContent project={{ title: 'CodeAnalyser' }} />,
  },
  {
    category: 'Image Processing',
    title: 'Image Quantization',
    src: '/image quantization.jpeg',
    content: <ProjectContent project={{ title: 'Image Quantization' }} />,
  },
  {
    category: 'Document AI',
    title: 'MultiModal PDF',
    src: '/MultiModalPDF.png',
    content: <ProjectContent project={{ title: 'MultiModal PDF' }} />,
  },
  {
    category: 'System Architecture',
    title: 'FallbackSystem',
    src: '/FallbackSystem.png',
    content: <ProjectContent project={{ title: 'FallbackSystem' }} />,
  },
];
