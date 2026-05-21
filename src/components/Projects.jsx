import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Graph-Based Detection System',
    description: 'Built a graph-based phishing detection system using Neo4j and FastAPI to identify malicious URL relationships, suspicious hosting patterns, and coordinated phishing activity.',
    tech: ['Neo4j', 'FastAPI', 'MERN Stack', 'Python'],
    year: '2026',
    github: 'https://github.com/sobhika11/Phising-detection-System',
    demo: '#',
  },
  {
    title: 'Petcare Website',
    description: 'Service-based platform designed to make pet parenting easier. Allows users to book track vaccination of pets, appointments with veterinary hospitals, hire sitters, and schedule grooming.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    year: '2024',
    github: 'https://github.com/sobhika11/petcare',
    demo: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Full-stack application that enables users to log workouts, monitor progress, track streaks, and generate reports. Provides personalized recommendations based on BMI and integrates Groq AI.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI'],
    year: '2025',
    github: 'https://github.com/sobhika11/Fitness-Tracker',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'A comprehensive application to track personal expenses, manage budgets, and visualize spending habits over time.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    year: '2025',
    github: 'https://github.com/sobhika11/Expense-Tracker',
    demo: '#',
  },
  {
    title: 'Todo App',
    description: 'A clean and responsive task management application with features for creating, updating, and organizing daily todos.',
    tech: ['React', 'CSS', 'JavaScript'],
    year: '2024',
    github: 'https://github.com/sobhika11/TODOAPP-',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-text-main"
        >
          Projects
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="minimal-card p-8 flex flex-col h-full group relative"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <FolderGit2 className="w-10 h-10 text-primary" />
              <div className="flex gap-4">
                <a href={project.github} className="text-text-muted hover:text-primary hover:scale-110 transition-all">
                  <GithubIcon />
                </a>
                <a href={project.demo} className="text-text-muted hover:text-primary hover:scale-110 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold text-primary">{project.year}</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-semibold text-text-main bg-surfaceHover px-2.5 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}
