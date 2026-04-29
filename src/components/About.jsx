import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code2, Globe2, Zap, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-[1300px] mx-auto px-6 md:px-10 py-20 select-none z-0">
      
      {/* 1. SECTION HEADER (z-30 to stay above spotlight) */}
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
        
        {/* 2. THE TERMINAL BOX (Bio Text) */}
        <div className="relative z-10 col-span-12 lg:col-span-8 bg-[#111] border-[4px] border-[#111] rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_#F5FF46] overflow-hidden group">
          {/* Inner Content Layer (z-30) */}
          <div className="relative z-[30] flex flex-col h-full text-white">
            <div className="flex items-center gap-2 mb-8 opacity-40">
              <Terminal size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest">root@raj_rathod:~# cat profile.log</span>
            </div>

            <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
              I am a <span className="text-[#F5FF46]">Frontend Architect</span> with a deep obsession for Secure Coding and High-Performance UI. 
              Based in India, I bridge the gap between creative design and technical security.
            </p>

            <div className="space-y-6 text-white/70 font-medium text-sm md:text-base leading-relaxed max-w-[600px]">
              <p>
                My approach is "Security First." I don't just build components; I build resilient digital structures. 
                Whether it's optimizing React renders or researching vulnerabilities, I focus on the <span className="text-white font-black italic">architectural integrity</span> of the web.
              </p>
              <p>
                In an era of generic templates, I choose <span className="text-[#F5FF46]">Bold Logic</span> and 
                <span className="text-white font-black underline decoration-2 underline-offset-4 decoration-[#F5FF46]"> Precision Performance</span>.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111] bg-[#F5FF46] flex items-center justify-center">
                       <Zap size={14} fill="#111" className="text-[#111]" />
                    </div>
                  ))}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-white/40">3+ Years_Researching_Web_Sec</span>
            </div>
          </div>

          {/* Decorative BG element */}
          <Shield size={200} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12 pointer-events-none" />
        </div>

        {/* 3. THE SPECS BOX (Technical Specs) */}
        <div className="relative z-10 col-span-12 lg:col-span-4 bg-[#F5FF46] border-[4px] border-[#111] rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_#111] flex flex-col justify-between overflow-hidden">
          <div className="relative z-[30]">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-[#111] mb-8 border-b-2 border-[#111] pb-4">
              Spec_Sheet
            </h3>
            
            <div className="space-y-8">
              {[
                { icon: <Cpu size={20}/>, label: 'Core', val: 'React / Next.js' },
                { icon: <Shield size={20}/>, label: 'Sec', val: 'OWASP / Pentesting' },
                { icon: <Globe2 size={20}/>, label: 'Zone', val: 'UTC +5:30' },
                { icon: <Code2 size={20}/>, label: 'Logic', val: 'TypeScript / PHP' }
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[#111] p-2 rounded-lg text-white">
                    {spec.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase text-[#111]/40 leading-none">{spec.label}</p>
                    <p className="text-sm font-black uppercase text-[#111]">{spec.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Status Sticker */}
          <div className="relative z-[30] mt-12 pt-6 border-t-2 border-[#111]/10">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-tighter">Status</span>
              <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded animate-pulse">Available</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. BACKGROUND TEXT (Lower z-index) */}
      <div className="absolute bottom-0 left-0 translate-y-1/2 -rotate-12 opacity-[0.02] pointer-events-none select-none z-0">
        <span className="text-[250px] font-black uppercase leading-none">Architect</span>
      </div>

    </section>
  );
}
