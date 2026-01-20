"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Lock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/lib/data";
import { toast } from "sonner";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  const handleLiveLinkClick = (e: React.MouseEvent) => {
    if (project.link === "#") {
      e.preventDefault();
      toast.info("Live link will be updated soon!");
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    if (project.github === "#") {
      e.preventDefault();
      if (project.isPrivate) {
        toast.error("Source code is private (Industry Project)");
      } else {
        toast.info("Repository link will be updated soon!");
      }
    }
  };

  return (
    <article className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neon-cyan/5 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/#projects" className="inline-flex items-center text-neon-cyan hover:underline mb-8">
            <ArrowLeft className="mr-2" size={20} /> Back to Projects
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {project.tags.map(tag => (
               <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                 {tag}
               </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
             <div className="glass p-8 rounded-2xl border border-white/10">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <Layers className="text-neon-cyan" /> Overview
               </h2>
               <div className="prose prose-invert max-w-none text-gray-400 whitespace-pre-line leading-relaxed">
                 {project.fullDescription}
               </div>
             </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="space-y-4">
                {project.techStack.map((stack) => (
                  <div key={stack.name}>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stack.name}</div>
                    <div className="text-foreground font-medium">{stack.tools}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <a 
                 href={project.link} 
                 onClick={handleLiveLinkClick}
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className={`flex items-center justify-center gap-2 bg-neon-cyan text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all cursor-pointer`}
               >
                 <ExternalLink size={20} /> Live Demo
               </a>
               
               <a 
                 href={project.github} 
                 onClick={handleGithubClick}
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className={`flex items-center justify-center gap-2 bg-white/10 border border-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/20 transition-all cursor-pointer`}
               >
                 {project.isPrivate ? <Lock size={20} /> : <Github size={20} />}
                 {project.isPrivate ? "Private Repo" : "View Code"}
               </a>
            </div>
          </div>

        </div>
      </section>
    </article>
  );
}
