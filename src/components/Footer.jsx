import React from 'react';
import { useSystemInfo } from '../hooks/useSystemInfo';

export default function Footer() {
  const { time, uptime } = useSystemInfo();

  return (
    <footer className="relative w-full max-w-[1300px] mx-auto px-6 md:px-12 py-8 mt-12 border-t-[3px] border-[#111] z-10 flex flex-col md:flex-row justify-between items-center gap-8">

      {/* Left: Brand & Copyright */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="font-black text-2xl tracking-tighter flex items-center text-[#111] cursor-default">
          rajrathod<span className="text-xl ml-0.5">♥</span>
        </div>
        <span className="font-bold text-[10px] uppercase tracking-widest text-[#111]/60">
          &copy; {new Date().getFullYear()} DIGITAL PORTFOLIO
        </span>
      </div>

      {/* Center: Brutalist Social Pills WITH ICONS */}
      <div className="flex flex-wrap justify-center gap-3">
        
        {/* GitHub Button */}
        <a href="https://github.com/rajrathod07" className="flex items-center gap-2 bg-white border-[2px] border-[#111] px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest text-[#111] hover:bg-[#F5FF46] transition-colors group">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <span>GITHUB</span>
        </a>

        {/* LinkedIn Button */}
        <a href="https://www.linkedin.com/in/raj-rathod-674078353/" className="flex items-center gap-2 bg-white border-[2px] border-[#111] px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest text-[#111] hover:bg-[#F5FF46] transition-colors group">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>LINKEDIN</span>
        </a>



      </div>

      {/* Right: System Status Sticker */}
      <div className="hidden md:flex flex-col items-end bg-white border-[2px] border-[#111] rounded-xl px-4 py-2.5 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-default">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-[#F5FF46] rounded-full animate-pulse border-[1.5px] border-[#111]"></div>
          <span className="font-black text-[9px] uppercase tracking-widest text-[#111]">
            UPTIME: {uptime}
          </span>
        </div>
        <span className="font-black text-[9px] uppercase tracking-widest text-[#111]/60">
          LOCAL_TIME: {time}
        </span>
      </div>

    </footer>
  );
}