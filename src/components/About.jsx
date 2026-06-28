import React from 'react';
import { Shield, Cpu, Code2, Zap, Terminal, Lock, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-[1300px] mx-auto px-4 md:px-10 py-10 md:py-20 select-none z-0 overflow-hidden md:overflow-visible">
      
      {/* 1. SECTION HEADER (Fixed Mobile Overlap & Sizing) */}
      <div className="relative z-[30] mb-8 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#111]/40">Module_01 // Identity</span>
            <div className="h-[2px] w-12 md:w-24 bg-[#111]/10"></div>
          </div>
          
          <h2 className="text-[2.75rem] sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[0.9]">
            About Me<span className="text-[#F5FF46] drop-shadow-[2px_2px_0px_#111] md:drop-shadow-[3px_3px_0px_#111]">.</span>
          </h2>
        </div>

        {/* Cyber/Coder Vibe Highlight Tag - Fixed with 'w-fit' so it doesn't stretch */}
        <div className="w-fit inline-flex items-center gap-2 md:gap-3 bg-[#111] text-white px-3 py-2 md:px-5 md:py-3 border-[2px] md:border-[3px] border-[#111] shadow-[4px_4px_0px_0px_#F5FF46] md:shadow-[6px_6px_0px_0px_#F5FF46] group cursor-crosshair">
          <Zap size={14} className="text-[#F5FF46] md:w-[18px] md:h-[18px] shrink-0" />
          <span className="font-mono text-[9px] sm:text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-widest text-[#F5FF46] whitespace-nowrap">
            A Coder's Mind // Hacker's Vision
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-8">
        
        {/* 2. THE MAIN TERMINAL (Fixed Text & Spacing) */}
        <div className="relative z-10 col-span-12 lg:col-span-8 bg-[#111] border-[3px] md:border-[4px] border-[#111] rounded-[1.25rem] md:rounded-[2.5rem] shadow-[4px_4px_0px_0px_#F5FF46] md:shadow-[12px_12px_0px_0px_#F5FF46] overflow-hidden flex flex-col">
          
          {/* Authentic Terminal Top Bar - Fixed Mobile Squishing */}
          <div className="bg-[#222] border-b-[2px] md:border-b-[3px] border-[#111] px-3 md:px-6 py-2.5 md:py-4 flex items-center justify-between z-40 relative">
            <div className="flex gap-1.5 md:gap-2 shrink-0">
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56] border-[1.5px] md:border-[2px] border-[#111]"></div>
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e] border-[1.5px] md:border-[2px] border-[#111]"></div>
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f] border-[1.5px] md:border-[2px] border-[#111]"></div>
            </div>
            {/* Added shrink-0 and max-width logic to prevent overlap on tiny screens */}
            <div className="flex items-center gap-1.5 bg-[#111] px-2 py-1 md:px-2.5 md:py-1.5 rounded text-white/50 border border-white/5 shrink-0 max-w-[60%] sm:max-w-none">
              <Terminal size={10} className="text-[#F5FF46] shrink-0 md:w-3 md:h-3" />
              <span className="font-mono text-[6.5px] sm:text-[8px] md:text-[10px] uppercase tracking-widest truncate">root@raj:~# whoami<span className="animate-pulse text-[#F5FF46]">_</span></span>
            </div>
          </div>

          <div className="relative z-[30] p-4 sm:p-6 md:p-8 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-[1.1rem] sm:text-xl md:text-3xl font-black leading-tight mb-4 md:mb-8 tracking-tight text-white">
                Hi, I'm <span className="text-[#F5FF46]">Raj Rathod</span>. I build websites and focus on keeping them highly secure.
              </p>

              {/* Fixed the yellow line overlapping text by using a native border on mobile */}
              <div className="space-y-4 md:space-y-6 text-white/75 font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-[650px] relative border-l-[2px] border-[#F5FF46]/30 pl-3 md:border-none md:pl-0">
                
                {/* Desktop absolute line (hidden on mobile to prevent overlap) */}
                <div className="absolute -left-6 md:-left-8 top-1 bottom-1 w-1 bg-[#F5FF46]/20 rounded-full hidden md:block"></div>
                
                <p>
                  I recently graduated with my <span className="text-white font-black underline decoration-[#4ade80] decoration-2 underline-offset-2 md:underline-offset-4">Bachelor of Computer Applications (BCA)</span>, and I am currently expanding my journey by studying for my <span className="text-white font-black underline decoration-[#F5FF46] decoration-2 underline-offset-2 md:underline-offset-4">M.Sc. in Cyber Security</span>. I love learning how to build deep web systems while mastering how to defend them from threats.
                </p>
                <p>
                  With practical building experience using <span className="text-white font-black bg-white/10 px-1 md:px-1.5 py-0.5 rounded whitespace-nowrap">HTML, CSS, JS</span> and <span className="text-white font-black bg-white/10 px-1 md:px-1.5 py-0.5 rounded whitespace-nowrap">PHP/MySQL</span>, I develop software tools ranging from online dynamic platforms to custom secure password managers. I am active in learning <span className="text-[#F5FF46] font-bold">Linux, Ethical Hacking, React and Python</span>.
                </p>
              </div>
            </div>

            {/* Education System Status Footer - Fixed wrapping */}
            <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-white/10 flex flex-row items-center gap-3 md:gap-6">
               <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border-[1.5px] md:border-[2px] border-[#111] bg-[#4ade80] flex items-center justify-center shadow-[2px_2px_0px_0px_#111] relative z-20">
                     <CheckCircle2 size={12} className="text-[#111] md:w-[18px] md:h-[18px]" />
                  </div>
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border-[1.5px] md:border-[2px] border-[#111] bg-[#F5FF46] flex items-center justify-center shadow-[2px_2px_0px_0px_#111] relative z-10">
                     <Shield size={10} className="text-[#111] md:w-4 md:h-4" fill="#111" />
                  </div>
               </div>
               
               <div className="flex flex-col gap-0.5 md:gap-1 overflow-hidden">
                 <span className="text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-widest text-white leading-tight truncate">
                   BCA Graduated <span className="hidden sm:inline">//</span><br className="block sm:hidden" /> M.Sc Cyber <span className="text-[#F5FF46]">[Current]</span>
                 </span>
                 <span className="text-[6.5px] md:text-[9px] font-mono font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 md:gap-2">
                   <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div> ID: RR_07
                 </span>
               </div>
            </div>
          </div>

          <Lock size={160} strokeWidth={1.5} className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 text-white/[0.03] -rotate-12 pointer-events-none md:w-[280px] md:h-[280px]" />
        </div>

        {/* 3. THE SPECS CARD (Diagnostic Stats) */}
        <div className="relative z-10 col-span-12 lg:col-span-4 bg-[#F5FF46] border-[3px] md:border-[4px] border-[#111] rounded-[1.25rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_#111] md:shadow-[12px_12px_0px_0px_#111] flex flex-col justify-between">
          <div className="relative z-[30]">
            
            <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-[#111] mb-4 md:mb-8 flex items-center justify-between">
              Core_Specs <Cpu size={18} className="text-[#111] md:w-6 md:h-6" />
            </h3>
            
            <div className="space-y-2 md:space-y-3">
              {[
                { icon: <Code2 size={14}/>, label: 'Core_Stack', val: 'PHP / MySQL / JS / React' },
                { icon: <Shield size={14}/>, label: 'Focus', val: 'Cybersecurity / Frontend' },
                { icon: <Terminal size={14}/>, label: 'Tools', val: 'Linux / Git / Python' },
                { icon: <Zap size={14}/>, label: 'Education', val: 'M.Sc Cybersec / BCA' }
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-3 p-2 md:p-3 bg-[#EBE9E1]/50 border-[2px] border-[#111] rounded-xl cursor-default group">
                  <div className="bg-[#111] p-1.5 md:p-2 rounded-lg text-[#F5FF46] shrink-0">
                    {React.cloneElement(spec.icon, { className: 'w-[14px] h-[14px] md:w-[18px] md:h-[18px]' })}
                  </div>
                  <div className="flex flex-col justify-center overflow-hidden">
                    <p className="text-[6.5px] md:text-[9px] font-black uppercase text-[#111]/50 leading-none mb-1 font-mono tracking-widest">{spec.label}</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase text-[#111] leading-none tracking-tight truncate">{spec.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Hardware-style Status Badge */}
          <div className="relative z-[30] mt-6 md:mt-10 p-3 sm:p-4 md:p-5 bg-white border-[2px] md:border-[3px] border-[#111] rounded-xl md:rounded-2xl flex items-center justify-between shadow-[3px_3px_0px_0px_#111] md:shadow-[6px_6px_0px_0px_#111]">
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[6.5px] md:text-[9px] font-mono font-black uppercase tracking-widest text-[#111]/40">System_Status</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-wide text-[#111]">Ready / Open to Work</span>
            </div>
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-[2px] md:border-[3px] border-[#111] bg-[#111] flex items-center justify-center shadow-inner shrink-0">
              <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399] md:shadow-[0_0_12px_#34d399]"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}