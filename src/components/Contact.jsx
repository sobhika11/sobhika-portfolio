import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message feature is not hooked up to a backend yet, but thanks for checking!");
  };

  return (
    <section id="contact" className="py-12">
      <div className="flex items-end justify-between border-b border-border-main pb-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-text-main"
        >
          Get In Touch
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="minimal-card p-6 flex items-start gap-4">
            <div className="p-3 bg-surface rounded-lg border border-border-main text-text-main">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-text-main font-bold mb-1">Email</h4>
              <a href="mailto:sobhika1105@gmail.com" className="text-text-muted hover:text-primary transition-colors font-medium">
                sobhika1105@gmail.com
              </a>
            </div>
          </div>
          
          <div className="minimal-card p-6 flex items-start gap-4">
            <div className="p-3 bg-surface rounded-lg border border-border-main text-text-main">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-text-main font-bold mb-1">Location</h4>
              <p className="text-text-muted font-medium">
                Coimbatore, India
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 minimal-card p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-text-main uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-surface border border-border-main rounded-lg px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-text-main uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-surface border border-border-main rounded-lg px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-text-main uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-surface border border-border-main rounded-lg px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none font-medium"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white bg-primary rounded-lg hover:bg-[#E65200] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
