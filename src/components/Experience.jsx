import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'LearnLogicify Technologies LLP, Coimbatore',
    date: '1 Month',
    description: 'Developed responsive web interfaces using HTML, CSS, JavaScript, Bootstrap, and React, improving UI consistency and mobile performance. Additionally, explored and implemented essential backend concepts.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-main"
        >
          Internship
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="minimal-card p-8 md:flex items-start justify-between gap-8 group"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="text-primary font-bold text-lg">{exp.company}</div>
                <div className="flex items-center gap-2 text-text-muted text-sm mt-2 font-medium">
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>
              </div>

              <div className="md:w-2/3 md:border-l md:border-border-main md:pl-8">
                <h3 className="text-2xl font-bold text-text-main mb-3">{exp.role}</h3>
                <p className="text-text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
