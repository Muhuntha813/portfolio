"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact from Portfolio* %0A%0A*Name:* ${formData.name} %0A*Email:* ${formData.email} %0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/917904447870?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="min-h-[80vh] w-full flex items-center justify-center border-t border-white/5 py-20 relative overflow-hidden bg-background">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-foreground">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-neon-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold">Email Me</h4>
                  <a href="mailto:muhuntha.businessdesk@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan transition-colors">muhuntha.businessdesk@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-neon-cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold">WhatsApp / Call</h4>
                  <a href="https://wa.me/917904447870" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-neon-cyan transition-colors">+91 7904447870</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border border-black/5 dark:border-white/5">
            <div>
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-neon-cyan transition-colors" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-neon-cyan transition-colors" 
                placeholder="your@email.com" 
              />
            </div>
             <div>
              <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-neon-cyan transition-colors" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-neon-cyan text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2">
              Send via WhatsApp
            </button>
          </form>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Muhuntha Vel. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
