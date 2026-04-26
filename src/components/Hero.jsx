import React, { useState } from 'react';
import { ArrowDown, Download, Gamepad2, Play } from 'lucide-react';

export default function Hero() {
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleStartExplore = (e) => {
    e.preventDefault();
    
    // 1. Trigger the expanding dark circle animation
    setIsTransitioning(true);

    // 2. Wait for the circle to cover the screen (800ms to match CSS)
    setTimeout(() => {
      
      // Trigger Fullscreen
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log(`Fullscreen error: ${err.message}`);
        });
      }

      // Instantly snap to the target section behind the dark overlay
      const targetElement = document.getElementById('work');
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        // Notice 'auto' instead of 'smooth' so it happens instantly behind the curtain
        window.scrollTo({ top: offsetPosition, behavior: 'auto' }); 
      }

      // 3. Give the browser a split second to render, then shrink the curtain to reveal
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);

    }, 800); 
  };

  const openCV = () => { window.open('/Raj_Rathod_CV.pdf', '_blank'); };

  return (
    <>
      {/* ========================================= */}
      {/* CINEMATIC TRANSITION OVERLAY */}
      {/* ========================================= */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#111] rounded-full z-[100] pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          isTransitioning ? 'scale-[100] opacity-100' : 'scale-0 opacity-0'
        }`}
      />

      <section className="relative w-full max-w-[1024px] mx-auto px-5 md:px-8 pt-2 pb-12 flex flex-col justify-start min-h-[calc(100vh-80px)]">
        
        {/* ========================================= */}
        {/* ROW 1: THE BRANDED TITLE */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-4 relative z-10 mt-4 md:mt-8">
          
          <div className="w-full lg:w-[62%] pb-1">
            <h1 className="text-[10vw] md:text-6xl lg:text-[80px] leading-[0.85] font-black tracking-tighter uppercase text-[#111] cursor-default">
              DEVELOPER<br />
              <span className="text-[#111]/90">& CYBER</span>
            </h1>
          </div>

          {/* Portrait Card */}
          <div className="relative w-full lg:w-[30%] h-[200px] bg-white border-[2px] border-[#111] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-[3px_3px_0px_0px_#111]">
            <div className="absolute inset-0 bg-[#111]/5 flex items-center justify-center">
               <img src="/profile1.jpg" alt="Raj Rathod" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute right-0 top-0 w-10 h-full bg-[#F5FF46] border-l-[2px] border-[#111] flex flex-col items-center justify-between py-4">
              <div className="flex flex-col gap-1">
                <span className="font-black text-base text-[#111]">★</span>
                <span className="font-black text-base text-[#111]">★</span>
              </div>
              <ArrowDown size={16} className="text-[#111] animate-bounce" />
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* ROW 2: PROJECT TEASER & BIO */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-4 mt-8 lg:mt-6 relative z-10">
          
          {/* Project Card */}
          <div className="relative w-full lg:w-[58%] h-[240px] bg-white border-[2px] border-[#111] rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-[3px_3px_0px_0px_#111]">
            <img 
              src="/project.png" 
              alt="Projects Overview" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
            />
            <button onClick={(e) => handleScroll(e, 'work')} className="absolute right-[-2px] bottom-[15%] bg-[#F5FF46] border-[2px] border-[#111] rounded-l-xl py-1.5 px-2 flex flex-col items-center justify-center gap-0.5 cursor-pointer hover:pr-3 transition-all group z-20">
              <Gamepad2 size={18} className="mb-0.5 text-[#111]" />
              <span className="font-black text-[7px] uppercase tracking-widest text-center leading-tight text-[#111]">View<br/>Work</span>
            </button>
          </div>

          {/* Info Box */}
          <div className="relative w-full lg:w-[40%] bg-white border-[2px] border-[#111] rounded-xl rounded-tl-[2.5rem] p-4 lg:p-5 flex flex-col justify-between mt-0 lg:mt-auto min-h-[160px] shadow-[3px_3px_0px_0px_#111]">
            <div className="absolute -top-[2px] -right-[2px] bg-[#111] rounded-bl-xl rounded-tr-lg px-2 py-1 border-[2px] border-[#111] flex gap-1 items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
            </div>

            <div>
              <h3 className="text-sm lg:text-base font-black uppercase mb-1.5 text-[#111]">Developer & Security</h3>
              <p className="text-[#111] font-bold text-[11px] lg:text-xs leading-relaxed max-w-[95%]">
                Motivated BCA student specialized in Web Development and Cybersecurity. Passionate about building secure systems and crafting seamless frontend experiences.
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                 <button onClick={openCV} className="w-8 h-8 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-[#F5FF46] hover:text-[#111] border-[2px] border-[#111] transition-colors" title="View CV">
                   <Play size={12} className="ml-0.5" fill="currentColor" />
                 </button>
                 <button onClick={(e) => handleScroll(e, 'experience')} className="w-8 h-8 bg-[#111] text-white rounded-full flex items-center justify-center hover:bg-[#F5FF46] hover:text-[#111] border-[2px] border-[#111] transition-colors">
                   <ArrowDown size={14} />
                 </button>
              </div>
              <a href="/Raj_Rathod_CV.pdf" download="Raj_Rathod_CV.pdf" className="flex items-center gap-2 border-[2px] border-[#111] rounded-full px-3 py-1 hover:bg-[#111] hover:text-white transition-colors group">
                <span className="font-bold text-[11px] uppercase tracking-wide text-[#111] group-hover:text-white">Download CV</span>
                <div className="w-4 h-4 bg-[#F5FF46] border-[2px] border-[#111] rounded-full flex items-center justify-center -mr-1 group-hover:bg-[#111] group-hover:border-[#F5FF46]">
                  <Download size={8} className="text-[#111] group-hover:text-[#F5FF46]" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* CENTER SPINNING SEAL */}
        {/* ========================================= */}
        <div className="hidden lg:flex absolute top-[48%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] items-center justify-center z-30 pointer-events-none">
          <div className="absolute inset-2 bg-[#EBE9E1] rounded-full opacity-95 blur-[1px]"></div>
          <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#111] font-black text-[7px] tracking-widest uppercase">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text><textPath href="#circlePath" startOffset="0%">★ OFFICIAL PORTFOLIO ★ CYBER DEVELOPER ★ </textPath></text>
            </svg>
          </div>

          {/* UPDATED BUTTON TRIGGER */}
          <button onClick={handleStartExplore} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-[#111] text-[#F5FF46] rounded-full flex flex-col items-center justify-center text-center border-[2px] border-[#EBE9E1] pointer-events-auto hover:scale-110 transition-transform shadow-[0_0_0_2px_#111] cursor-pointer relative z-50">
             <span className="text-[6px] font-black leading-tight mb-0.5">START</span>
             <span className="text-[6px] font-black leading-tight text-white">EXPLORE</span>
          </button>
        </div>

      </section>
    </>
  );
}
