"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = {
  Frontend: [
    { name: "React" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Three.js" },
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Express" },
  ],
  Database: [
    { name: "PostgreSQL" },
  ],
  Languages: [
    { name: "Java" },
    { name: "JavaScript" },
    { name: "JavaFX" },
    { name: "C" },
    { name: "C++" },
    { name: "Python" },
  ],
  Tools: [
    { name: "Git & GitHub" },
    { name: "VS Code" },
    { name: "IntelliJ IDEA" },
    { name: "Postman" },
    { name: "Render" },
    { name: "Supabase" },
    { name: "Firebase" },
  ]
};

type Category = keyof typeof skills;

function SkillCard({ name, index }: { name: string; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-gray-900/5 px-8 py-16 shadow-2xl overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 243, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Glass Layer */}
      <div className="absolute inset-0 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/10 dark:group-hover:bg-black/40 group-hover:ring-neon-cyan/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-neon-cyan transition-colors duration-300">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center border-b border-white/5 py-20 relative bg-background">
       <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-heading text-foreground">Technical Skills</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                activeTab === tab 
                  ? "bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,243,255,0.4)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills[activeTab].map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
