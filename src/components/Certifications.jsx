import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Programming through Java',
    issuer: 'NPTEL SWAYAM',
    score: '80% (Silver)',
    link: 'https://drive.google.com/file/d/12FUoUK0FLlrddFhMVQeQqXLJu2JetgnS/view'
  },
  {
    title: 'Cloud computing',
    issuer: 'NPTEL SWAYAM',
    score: '75% (Silver)',
    link: 'https://drive.google.com/file/d/1PDM0jIFDG1BCqfnHlgKXRWp7K3FVlU6q/view?usp=drive_link'
  },
  {
    title: 'Programming in C',
    issuer: 'NPTEL SWAYAM',
    score: '40%',
    link: 'https://drive.google.com/file/d/15G36cW8Uw06e7fSNdAnH9RWElwS4-kT3/view'
  },
  {
    title: 'Java Foundation & Data Structures',
    issuer: 'Infosys Springboard',
    link: '#'
  },
  {
    title: 'Algorithms for Searching, Sorting, and Indexing',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/1vyMLbSSRUCesK0HeN266Jxqk9secNsEH/view'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-main"
        >
          Certifications
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="minimal-card p-6 flex flex-col group hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-surface rounded-lg border border-border-main text-primary">
                <Award className="w-6 h-6" />
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-text-main mb-3 leading-tight group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-main">
              <span className="text-sm font-medium text-text-muted">{cert.issuer}</span>
              {cert.score && (
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-sm">
                  {cert.score}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
