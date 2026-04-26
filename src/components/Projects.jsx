import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, FolderGit2 } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'PassVault Manager',
    description: 'A secure password management web application featuring user authentication and a clean, user-friendly interface for database storage.',
    tech: ['PHP', 'MySQL', 'Secure Coding', 'JS'],
    bgColor: 'bg-[#F5FF46]',
    github: 'https://github.com/rajrathod07', // ADD YOUR ACTUAL LINK HERE
    demo: 'https://passvault.gt.tc'      // ADD YOUR ACTUAL LINK HERE
  },
  {
    id: '02',
    title: 'Royal Enfield Bike Rent',
    description: 'Developed a full-featured bike rental platform for Royal Enfield motorcycles. Includes user registration, booking systems, and rental management.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    bgColor: 'bg-white',
    github: 'https://github.com/rajrathod07/Royal-Enfield-Rent-Project',
    demo: 'https://rerent.page.gd'
  },
  {
    id: '03',
    title: 'NetFlow Learning Hub',
    description: 'An educational platform created while studying networking. It simplifies complex cyber topics and network protocols for beginners.',
    tech: ['Networking', 'Cyber Fundamentals', 'HTML/CSS'],
    bgColor: 'bg-white',
    github: 'https://github.com/rajrathod07/netflow',
    demo: 'https://rajrathod07.github.io/netflow'
  },
  {
    id: '04',
    title: 'Internship Showcase',
    description: 'A specialized project developed during my web development internship, demonstrating core UI principles and responsive architecture.',
    tech: ['Web Dev', 'UI/UX', 'JavaScript', 'Tailwind'],
    bgColor: 'bg-[#F5FF46]',
    github: 'https://github.com/rajrathod07/Internship-Portfolio-HTML-CSS-JavaScript-Tasks-Projects',
    demo: 'https://rajrathod07.github.io/Internship-Portfolio-HTML-CSS-JavaScript-Tasks-Projects/'
  }
];

export default function Projects() {
  const forceBlack = { color: '#111111', opacity: 1 };

  return (
    <section id="work" className="relative w-full max-w-[1300px] mx-auto px-6 md:px-12 py-24 z-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between border-b-[3px] border-[#111] pb-6 mb-12"
      >
        <h2 style={forceBlack} className="text-4xl md:text-6xl font-black uppercase tracking-tighter !text-[#111]">
          Featured<br />Work
        </h2>
        <div className="hidden md:flex gap-3 mb-2">
          <div className="w-5 h-5 bg-[#111] rounded-full"></div>
          <div className="w-5 h-5 bg-[#111]/20 rounded-full"></div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative w-full border-[2px] border-[#111] p-8 lg:p-10 ${project.bgColor} rounded-[32px] shadow-[6px_6px_0px_0px_#111] group hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col`}
          >
            {/* FIXED PRJ TAG: Added rounded-tr to match the card corner */}
            <div className="absolute top-[-2px] right-[-2px] bg-[#111] text-[#F5FF46] font-black text-sm px-6 py-2 rounded-bl-2xl rounded-tr-[30px] border-l-[2px] border-b-[2px] border-[#111]">
              PRJ_{project.id}
            </div>

            <FolderGit2 size={32} className="mb-6 text-[#111]" />

            <div className="flex-grow">
              <h3 style={forceBlack} className="text-2xl lg:text-3xl font-black uppercase mb-3 !text-[#111] tracking-tight leading-none">
                {project.title}
              </h3>
              <p style={forceBlack} className="!text-[#111] font-bold text-sm mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tech.map(t => (
                <span key={t} style={forceBlack} className="bg-black/5 border-[1.5px] border-[#111] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest !text-[#111]">
                  {t}
                </span>
              ))}
            </div>

            {/* Links - NOW DYNAMIC */}
            <div className="flex gap-6 border-t-[2px] border-[#111]/10 pt-6">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 font-black text-xs uppercase !text-[#111] hover:translate-x-1 transition-transform"
              >
                <GitBranch size={16} /> Code
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-black text-xs uppercase !text-[#111] hover:translate-x-1 transition-transform"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}