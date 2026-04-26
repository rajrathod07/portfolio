import React from 'react';
import { ArrowDown, Download, Gamepad2, Play } from 'lucide-react';

export default function Hero() {
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

  const openCV = () => { window.open('/Raj_Rathod_CV.pdf', '_blank'); };

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 md:px-12 pt-4 pb-16 flex flex-col justify-start min-h-[calc(100vh-80px)]">
      
      {/* ========================================= */}
      {/* ROW 1: THE BRANDED TITLE */}
      {/* ========================================= */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-5 relative z-10 mt-6 md:mt-10">
        
        <div className="w-full lg:w-[60%] pb-2">
          <h1 className="text-[12vw] md:text-7xl lg:text-[96px] leading-[0.85] font-black tracking-tighter uppercase text-[#111] cursor-default">
            DEVELOPER<br />
            <span className="text-[#111]/90">& CYBER</span>
          </h1>
        </div>

        {/* Portrait Card */}
        <div className="relative w-full lg:w-[32%] h-[260px] bg-white border-[2px] border-[#111] rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-[4px_4px_0px_0px_#111]">
          <div className="absolute inset-0 bg-[#111]/5 flex items-center justify-center">
             <img src="/profile1.jpg" alt="Raj Rathod" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute right-0 top-0 w-10 h-full bg-[#F5FF46] border-l-[2px] border-[#111] flex flex-col items-center justify-between py-5">
            <div className="flex flex-col gap-1.5">
              <span className="font-black text-lg text-[#111]">★</span>
              <span className="font-black text-lg text-[#111]">★</span>
            </div>
            <ArrowDown size={18} className="text-[#111] animate-bounce" />
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* ROW 2: PROJECT TEASER & BIO */}
      {/* ========================================= */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-5 mt-10 lg:mt-8 relative z-10">
        
        {/* Project Card - WITH BACKGROUND IMAGE */}
        <div className="relative w-full lg:w-[58%] h-[300px] bg-white border-[2px] border-[#111] rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-[4px_4px_0px_0px_#111]">
          {/* Background Image Layer */}
          <img 
            src="/project.png" 
            alt="Projects Overview" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
          />
          
          <button onClick={(e) => handleScroll(e, 'work')} className="absolute right-[-2px] bottom-[20%] bg-[#F5FF46] border-[2px] border-[#111] rounded-l-2xl py-2 px-2 flex flex-col items-center justify-center gap-1 cursor-pointer hover:pr-4 transition-all group z-20">
            <Gamepad2 size={20} className="mb-0.5 text-[#111]" />
            <span className="font-black text-[8px] uppercase tracking-widest text-center leading-tight text-[#111]">View<br/>Work</span>
          </button>
        </div>

        {/* Info Box */}
        <div className="relative w-full lg:w-[38%] bg-white border-[2px] border-[#111] rounded-xl rounded-tl-[3rem] p-5 lg:p-6 flex flex-col justify-between mt-0 lg:mt-auto min-h-[180px] shadow-[4px_4px_0px_0px_#111]">
          <div className="absolute -top-[2px] -right-[2px] bg-[#111] rounded-bl-2xl rounded-tr-xl px-3 py-1.5 border-[2px] border-[#111] flex gap-1.5 items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>

          <div>
            <h3 className="text-base lg:text-lg font-black uppercase mb-2 text-[#111]">Developer & Security</h3>
            <p className="text-[#111] font-bold text-xs lg:text-sm leading-relaxed max-w-[95%]">
              Motivated BCA student specialized in Web Development and Cybersecurity. Passionate about building secure systems and crafting seamless frontend experiences.
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2.5">
               <button onClick={openCV} className="w-9 h-9 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-[#F5FF46] hover:text-[#111] border-[2px] border-[#111] transition-colors" title="View CV">
                 <Play size={14} className="ml-0.5" fill="currentColor" />
               </button>
               <button onClick={(e) => handleScroll(e, 'experience')} className="w-9 h-9 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-[#F5FF46] hover:text-[#111] border-[2px] border-[#111] transition-colors">
                 <ArrowDown size={16} />
               </button>
            </div>
            <a href="/Raj_Rathod_CV.pdf" download="Raj_Rathod_CV.pdf" className="flex items-center gap-3 border-[2px] border-[#111] rounded-full px-4 py-1.5 hover:bg-[#111] hover:text-white transition-colors group">
              <span className="font-bold text-[13px] uppercase tracking-wide text-[#111] group-hover:text-white">Download CV</span>
              <div className="w-5 h-5 bg-[#F5FF46] border-[2px] border-[#111] rounded-full flex items-center justify-center -mr-1.5 group-hover:bg-[#111] group-hover:border-[#F5FF46]">
                <Download size={10} className="text-[#111] group-hover:text-[#F5FF46]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* CENTER SPINNING SEAL */}
      {/* ========================================= */}
      <div className="hidden lg:flex absolute top-[48%] left-[56%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] items-center justify-center z-30 pointer-events-none">
        <div className="absolute inset-2 bg-[#EBE9E1] rounded-full opacity-95 blur-[2px]"></div>
        <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#111] font-black text-[7.5px] tracking-widest uppercase">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text><textPath href="#circlePath" startOffset="0%">★ OFFICIAL PORTFOLIO ★ CYBER DEVELOPER ★ </textPath></text>
          </svg>
        </div>

        <button onClick={(e) => handleScroll(e, 'work')} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55px] h-[55px] bg-[#111] text-[#F5FF46] rounded-full flex flex-col items-center justify-center text-center border-[3px] border-[#EBE9E1] pointer-events-auto hover:scale-110 transition-transform shadow-[0_0_0_2px_#111] cursor-pointer">
           <span className="text-[8px] font-black leading-tight mb-0.5">START</span>
           <span className="text-[8px] font-black leading-tight text-white">EXPLORE</span>
        </button>
      </div>

    </section>
  );
}
