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
      const offset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-[100]">
      
      {/* THE CLAMPED NAV TAB */}
      <nav className="hidden lg:flex absolute top-[-4px] left-1/2 -translate-x-1/2 bg-[#111] text-white rounded-b-[1.5rem] px-10 py-3 items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] z-[110] border-x-[2px] border-b-[2px] border-[#111] shadow-lg shadow-black/20">
        {['skills', 'experience', 'work'].map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => handleScroll(e, id)} className="hover:text-[#F5FF46] transition-colors cursor-pointer">
            {id}
          </a>
        ))}
        <div className="w-[1px] h-3 bg-white/20 mx-2"></div>
        <a href="https://github.com/rajrathod07" target="_blank" className="hover:text-[#F5FF46]">GH</a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[#F5FF46]">LI</a>
      </nav>

      <div className="max-w-[1350px] mx-auto px-6 py-8 flex items-center justify-between relative z-[100]">
        
        <div onClick={(e) => handleScroll(e, 'top')} className="group font-black text-xl md:text-2xl tracking-tighter flex items-center gap-1 cursor-pointer">
          <span className="text-[#111]">RAJ RATHOD</span> 
          <span className="text-[#111] group-hover:scale-125 transition-transform duration-300">♥</span>
        </div>

        <div className="hidden md:block">
           <button 
             onClick={(e) => handleScroll(e, 'contact')} 
             className="bg-[#111] text-white border-[2px] border-[#111] rounded-full px-8 py-2.5 font-black text-[10px] uppercase tracking-widest shadow-[5px_5px_0px_0px_#F5FF46] hover:bg-[#F5FF46] hover:text-[#111] transition-all active:shadow-none active:translate-x-[5px] active:translate-y-[5px] cursor-pointer"
           >
             Let's Talk
           </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-3 border-[2px] border-[#111] rounded-xl bg-white shadow-[4px_4px_0px_0px_#111] cursor-pointer">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-[#EBE9E1] border-[4px] border-[#111] rounded-[2rem] flex flex-col p-10 gap-6 font-black text-2xl uppercase z-[200] shadow-[15px_15px_0px_0px_#111]"
          >
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>About</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>Work</a>
            <div className="h-[2px] bg-[#111]/10 w-full my-2"></div>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-center bg-[#F5FF46] py-4 rounded-xl border-[3px] border-[#111] shadow-[5px_5px_0px_0px_#111]">Connect</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}