import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Palette, Zap, GraduationCap } from 'lucide-react';

const roadmap = [
  {
    phase: 'PRESENT',
    title: 'M.SC CYBER SECURITY (CURRENT)',
    focus: 'NETWORK DEFENSE • SECURE ARCHITECTURES',
    details: 'Currently advancing my expertise with a Master\'s in Cyber Security. Deep-diving into network defense, vulnerability assessment, and secure backend (PHP) architectures.',
    icon: <Zap size={20} />,
    bgColor: 'bg-[#F5FF46]', 
    isFolder: true 
  },
  {
    phase: 'COMPLETED',
    title: 'BCA (BACHELOR OF COMPUTER APPLICATIONS)',
    focus: 'SOFTWARE ENGINEERING • FRONTEND',
    details: 'Successfully graduated with a comprehensive degree in computer applications. Built a strong foundation in computer science, software lifecycles, and modern web development.',
    icon: <GraduationCap size={20} />,
    bgColor: 'bg-white',
    isFolder: false
  },
  {
    phase: 'SPECIALIZATION',
    title: 'CYBERSECURITY & ETHICAL HACKING',
    focus: 'PENETRATION TESTING & NETWORK SECURITY',
    details: 'Focused on identifying vulnerabilities and implementing defense-in-depth strategies. Learning core methodologies of ethical hacking to build attack-proof, resilient applications.',
    icon: <ShieldAlert size={20} />,
    bgColor: 'bg-white',
    isFolder: false
  },
  {
    phase: 'CREATIVE STACK',
    title: 'DESIGN & MULTIMEDIA PRODUCTION',
    focus: 'UI/UX • GRAPHICS • VIDEO EDITING',
    details: 'Bridging the gap between code and creativity. I create aesthetic user interfaces and professional video content, utilizing modern design systems and production workflows.',
    icon: <Palette size={20} />,
    bgColor: 'bg-white',
    isFolder: false
  }
];

export default function Experience() {
  const forceBlack = { color: '#111111', opacity: 1 };

  return (
    <section id="experience" className="relative w-full max-w-[1300px] mx-auto px-5 md:px-12 py-16 md:py-24 z-10">
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between border-b-[3px] border-[#111] pb-5 mb-12 md:mb-16"
      >
        <h2 style={forceBlack} className="text-4xl md:text-6xl font-black uppercase tracking-tighter !text-[#111] leading-none">
          THE<br />EVOLUTION
        </h2>
        <div className="flex gap-2 mb-2 md:mb-3">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#111] rounded-full"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#111] rounded-full"></div>
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
            className="relative pl-6 md:pl-12"
          >
            
            {/* TIMELINE NODE ICON */}
            <div className="absolute -left-[11.5px] top-6 md:top-8 w-5 h-5 md:w-6 md:h-6 bg-[#F5FF46] border-[2.5px] border-[#111] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#111] z-20">
               <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#111] rounded-full"></div>
            </div>

            <div className="relative group pt-4 md:pt-0">
              
              {/* FOLDER TAB */}
              {item.isFolder && (
                <div className="absolute -top-5 md:-top-6 left-0 h-6 md:h-7 w-28 md:w-40 bg-[#111] rounded-t-lg md:rounded-t-xl flex items-center justify-center border-x-[2.5px] border-t-[2.5px] border-[#111]">
                   <span className="text-white font-black text-[9px] md:text-xs tracking-[0.2em]">
                     {item.phase}
                   </span>
                </div>
              )}

              {/* MAIN CARD */}
              <div className={`relative w-full border-[2.5px] border-[#111] p-5 md:p-8 ${item.bgColor} rounded-b-xl md:rounded-b-2xl ${!item.isFolder ? 'rounded-t-xl md:rounded-t-2xl' : 'rounded-tr-xl md:rounded-tr-2xl'} shadow-[5px_5px_0px_0px_#111] md:shadow-[8px_8px_0px_0px_#111] hover:shadow-[2px_2px_0px_0px_#111] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col`}>
                
                {/* Header Info */}
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  {!item.isFolder && (
                    <span className="bg-[#111] text-white px-3 py-1.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest">
                      {item.phase}
                    </span>
                  )}
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-white border-[2px] border-[#111] rounded-full flex items-center justify-center ${item.isFolder ? 'ml-auto' : ''} shadow-[2px_2px_0px_0px_#111] !text-[#111]`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 style={forceBlack} className="text-xl md:text-3xl font-black uppercase !text-[#111] leading-[1.1] mb-2 md:mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                {/* Focus Area */}
                <div className="mb-4 md:mb-6">
                  <span style={forceBlack} className="text-[10px] md:text-xs font-black uppercase tracking-[0.05em] !text-[#111] bg-black/5 border-[1.5px] border-[#111] px-2.5 py-1 rounded inline-block">
                    {item.focus}
                  </span>
                </div>
                
                {/* Description Body */}
                <div className="space-y-3 md:space-y-4">
                  <p style={forceBlack} className="!text-[#111] text-sm md:text-base font-bold leading-relaxed">
                    {item.details}
                  </p>
                  
                  {item.extra && (
                    <p style={forceBlack} className="!text-[#111] text-sm md:text-base font-black border-t-[2px] border-[#111] pt-3 md:pt-4 mt-2 italic">
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