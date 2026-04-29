import React from 'react';
import { Shield, Cpu, Code2, Globe2, Zap, Terminal, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-[1300px] mx-auto px-6 md:px-10 py-20 select-none z-0">
      
      {/* 1. SECTION HEADER */}
      <div className="relative z-[30] mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#111]/30">Module_01 // Identity</span>
          <div className="h-[1px] w-24 bg-[#111]/10"></div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#111]">
          System_Bio<span className="text-[#F5FF46]">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* 2. THE MAIN TERMINAL (Bio Narrative) */}
        <div className="relative z-10 col-span-12 lg:col-span-8 bg-[#111] border-[4px] border-[#111] rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_#F5FF46] overflow-hidden group">
          <div className="relative z-[30] flex flex-col h-full text-white">
            <div className="flex items-center gap-2 mb-8 opacity-40">
              <Terminal size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest">root@raj_rathod:~# run bio_script.sh</span>
            </div>

            <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
              My name is <span className="text-[#F5FF46]">Raj Rathod</span>. I am a motivated developer focused on building applications where 
              <span className="text-white italic"> Web Development</span> meets <span className="text-white italic">Cybersecurity</span>.
            </p>

            <div className="space-y-6 text-white/70 font-medium text-sm md:text-base leading-relaxed max-w-[650px]">
              <p>
                Currently pursuing my <span className="text-white font-black underline decoration-[#F5FF46] underline-offset-4">Bachelor of Computer Applications (BCA)</span>, 
                I operate as an eager learner and builder with a growing specialization in secure coding and backend logic. 
                My workflow is dictated by a strong foundation—learning how to build systems while understanding how to protect them.
              </p>
              <p>
                With hands-on project experience using <span className="text-white font-black">HTML, CSS, JavaScript</span> and 
                <span className="text-white font-black"> PHP/MySQL</span>, I develop applications ranging from rental platforms to secure password managers. 
                I am actively expanding my knowledge in <span className="text-[#F5FF46]">Linux, Ethical Hacking, React and Python</span> to grow into a robust security professional.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#111] bg-[#F5FF46] flex items-center justify-center shadow-lg">
                       <Shield size={16} fill="#111" className="text-[#111]" />
                    </div>
                  ))}
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">BCA_Student // 2023-2026</span>
                 <span className="text-[8px] font-bold uppercase tracking-widest text-white/30">ID: RR_PORTFOLIO_07</span>
               </div>
            </div>
          </div>

          {/* Large Background Icon */}
          <Lock size={220} className="absolute -bottom-12 -right-12 text-white/[0.03] -rotate-12 pointer-events-none" />
        </div>

        {/* 3. THE SPECS CARD (Diagnostic Stats) */}
        <div className="relative z-10 col-span-12 lg:col-span-4 bg-[#F5FF46] border-[4px] border-[#111] rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_#111] flex flex-col justify-between">
          <div className="relative z-[30]">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-[#111] mb-8 border-b-2 border-[#111] pb-4 flex items-center justify-between">
              Core_Specs <Cpu size={20} />
            </h3>
            
            <div className="space-y-7">
              {[
                { icon: <Code2 size={20}/>, label: 'Core_Stack', val: 'PHP / MySQL / JS / React' },
                { icon: <Shield size={20}/>, label: 'Focus', val: 'Cybersecurity / Frontend ' },
                { icon: <Terminal size={20}/>, label: 'Tools', val: 'Linux / Git / GitHub' },
                { icon: <Zap size={20}/>, label: 'Education', val: 'BCA (2023-2027)' }
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="bg-[#111] p-2.5 rounded-xl text-[#F5FF46] group-hover:rotate-6 transition-transform">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase text-[#111]/40 leading-none mb-1">{spec.label}</p>
                    <p className="text-sm font-black uppercase text-[#111] leading-none">{spec.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Badge */}
          <div className="relative z-[30] mt-10 p-5 bg-white border-[3px] border-[#111] rounded-2xl flex items-center justify-between shadow-[4px_4px_0px_0px_#111]">
            <div className="flex flex-col">
              <span className="text-[8px] font-black uppercase text-[#111]/40">Availability</span>
              <span className="text-[10px] font-black uppercase text-[#111]">Fresher / Open to Work</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. BACKGROUND DECO */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none -rotate-90 z-0">
        <span className="text-[280px] font-black uppercase tracking-tighter">Secure</span>
      </div>

    </section>
  );
}
