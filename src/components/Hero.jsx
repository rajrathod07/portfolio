import React, { useState, useRef } from 'react';
import { Download, Globe, Shield, Zap, Terminal, ArrowUpRight, Eye } from 'lucide-react';

export default function Hero() {
  // spotlight State for Image Box
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHoveringImg, setIsHoveringImg] = useState(false);
  const imgBoxRef = useRef(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openCV = () => {
    window.open('/Raj_Rathod_CV.pdf', '_blank');
  };

  // Dynamic Spotlight Calculation
  const handleImgMouseMove = (e) => {
    if (!imgBoxRef.current) return;
    const rect = imgBoxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
    if (!isHoveringImg) setIsHoveringImg(true);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-4 md:py-6 flex flex-col justify-center select-none transition-all duration-300">
      
      {/* STATUS BAR */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#111]/30">System_01 // Unit_Hero</span>
          <div className="h-[1px] w-12 md:w-24 bg-[#111]/10 hidden sm:block"></div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F5FF46] border border-[#111] animate-pulse shadow-[0_0_8px_#F5FF46]"></div>
          RAJ_RATHOD_STUDIO
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        {/* ========================================= */}
        {/* BOX 1: MAIN CONSOLE (The Title) */}
        {/* ========================================= */}
        {/* BALANCED SIZE: Increased height from 320px to 380px on desktop */}
        <div className="col-span-12 lg:col-span-8 bg-white border-[3px] border-[#111] rounded-[2rem] p-6 md:p-12 shadow-[8px_8px_0px_0px_#111] relative overflow-hidden flex flex-col justify-between min-h-[300px] md:h-[380px] transition-all group">
          {/* Subtle Background Text */}
          <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-[#111]/[0.03] pointer-events-none italic uppercase">Studio</div>
          <div className="absolute top-6 right-8 opacity-10 hidden md:block"><Zap size={36} strokeWidth={3} /></div>
          
          <div className="relative z-10">
            <h1 className="text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.85] font-black tracking-tighter uppercase text-[#111]">
              Crafting<br />
              <span className="bg-[#F5FF46] px-3 inline-block mt-2 mb-1 py-1 transform -rotate-1 shadow-[3px_3px_0px_0px_#111]">Secure</span><br />
              Experiences
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 relative z-10">
            <p className="text-[11px] md:text-sm font-bold uppercase max-w-[320px] leading-tight text-[#111]/80">
              Frontend developer specialized in <span className="text-[#111] underline decoration-4 decoration-[#F5FF46]">Cyber Security</span> and React architectures.
            </p>
            
            <div className="flex items-center gap-2 font-mono text-[10px] font-black bg-[#111] text-white px-5 py-2.5 rounded-xl shadow-[4px_4px_0px_0px_#F5FF46]">
              <Globe size={14} className="text-[#F5FF46]" />
              INDIA.EXE
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BOX 2: PORTRAIT (Balanced Height & Dynamic Color Reveal) */}
        {/* ========================================= */}
        {/* BALANCED SIZE: Increased height from 320px to 380px on desktop to match Box 1 */}
        <div 
          ref={imgBoxRef}
          onMouseMove={handleImgMouseMove}
          onMouseLeave={() => setIsHoveringImg(false)}
          className="col-span-12 md:col-span-12 lg:col-span-4 relative bg-[#111] border-[3px] border-[#111] rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_#F5FF46] group min-h-[300px] md:h-[380px] cursor-pointer"
        >
          {/* THE "NEW" Masked Color Reveal Interaction */}
          
          {/* LAYER 1: Grayscale Base Image (Default look) */}
          <img 
            src="/profile1.jpg" 
            alt="Raj Rathod Grayscale" 
            className="w-full h-full object-cover object-[50%_20%] grayscale-[100%] contrast-[1.1] transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none" 
          />

          {/* LAYER 2: Color Image with Spotlight Mask (Dynamic Reveal) */}
          <img 
            src="/profile1.jpg" 
            alt="Raj Rathod Color Reveal" 
            style={{
              maskImage: isHoveringImg 
                ? `radial-gradient(circle 80px at ${spotlightPos.x}% ${spotlightPos.y}%, black 0%, black 80%, transparent 100%)`
                : 'radial-gradient(circle 0px at 50% 50%, black 100%, transparent 100%)',
              WebkitMaskImage: isHoveringImg 
                ? `radial-gradient(circle 80px at ${spotlightPos.x}% ${spotlightPos.y}%, black 0%, black 80%, transparent 100%)`
                : 'radial-gradient(circle 0px at 50% 50%, black 100%, transparent 100%)',
              transition: isHoveringImg ? 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out, transform 0.5s ease-out' : 'mask-image 0.5s ease-in-out, -webkit-mask-image 0.5s ease-in-out, transform 0.5s ease-out',
            }}
            className="absolute inset-0 w-full h-full object-cover object-[50%_20%] grayscale-0 contrast-100 group-hover:scale-105 pointer-events-none" 
          />
          
          {/* Standard overlays & badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

          <div className="absolute inset-0 p-6 flex flex-col justify-end items-center pointer-events-none">
             <div className="bg-[#F5FF46] border-[3px] border-[#111] w-full py-3 rounded-2xl shadow-[6px_6px_0px_0px_#111] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center gap-3">
                <Shield size={20} fill="#111" className="text-[#111] animate-pulse" />
                <div className="flex flex-col">
                  <span className="font-black text-[10px] uppercase text-[#111] leading-none tracking-tighter">Access_Granted</span>
                  <span className="text-[8px] font-bold text-[#111]/60 uppercase tracking-widest">Verified_Studio_Member</span>
                </div>
             </div>
          </div>

          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded text-[8px] font-mono text-white/50 uppercase tracking-widest">
            SEC_LEVEL: 01
          </div>
        </div>

        {/* BOX 3: REGISTRY (Bio & Interactive) */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-[#EBE9E1] border-[3px] border-[#111] rounded-[2rem] p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#111] min-h-[240px] group transition-all">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black uppercase text-[#111] flex items-center gap-2 tracking-tighter group-hover:text-[#F5FF46] transition-colors">
              <Terminal size={20} className="group-hover:translate-x-1 transition-transform" /> Registry
            </h3>
            <p className="text-xs font-bold uppercase leading-snug text-[#111]/60">
              Merging <span className="text-[#111]">Front-end Logic</span> with <span className="text-[#111]">Cyber Defense</span>. Designing the web's secure infrastructure.
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <a 
              href="/Raj_Rathod_CV.pdf" 
              download 
              className="flex-grow bg-[#111] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest hover:bg-[#F5FF46] hover:text-[#111] transition-all border-[2px] border-[#111] cursor-pointer shadow-[4px_4px_0px_0px_#F5FF46] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Download <Download size={14} />
            </a>
            <button 
              onClick={openCV}
              className="w-14 bg-white border-[3px] border-[#111] rounded-xl flex items-center justify-center hover:bg-[#F5FF46] transition-all cursor-pointer shadow-[4px_4px_0px_0px_#111] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <Eye size={20} className="text-[#111]" />
            </button>
          </div>
        </div>

        {/* BOX 4: CASE STUDIES */}
        <div 
          onClick={(e) => handleScroll(e, 'work')}
          className="col-span-12 lg:col-span-8 bg-[#F5FF46] border-[3px] border-[#111] rounded-[2rem] p-8 flex items-center justify-between shadow-[8px_8px_0px_0px_#111] cursor-pointer group hover:bg-[#111] transition-all duration-500 min-h-[160px]"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#111] group-hover:text-[#F5FF46]/50 transition-colors">Directory_02</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#111] group-hover:text-white transition-colors">
              Case_Studies
            </h2>
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-[3px] border-[#111] rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#111] group-hover:rotate-45 group-hover:bg-[#F5FF46] transition-all">
             <ArrowUpRight size={32} className="text-[#111]" />
          </div>
        </div>

      </div>

      {/* FOOTER TICKER */}
      <div className="mt-10 overflow-hidden border-y-[2px] border-[#111]/5 py-4 pointer-events-none opacity-30">
        <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap font-mono text-[9px] font-black uppercase tracking-[0.5em] text-[#111]">
           <span>React // Cyber_Security // Pentesting // Architecture // Studio_v2.0</span>
           <span>React // Cyber_Security // Pentesting // Architecture // Studio_v2.0</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}