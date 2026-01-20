"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center border-b border-white/5 py-20 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="glass p-8 rounded-2xl border border-white/10 dark:border-white/10 border-black/5"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hi, I'm <span className="text-neon-cyan font-bold">Muhuntha Vel</span>, a passionate Full-Stack Developer with a knack for building ultra-modern, high-performance web applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in the <span className="text-foreground font-semibold">PERN stack</span> (PostgreSQL, Express, React, Node.js) and have a strong foundation in <span className="text-foreground font-semibold">Java, C, C++, and Python</span>. 
              My journey involves winning hackathons, building complex systems like Hostel Management tools, and creating immersive 3D web experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Currently, I am in my <span className="text-foreground font-semibold">2nd year B.Tech in CSE Core</span> at <span className="text-neon-magenta font-bold">SRMIST, Kattankulathur, Chennai</span>. I am expected to graduate in <span className="text-foreground font-semibold">May 2028</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I don't just write code; I design experiences. From pixel-perfect frontends with <span className="text-neon-magenta">Tailwind & Framer Motion</span> to robust backends with <span className="text-neon-cyan">PostgreSQL</span>, I handle it all.
            </p>
          </motion.div>

          {/* Stats / Interactive Element */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="grid grid-cols-2 gap-4"
          >
             <div className="glass p-6 rounded-xl text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                <h3 className="text-4xl font-bold text-neon-cyan mb-2 group-hover:scale-110 transition-transform">1+</h3>
                <p className="text-gray-500 dark:text-gray-400">Hackathons Won</p>
             </div>
             <div className="glass p-6 rounded-xl text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                <h3 className="text-4xl font-bold text-neon-magenta mb-2 group-hover:scale-110 transition-transform">3</h3>
                <p className="text-gray-500 dark:text-gray-400">Hackathons Participated</p>
             </div>
             <div className="glass p-6 rounded-xl text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                <h3 className="text-4xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform">4+</h3>
                <p className="text-gray-500 dark:text-gray-400">Major Projects</p>
             </div>
             <div className="glass p-6 rounded-xl text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">5+</h3>
                <p className="text-gray-500 dark:text-gray-400">Languages Spoken (Code)</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
