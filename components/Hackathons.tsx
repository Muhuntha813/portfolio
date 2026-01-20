"use client";

import { motion } from "framer-motion";
import { Award, Code, BookOpen, CheckCircle } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";

const certificates = [
  { title: "Certified React Developer", issuer: "Udemy / Coursera" },
  { title: "Certified JavaScript Developer", issuer: "Udemy / Coursera" },
  { title: "Certified CSS Developer", issuer: "Udemy / Coursera" },
  { title: "Certified HTML & CSS Developer", issuer: "Udemy / Coursera" },
];

export default function Hackathons() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center border-b border-white/5 py-20 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        
        {/* Left Side: Text Content */}
        <div className="z-10 order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 font-heading text-foreground"
          >
            Hackathons & <br /> Achievements
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-lg"
          >
            Competing in hackathons pushes me to innovate under pressure. 
            I love the thrill of turning an abstract idea into a working prototype in 24 hours.
          </motion.p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {certificates.map((cert, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="glass p-6 rounded-xl group hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer border border-white/10 dark:border-white/10 border-black/5"
               >
                 <div className="w-12 h-12 bg-neon-magenta/10 rounded-lg flex items-center justify-center mb-4 text-neon-magenta group-hover:scale-110 transition-transform">
                   <CheckCircle size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{cert.title}</h3>
                 <p className="text-xs text-gray-500">{cert.issuer}</p>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Right Side: Card Swap Animation */}
        <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
           <div style={{ height: '100%', width: '100%', position: 'relative' }}>
              <CardSwap
                cardDistance={40}
                verticalDistance={60}
                delay={4000}
                pauseOnHover={true}
                width={320}
                height={420}
              >
                {/* Winner Card */}
                <Card customClass="p-8 flex flex-col justify-center bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="absolute top-6 right-6 opacity-20 text-neon-cyan">
                    <Award size={80} />
                  </div>
                  <span className="bg-neon-cyan text-black px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block w-fit">Winner - 1st Prize</span>
                  <h3 className="text-2xl font-bold text-white mb-4">IoT & AI at the Edge</h3>
                  <p className="text-neon-cyan text-sm mb-4 font-bold">SRMIST | Oct 2025</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Won First Prize in the Project Competition conducted during the Five Days Short Term Training Programme.
                  </p>
                </Card>

                {/* Participant Card */}
                <Card customClass="p-8 flex flex-col justify-center bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="absolute top-6 right-6 opacity-10 text-white">
                    <Code size={80} />
                  </div>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block w-fit">Participant</span>
                  <h3 className="text-2xl font-bold text-white mb-4">Hackathon Experience</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Active participant in 3+ major hackathons. Collaborated with diverse teams to build rapid prototypes under tight deadlines.
                  </p>
                </Card>

                {/* Education Card */}
                 <Card customClass="p-8 flex flex-col justify-center bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="absolute top-6 right-6 opacity-10 text-neon-magenta">
                    <BookOpen size={80} />
                  </div>
                  <span className="bg-neon-magenta text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block w-fit">Education</span>
                  <h3 className="text-2xl font-bold text-white mb-4">B.Tech CSE Core</h3>
                  <p className="text-neon-magenta text-sm mb-4 font-bold">SRMIST, Chennai</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Currently in 2nd Year. Focus on Full Stack Development, Data Structures, and Algorithms.
                    <br/><br/>
                    Expected Graduation: May 2028
                  </p>
                </Card>

              </CardSwap>
            </div>
        </div>

      </div>
    </section>
  );
}
