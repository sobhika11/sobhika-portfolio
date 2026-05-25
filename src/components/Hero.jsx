import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-28 pb-0">
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-background relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-text-main tracking-tight leading-[1.1]">
              I'm Sobhika <span className="inline-block animate-wave origin-bottom-right">👋</span><br />
              <span className="text-xl md:text-2xl text-text-muted mt-4 block font-medium">DSA Enthusiast | Full Stack Developer</span>
            </h1>
            
            <div className="pt-8">
              <a 
                href="/resume.pdf" 
                download="Sobhika_Resume.pdf"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primaryHover transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full bg-background relative overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-8"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex items-center justify-center border-4 border-primary/30 shadow-2xl overflow-hidden relative">
               <img src="/profile.jpg" alt="Sobhika" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Row */}
      <div className="container mx-auto px-6 py-8 border-b border-border-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-primary text-primary rounded-full">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:sobhika1105@gmail.com" className="text-sm font-medium text-text-main hover:text-primary transition-colors">sobhika1105@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/sobhika11" icon={<GithubIcon />} />
            <SocialLink href="http://www.linkedin.com/in/sobhika-p-m-9316192a5" icon={<LinkedinIcon />} />
            <SocialLink href="https://codolio.com/profile/sobhika" icon={<Terminal className="w-5 h-5" />} />
          </div>
          
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-surface border border-border-main text-text-main hover:bg-primary hover:border-primaryHover hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
    </svg>
  );
}
