import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Space for the nav
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative w-full z-[100]">
      
      {/* DESKTOP NAV TAB - Added pointer-events-auto to ensure clicks pass through */}
      <nav className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 bg-[#111] text-white rounded-b-[2rem] px-12 py-4 items-center gap-10 text-[13px] font-bold tracking-wide z-[110] pointer-events-auto shadow-xl">
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-[#F5FF46] cursor-pointer transition-colors">About</a>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-[#F5FF46] cursor-pointer transition-colors">Experience</a>
        <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-[#F5FF46] cursor-pointer transition-colors">Work</a>
        <a href="https://github.com/rajrathod07" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5FF46] cursor-pointer transition-colors">Github</a>
        <a href="https://www.linkedin.com/in/raj-rathod-674078353/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5FF46] cursor-pointer transition-colors">LinkedIn</a>
      </nav>

      {/* BRAND & ACTION BUTTONS */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 flex items-start justify-between relative z-[100]">
        
        <div onClick={(e) => handleScroll(e, 'top')} className="font-black text-2xl md:text-3xl tracking-tighter flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform origin-left">
          RAJ RATHOD <span className="text-xl md:text-2xl">♥</span>
        </div>

        <div className="hidden md:block">
           <button 
             onClick={(e) => handleScroll(e, 'contact')} 
             className="bg-white border-[2px] border-[#111] rounded-full px-8 py-2 font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-[#F5FF46] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] cursor-pointer"
           >
             Let's Talk
           </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button 
            className="p-2 border-[2px] border-[#111] rounded-full bg-white shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-[#111] text-white rounded-3xl flex flex-col p-8 gap-6 font-bold text-xl uppercase z-[200] border-[2px] border-[#111] shadow-2xl"
          >
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-[#F5FF46]">About</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-[#F5FF46]">Experience</a>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-[#F5FF46]">Work</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-[#F5FF46] pt-4 border-t border-white/10">Let's Talk</a>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}