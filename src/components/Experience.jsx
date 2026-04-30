import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Palette, Zap } from 'lucide-react';

const roadmap = [
  {
    phase: '2023 — 2026',
    title: 'PRESENT LEARNING & DEVELOPMENT',
    focus: 'SECURE WEB • CYBERSECURITY • DESIGN',
    details: 'Currently pursuing a Bachelor\'s degree while deep-diving into both development and security. Specialized in advanced Frontend (React, Next.js, Firebase) and secure Backend (PHP) architectures.',
    extra: 'Actively mastering Ethical Hacking, UI/UX Design, Graphic Design, and professional Video Editing to build secure, high-fidelity digital solutions.',
    icon: <Zap size={20} className="w-4 h-4 md:w-5 md:h-5" />,
    bgColor: 'bg-[#F5FF46]', 
    isFolder: true 
  },
  {
    phase: 'SPECIALIZATION',
    title: 'CYBERSECURITY & ETHICAL HACKING',
    focus: 'PENETRATION TESTING & NETWORK SECURITY',
    details: 'Focused on identifying vulnerabilities and implementing defense-in-depth strategies. Learning core methodologies of ethical hacking to build attack-proof, resilient applications.',
    icon: <ShieldAlert size={20} className="w-4 h-4 md:w-5 md:h-5" />,
    bgColor: 'bg-white',
    isFolder: false
  },
  {
    phase: 'CREATIVE STACK',
    title: 'DESIGN & MULTIMEDIA PRODUCTION',
    focus: 'UI/UX • GRAPHICS • VIDEO EDITING',
    details: 'Bridging the gap between code and creativity. I create aesthetic user interfaces and professional video content, utilizing modern design systems and production workflows.',
    icon: <Palette size={20} className="w-4 h-4 md:w-5 md:h-5" />,
    bgColor: 'bg-white',
    isFolder: false
  }
];

export default function Experience() {
  // Common style object to force black text regardless of global CSS
  const forceBlack = { color: '#111111', opacity: 1 };

  return (
    // Matched container width and padding with the rest of your app
    <section id="experience" className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24 z-10">
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between border-b-[3px] border-[#111] pb-4 mb-10 md:mb-16"
      >
        {/* Dynamic typography scaling for the title */}
        <h2 style={forceBlack} className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter !text-[#111] leading-none">
          THE<br />EVOLUTION
        </h2>
        <div className="flex gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#111] rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#111] rounded-full"></div>
        </div>
      </motion.div>

      {/* TIMELINE WRAPPER */}
      <div className="relative border-l-[3px] border-[#111] ml-3 md:ml-6 space-y-12 md:space-y-16 pb-8">
        
        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8 md:pl-12"
          >
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[11px] md:-left-[14px] top-6 md:top-8 w-5 h-5 md:w-6 md:h-6 bg-[#F5FF46] border-[2.5px] md:border-[3px] border-[#111] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#111] z-20">
               <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#111] rounded-full"></div>
            </div>

            <div className="relative group">
              
              {/* Folder Tab */}
              {item.isFolder && (
                <div className="absolute -top-5 md:-top-6 left-0 h-6 md:h-7 w-28 md:w-36 bg-[#111] rounded-t-xl md:rounded-t-2xl flex items-center justify-center border-x-[2.5px] md:border-x-[3px] border-t-[2.5px] md:border-t-[3px] border-[#111]">
                   <span className="text-white font-black text-[9px] md:text-[10px] tracking-[0.2em] pt-0.5">
                     {item.phase}
                   </span>
                </div>
              )}

              {/* MAIN CARD */}
              <div className={`relative w-full border-[2.5px] md:border-[3px] border-[#111] p-5 sm:p-8 md:p-10 lg:p-12 ${item.bgColor} rounded-b-2xl md:rounded-b-[2rem] ${!item.isFolder ? 'rounded-t-2xl md:rounded-t-[2rem]' : 'rounded-tr-2xl md:rounded-tr-[2rem]'} shadow-[6px_6px_0px_0px_#111] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col`}>
                
                {/* Header Info */}
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  {!item.isFolder && (
                    <span className="bg-[#111] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                      {item.phase}
                    </span>
                  )}
                  <div className={`w-8 h-8 md:w-10 md:h-10 bg-white border-[2px] md:border-[3px] border-[#111] rounded-full flex items-center justify-center ${item.isFolder ? 'ml-auto' : ''} shadow-[2px_2px_0px_0px_#111] md:shadow-[3px_3px_0px_0px_#111] !text-[#111]`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title - Forced Black */}
                <h3 style={forceBlack} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase !text-[#111] leading-[1.1] md:leading-[1.1] mb-3 md:mb-4 tracking-tight">
                  {item.title}
                </h3>
                
                {/* Focus Area - Forced Black (Added inline-block for proper mobile text wrapping) */}
                <div className="mb-5 md:mb-8">
                  <span style={forceBlack} className="inline-block text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] !text-[#111] bg-black/5 border-[1.5px] border-[#111] px-2 md:px-3 py-1 rounded leading-tight">
                    {item.focus}
                  </span>
                </div>
                
                {/* Description Body - Forced Black */}
                <div className="space-y-4 md:space-y-6">
                  <p style={forceBlack} className="!text-[#111] text-[13px] sm:text-sm md:text-base lg:text-lg font-bold leading-relaxed">
                    {item.details}
                  </p>
                  
                  {item.extra && (
                    <p style={forceBlack} className="!text-[#111] text-[13px] sm:text-sm md:text-base lg:text-lg font-black border-t-[2px] border-[#111] pt-4 md:pt-6 italic">
                      {item.extra}
                    </p>
                  )}
                </div>

              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}