import { motion } from 'framer-motion';
import { Award, Code2, Users, Timer } from 'lucide-react';

const activities = [
  {
    title: 'Top 15 - College Hackathon',
    description: 'Secured a Top 15 position in a highly competitive college-level coding hackathon out of numerous participating teams.',
    icon: <Award className="w-6 h-6 text-primary" />
  },
  {
    title: '36-Hour Project Hackathon',
    description: 'Participated in an intensive 36-hour hackathon where I built a full-stack Fitness Tracker web application from scratch.',
    icon: <Timer className="w-6 h-6 text-primary" />
  },
  {
    title: 'MOC & College Events',
    description: 'Actively took part in MOC (Mock Technical/Coding) activities and various college-level technical events to sharpen problem-solving skills.',
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    title: 'Hackathons & Coding Competitions',
    description: 'Regular participant in coding events, continually seeking out challenges to apply algorithmic knowledge in real-world scenarios.',
    icon: <Code2 className="w-6 h-6 text-primary" />
  }
];

export default function Extracurricular() {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-main"
        >
          Hackathons & Events
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="minimal-card p-6 flex items-start gap-4"
          >
            <div className="p-3 bg-background rounded-lg border border-border-main shrink-0">
              {activity.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main mb-2">{activity.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
