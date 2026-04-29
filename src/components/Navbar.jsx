import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-[100]">
      {/* THE CENTER TAB - Balanced Spacing */}
      <nav className="hidden lg:flex absolute top-[-2px] left-1/2 -translate-x-1/2 bg-[#111] text-white rounded-b-[1.5rem] px-12 py-4 items-center gap-10 text-[11px] font-black uppercase tracking-[0.25em] z-[110] border-x-[2px] border-b-[2px] border-[#111] shadow-xl shadow-black/20">
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-[#F5FF46] transition-colors cursor-pointer">Skills</a>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-[#F5FF46] transition-colors cursor-pointer">Experience</a>
        <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-[#F5FF46] transition-colors cursor-pointer">Work</a>
        <div className="w-[1px] h-3 bg-white/20 mx-2"></div>
        <a href="https://github.com/rajrathod07" target="_blank" className="hover:text-[#F5FF46]">GH</a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[#F5FF46]">LI</a>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex items-center justify-between relative z-[100]">
        {/* Logo - Perfectly Aligned */}
        <div onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="font-black text-2xl tracking-tighter cursor-pointer flex items-center gap-2 group">
          <span className="text-[#111]">RAJ RATHOD</span>
          <span className="text-xl text-[#111] group-hover:scale-125 transition-transform">♥</span>
        </div>

        {/* Desktop CTA - Fixed Size */}
        <div className="hidden md:block">
           <button 
             onClick={(e) => handleScroll(e, 'contact')} 
             className="bg-[#111] text-white border-[2px] border-[#111] rounded-full px-10 py-3 font-black text-[11px] uppercase tracking-widest shadow-[6px_6px_0px_0px_#F5FF46] hover:bg-[#F5FF46] hover:text-[#111] transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px] cursor-pointer"
           >
             Let's Talk
           </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-3 border-[2px] border-[#111] rounded-xl bg-white shadow-[4px_4px_0px_0px_#111] active:translate-y-[2px] active:shadow-none transition-all">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV (Responsive) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-[#EBE9E1] border-[4px] border-[#111] rounded-[2.5rem] flex flex-col p-10 gap-6 font-black text-2xl uppercase z-[200] shadow-[15px_15px_0px_0px_#111]"
          >
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>Work</a>
            <div className="h-[2px] bg-[#111]/10 w-full"></div>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-center bg-[#F5FF46] py-5 rounded-2xl border-[3px] border-[#111] shadow-[6px_6px_0px_0px_#111]">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}