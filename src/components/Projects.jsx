import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, FolderGit2, Cpu, Radio } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'PassVault Manager',
    description: 'A military-grade password vault with AES-256 encryption logic and secure database bridging.',
    tech: ['PHP', 'MySQL', 'AES_256', 'JS'],
    bgColor: 'bg-[#F5FF46]',
    github: 'https://github.com/rajrathod07', 
    demo: 'https://passvault.gt.tc'      
  },
  {
    id: '02',
    title: 'Royal Enfield Rent',
    description: 'Full-stack rental architecture for Royal Enfield motorcycles. Includes booking and management.',
    tech: ['PHP', 'MySQL', 'JS', 'Tailwind'],
    bgColor: 'bg-white',
    github: 'https://github.com/rajrathod07/Royal-Enfield-Rent-Project',
    demo: 'https://rerent.page.gd'
  },
  {
    id: '03',
    title: 'NetFlow Hub',
    description: 'An educational hub created to simplify complex networking protocols and cyber-security fundamentals.',
    tech: ['Networking', 'Cyber_Logic', 'HTML/CSS'],
    bgColor: 'bg-white',
    github: 'https://github.com/rajrathod07/netflow',
    demo: 'https://rajrathod07.github.io/netflow'
  },
  {
    id: '04',
    title: 'Internship Portfolio',
    description: 'A repository of responsive UI components and state architectures developed in-studio.',
    tech: ['React', 'UI_Logic', 'Framer', 'Auth'],
    bgColor: 'bg-[#F5FF46]',
    github: 'https://github.com/rajrathod07/Internship-Tasks',
    demo: 'https://rajrathod07.github.io/Internship-Tasks/'
  }
];

export default function Projects() {
  return (
    <section id="work" className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24 select-none">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-[3px] border-[#111] pb-6 mb-12 gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
             <div className="bg-[#FF4646] text-white px-2.5 py-1 rounded border-2 border-[#111] shadow-[2px_2px_0px_#111] flex items-center gap-2">
                <Radio size={12} className="animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest">Live_Archive</span>
             </div>
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#111]/40">Log_Unit_03</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-none">
            Selected_Work
          </h2>
        </div>

        <div className="flex items-center gap-3 font-mono text-[9px] font-black border-[2px] border-[#111] px-4 py-2 rounded-xl bg-[#111] text-white shadow-[4px_4px_0px_#F5FF46]">
          <Cpu size={14} className="text-[#F5FF46] animate-spin [animation-duration:4s]" />
          OS_CORE: ACTIVE
        </div>
      </div>

      {/* COMPACT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative w-full border-[3px] border-[#111] ${project.bgColor} rounded-[2rem] shadow-[8px_8px_0px_0px_#111] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300 flex flex-col overflow-hidden`}
          >
            {/* TOP BAR */}
            <div className="border-b-[2px] border-[#111] px-6 py-3 flex items-center justify-between bg-white/40 group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
              <div className="flex items-center gap-2">
                <FolderGit2 size={16} />
                <span className="font-mono text-[9px] font-black uppercase tracking-widest">Archive_0{project.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_6px_#00FF41] animate-pulse"></div>
                <span className="text-[8px] font-black uppercase opacity-40 group-hover:opacity-100">Status: Secure</span>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 text-[#111] tracking-tighter leading-none group-hover:tracking-tight transition-all">
                {project.title}
              </h3>
              
              <p className="text-[#000000] font-bold text-xs md:text-sm mb-8 leading-relaxed max-w-[95%]">
                {project.description}
              </p>

              {/* TECH CHIPS */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map(t => (
                  <span key={t} className="bg-white border-[1.5px] border-[#111] px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#111]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTON FOOTER */}
            <div className="px-6 md:px-8 pb-8 flex gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-grow bg-[#111] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest hover:bg-[#F5FF46] hover:text-[#111] transition-all border-[2px] border-[#111] shadow-[4px_4px_0px_0px_#111] hover:shadow-none active:translate-y-1"
              >
                <Code2 size={14} /> Repository
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 bg-white border-[2px] border-[#111] rounded-xl flex flex-col items-center justify-center hover:bg-[#111] hover:text-white transition-all group/btn shadow-[4px_4px_0px_0px_#111] hover:shadow-none active:translate-y-1"
              >
                <span className="text-[8px] font-black uppercase mb-0.5">Live</span>
                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* SCHEMATIC OVERLAY */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111_1.2px,transparent_1.2px)] [background-size:20px_20px]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}