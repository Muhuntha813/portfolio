"use client";

import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neon-cyan font-bold tracking-widest mb-4 uppercase"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight text-foreground"
          >
            Muhuntha <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">Vel</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-lg"
          >
            Crafting ultra-modern web experiences with cutting-edge technologies. 
            Specializing in PERN Stack and immersive UI/UX.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-neon-cyan text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 border border-foreground/20 hover:bg-foreground/10 text-foreground font-bold rounded-full backdrop-blur-sm transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-80 h-96 md:w-96 md:h-[30rem] glass-card rounded-2xl p-2 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,243,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-magenta/20 rounded-2xl z-0"></div>
            <div className="relative w-full h-full bg-black/50 rounded-xl overflow-hidden z-10">
               {/* Placeholder Image - User will replace source */}
               {/* <Image src="/assets/me/photo.jpg" alt="Muhuntha Vel" fill className="object-cover" /> */}
               <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-900">
                  <span className="text-center p-4">Add photo to<br/>/public/assets/me/</span>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-cyan/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-neon-magenta/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
}
