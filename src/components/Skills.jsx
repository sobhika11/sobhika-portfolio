import { motion } from 'framer-motion';
import { Database, Server, Layout, Wrench, Trophy } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ['Node.js', 'Express.js', 'Java', 'Python', 'C', 'REST API', 'JWT', 'OAuth'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ['MongoDB', 'SQL', 'Neo4j'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ['Git', 'GitHub', 'VS Code', 'Maven', 'Postman'],
  },
  {
    title: 'Core Fundamentals',
    icon: <Trophy className="w-6 h-6 text-primary" />,
    skills: ['Data Structures and Algorithms', 'Problem Solving', 'OOPS', 'Operating system', 'Computer Networks', 'DBMS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-main"
        >
          Skills
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="minimal-card p-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-surface rounded-lg border border-border-main">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-main">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-surface border border-border-main rounded-full text-text-muted hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
