import { motion } from 'framer-motion';
import { Award, Code, Star, Trophy } from 'lucide-react';

const stats = [
  {
    platform: 'LeetCode',
    icon: <Code className="w-8 h-8 text-[#FFA116]" />,
    metrics: [
      { label: 'Max Rating', value: '1839' },
      { label: 'Global Rank', value: 'Top 6.36%' },
      { label: 'Problems Solved', value: '370+' },
      { label: 'Badges', value: '4' }
    ]
  },
  {
    platform: 'CodeChef',
    icon: <Star className="w-8 h-8 text-[#5B4638]" />,
    metrics: [
      { label: 'Max Rating', value: '1666 (3★)' },
      { label: 'Global Rank', value: '13013' },
      { label: 'Problems Solved', value: '736' },
      { label: 'Current Rating', value: '1636' }
    ]
  },
  {
    platform: 'Codeforces',
    icon: <Trophy className="w-8 h-8 text-[#1F8ACB]" />,
    metrics: [
      { label: 'Max Rating', value: '1164' },
      { label: 'Problems Solved', value: '50+' }
    ]
  },
  {
    platform: 'GeeksforGeeks',
    icon: <Award className="w-8 h-8 text-[#2F8D46]" />,
    metrics: [
      { label: 'Problems Solved', value: '119+' }
    ]
  }
];

export default function CompetitiveStats() {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-text-main"
        >
          Competitive Stats
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.platform}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="minimal-card p-6"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-border-main pb-4">
              <div className="p-3 bg-surface rounded-xl border border-border-main">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-main">{stat.platform}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stat.metrics.map((metric, i) => (
                <div key={i} className="bg-surface rounded-lg p-4 border border-border-main hover:border-border-main transition-colors">
                  <div className="text-text-muted text-xs mb-1 uppercase tracking-wider font-semibold">{metric.label}</div>
                  <div className="text-text-main font-mono text-lg font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
