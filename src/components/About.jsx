import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-4xl">
        <div className="flex items-end justify-between border-b border-border-main pb-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-main"
          >
            About Me
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-text-muted text-lg leading-relaxed"
        >
          <p>
            I'm a Computer Science and Business Systems student who loves learning by building and exploring new technologies. Currently focusing on Full-Stack Development, Data Structures & Algorithms, and Competitive Programming. Striving to become a stronger version of myself in coding, one line at a time.
          </p>
          <p>
            I enjoy solving problems through code and learning something new every day. My short-term goal is to strengthen my skills in DSA and backend development using Express and MongoDB. In the long run, I aspire to become a skilled software developer capable of creating impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
