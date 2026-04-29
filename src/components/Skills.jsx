import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Terminal, Cpu, Database, Activity } from 'lucide-react';

const skillCategories = [
  {
    title: 'Development',
    icon: <Code2 size={18} />,
    color: 'bg-[#F5FF46]', 
    skills: [
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 25 },
      { name: 'PHP / Backend', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Python', level: 30 },
    ],
  },
  {
    title: 'Data & Security',
    icon: <ShieldCheck size={18} />,
    color: 'bg-white',
    skills: [
      { name: 'MySQL Databases', level: 85 },
      { name: 'Firebase', level: 25 },
      { name: 'Cybersecurity', level: 75 },
      { name: 'Secure Coding', level: 70 },
    ],
  },
  {
    title: 'Tools & Logic',
    icon: <Terminal size={18} />,
    color: 'bg-[#EBE9E1]',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Linux Terminal', level: 80 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Debugging', level: 80 },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1300px] mx-auto px-6 md:px-10 py-16 md:py-24 select-none">
      
      {/* SECTION HEADER - Schematic Style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-[3px] border-[#111] pb-6 mb-10 gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#111]/30 block mb-2">Module_02 // Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-none">
            Tech_Arsenal
          </h2>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] font-black bg-[#111] text-white px-4 py-2 rounded-lg">
          <Activity size={14} className="text-[#F5FF46] animate-pulse" />
          SYSTEM_STATUS: OPTIMIZED
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative border-[3px] border-[#111] ${category.color} rounded-[1.5rem] shadow-[8px_8px_0px_0px_#111] flex flex-col overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300`}
          >
            {/* CARD TOP BAR */}
            <div className="border-b-[2px] border-[#111] px-6 py-3 flex items-center justify-between bg-[#111]/5">
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-xs font-black uppercase tracking-widest text-[#111]">
                  {category.title}
                </h3>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full border border-[#111]"></div>
                <div className="w-2 h-2 rounded-full bg-[#111]"></div>
              </div>
            </div>

            {/* SKILLS LIST */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#111]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#111] bg-white border border-[#111] px-1.5 rounded">
                      {skill.level}%
                    </span>
                  </div>

                  {/* SEGMENTED PROGRESS BAR - Custom Digital Look */}
                  <div className="flex gap-1 h-2.5">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ backgroundColor: "#EBE9E1" }}
                        whileInView={{ 
                          backgroundColor: i * 10 < skill.level ? "#111" : "#EBE9E1" 
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.05), duration: 0.2 }}
                        className="flex-1 border-[1px] border-[#111]/20 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* DECORATIVE FOOTER */}
            <div className="mt-auto p-4 border-t border-[#111]/5 opacity-20 group-hover:opacity-100 transition-opacity flex justify-between items-center pointer-events-none">
              <span className="text-[8px] font-black font-mono">HASH_AUTH: 0x{index}RR</span>
              <Cpu size={12} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* BACKGROUND DECORATION - Floating Text */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -rotate-90 pointer-events-none opacity-[0.03] select-none hidden lg:block">
        <span className="text-[150px] font-black uppercase">Capabilities</span>
      </div>
    </section>
  );
}