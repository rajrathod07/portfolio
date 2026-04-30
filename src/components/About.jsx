import React from 'react';
import { Shield, Cpu, Code2, Terminal, Lock, Zap } from 'lucide-react';

export default function About() {
  return (
    // FIX: Matched max-w-[1400px] and px-4 md:px-10 to perfectly align with your Hero component!
    <section id="about" className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 py-12 md:py-24 select-none z-0">
      
      {/* 1. SECTION HEADER */}
      <div className="relative z-[30] mb-8 md:mb-12 px-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#111]/40">
            Module_01 // Identity
          </span>
          <div className="h-[2px] w-12 md:w-24 bg-[#111]/10"></div>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#111] leading-none">
          System_Bio<span className="text-[#F5FF46]">.</span>
        </h2>
      </div>

      {/* FIX: Changed to grid-cols-1 on mobile, lg:grid-cols-12 on desktop to prevent cramping */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* 2. THE MAIN TERMINAL (Bio Narrative) */}
        <div className="relative z-10 lg:col-span-8 bg-[#111] border-[3px] md:border-[4px] border-[#111] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-[6px_6px_0px_0px_#F5FF46] md:shadow-[12px_12px_0px_0px_#F5FF46] overflow-hidden group">
          <div className="relative z-[30] flex flex-col h-full text-white">
            
            <div className="flex items-center gap-2 mb-6 md:mb-8 opacity-40">
              <Terminal size={14} className="md:w-5 md:h-5 flex-shrink-0" />
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest truncate">root@raj_rathod:~# run bio_script.sh</span>
            </div>

            {/* FIX: Improved line-height and font sizes for a more solid, readable text block */}
            <p className="text-[1.35rem] leading-[1.3] md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 tracking-tight">
              My name is <span className="text-[#F5FF46]">Raj Rathod</span>. I am a motivated developer focused on building applications where 
              <span className="text-white italic font-serif font-light"> Web Development</span> meets <span className="text-[#F5FF46] underline decoration-2 underline-offset-4">Cybersecurity</span>.
            </p>

            <div className="space-y-4 md:space-y-6 text-white/70 font-medium text-[13px] md:text-base lg:text-lg leading-relaxed max-w-[680px]">
              <p>
                Currently pursuing my <span className="text-white font-black underline decoration-[#F5FF46] decoration-2 underline-offset-4">Bachelor of Computer Applications (BCA)</span>, 
                I operate as an eager learner and builder with a growing specialization in secure coding and backend logic. 
                My workflow is dictated by a strong foundation—learning how to build systems while understanding how to protect them.
              </p>
              <p>
                With hands-on project experience using <span className="text-white font-black">HTML, CSS, JavaScript</span> and 
                <span className="text-white font-black"> PHP/MySQL</span>, I develop applications ranging from rental platforms to secure password managers. 
                I am actively expanding my knowledge in <span className="text-[#F5FF46] font-bold">Linux, Ethical Hacking, React and Python</span> to grow into a robust security professional.
              </p>
            </div>

            <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6">
               <div className="flex -space-x-2 md:-space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#111] bg-[#F5FF46] flex items-center justify-center shadow-md relative z-10">
                       <Shield size={14} fill="#111" className="text-[#111] md:w-4 md:h-4" />
                    </div>
                  ))}
               </div>
               <div className="flex flex-col gap-0.5 md:gap-1">
                 <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white leading-none">BCA_Student // 2023-2026</span>
                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 leading-none">ID: RR_PORTFOLIO_07</span>
               </div>
            </div>
          </div>

          {/* Large Background Icon */}
          <Lock className="absolute -bottom-6 -right-6 w-32 h-32 md:-bottom-10 md:-right-10 md:w-56 md:h-56 text-white/[0.03] -rotate-12 pointer-events-none" />
        </div>

        {/* 3. THE SPECS CARD (Diagnostic Stats) */}
        <div className="relative z-10 lg:col-span-4 bg-[#F5FF46] border-[3px] md:border-[4px] border-[#111] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[6px_6px_0px_0px_#111] md:shadow-[12px_12px_0px_0px_#111] flex flex-col justify-between">
          <div className="relative z-[30]">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#111] mb-6 md:mb-8 border-b-[3px] border-[#111]/20 pb-4 flex items-center justify-between">
              Core_Specs <Cpu size={22} className="md:w-6 md:h-6 text-[#111]" />
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: <Code2 size={18} className="md:w-5 md:h-5"/>, label: 'Core_Stack', val: 'PHP / MySQL / JS / React' },
                { icon: <Shield size={18} className="md:w-5 md:h-5"/>, label: 'Focus', val: 'Cybersecurity / Frontend ' },
                { icon: <Terminal size={18} className="md:w-5 md:h-5"/>, label: 'Tools', val: 'Linux / Git / GitHub' },
                { icon: <Zap size={18} className="md:w-5 md:h-5"/>, label: 'Education', val: 'BCA (2023-2027)' }
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="bg-[#111] p-3 md:p-3.5 rounded-xl md:rounded-2xl text-[#F5FF46] group-hover:rotate-6 transition-transform flex-shrink-0">
                    {spec.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] md:text-[11px] font-black uppercase text-[#111]/50 leading-none">{spec.label}</p>
                    <p className="text-[13px] md:text-base font-black uppercase text-[#111] leading-none tracking-tight">{spec.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Badge */}
          <div className="relative z-[30] mt-8 md:mt-10 p-4 md:p-5 bg-white border-[3px] md:border-[4px] border-[#111] rounded-xl md:rounded-2xl flex items-center justify-between shadow-[4px_4px_0px_0px_#111] md:shadow-[6px_6px_0px_0px_#111]">
            <div className="flex flex-col gap-1 md:gap-1.5">
              <span className="text-[9px] md:text-[10px] font-black uppercase text-[#111]/40 leading-none tracking-widest">Availability</span>
              <span className="text-xs md:text-sm font-black uppercase text-[#111] leading-none">Fresher / Open to Work</span>
            </div>
            <div className="flex gap-1 items-center h-full">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500 animate-pulse border border-[#111]"></div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. BACKGROUND DECO */}
      {/* Kept hidden on tiny mobile screens to avoid breaking layout, visible on sm and up */}
      <div className="absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 opacity-[0.02] pointer-events-none select-none -rotate-90 z-0 hidden sm:block">
        <span className="text-[150px] md:text-[220px] lg:text-[280px] font-black uppercase tracking-tighter">Secure</span>
      </div>

    </section>
  );
}