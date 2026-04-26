import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Development',
    color: 'bg-[#F5FF46]', 
    skills: [
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 25 },
      { name: 'PHP / Backend', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Python (Beginner)', level: 30 },
    ],
  },
  {
    title: 'Data & Security',
    color: 'bg-white',
    skills: [
      { name: 'MySQL Databases', level: 85 },
      { name: 'Firebase', level: 25 },
      { name: 'Cybersecurity Basics', level: 75 },
      { name: 'Secure Coding Basics', level: 70 },
    ],
  },
  {
    title: 'Tools & Logic',
    color: 'bg-white',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Linux Terminal', level: 80 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Debugging', level: 80 },
      { name: 'System Administration', level: 65 },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-[1300px] mx-auto px-6 md:px-12 py-24 z-10">
      
      {/* Section Header */}
      <div className="flex items-end justify-between border-b-[3px] border-[#111] pb-6 mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111]">
          Tech<br />Arsenal
        </h2>
        <div className="hidden md:flex gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#111]"></div>
          <div className="w-3 h-3 rounded-full bg-[#111]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#111]/10"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative w-full border-[2px] border-[#111] p-8 lg:p-10 ${category.color} rounded-2xl shadow-[6px_6px_0px_0px_#111] group hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col`}
          >
            <h3 className="text-xl font-black uppercase mb-8 text-[#111] tracking-tight border-b-2 border-[#111]/10 pb-2 inline-block self-start">
              {category.title}
            </h3>

            <div className="flex flex-col gap-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#111]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 bg-[#EBE9E1] border-[1.5px] border-[#111] rounded-full overflow-hidden p-[1px]">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${skill.level}%` }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }} 
                      className="h-full bg-[#111] rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
