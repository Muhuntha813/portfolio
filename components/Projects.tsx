"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center border-b border-white/5 py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-heading text-foreground">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden border border-white/5 dark:border-white/5 border-black/5 h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-neon-cyan transition-colors line-clamp-2">{project.title}</h3>
                    <ArrowUpRight className="text-gray-500 group-hover:text-neon-cyan transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 min-h-[4.5rem] flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-black/5 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="px-8 py-3 border border-foreground/10 text-foreground rounded-full hover:bg-foreground/5 transition-all">
             View All Projects
           </button>
        </div>
      </div>
    </section>
  );
}
