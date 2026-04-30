import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection logic
  useEffect(() => {
    // We target the specific scrolling container we made in App.js
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      // If we scroll down past 50px, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
      } 
      // If we scroll up, show the navbar
      else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollClick = (e, targetId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const scrollContainer = targetElement.closest('.overflow-y-auto') || window;
      const offset = 80; 
      
      const containerTop = scrollContainer !== window ? scrollContainer.getBoundingClientRect().top : 0;
      const elementTop = targetElement.getBoundingClientRect().top;
      const currentScroll = scrollContainer !== window ? scrollContainer.scrollTop : window.scrollY;
      
      const targetPosition = elementTop - containerTop + currentScroll - offset;

      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. STICKY LAYER: Desktop Nav Links & Mobile Menu Toggle */}
      <div className="sticky top-0 z-[120] w-full h-0 pointer-events-none flex justify-center px-4 md:px-0">
        
        {/* ANIMATING WRAPPER: This handles the smooth sliding up/down */}
        <div 
          className={`w-full max-w-[1400px] flex justify-center relative transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isNavVisible ? 'translate-y-0' : '-translate-y-28'
          }`}
        >
          {/* DESKTOP CENTER TAB (Hangs from top edge) */}
          <nav className="hidden lg:flex pointer-events-auto bg-[#111] text-white rounded-b-[1.5rem] px-10 py-4 items-center gap-8 text-[11px] font-black uppercase tracking-[0.25em] border-x-[2px] border-b-[2px] border-[#111] shadow-[0px_10px_30px_rgba(0,0,0,0.3)] -mt-[2px]">
            {['skills', 'experience', 'work'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScrollClick(e, item)}
                className="hover:text-[#F5FF46] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#F5FF46] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
            <a href="https://github.com/rajrathod07" target="_blank" rel="noreferrer" className="hover:text-[#F5FF46]">GH</a>
            <a href="https://www.linkedin.com/in/rajrathod07" target="_blank" rel="noreferrer" className="hover:text-[#F5FF46]">LI</a>
          </nav>

          {/* MOBILE HAMBURGER (Sticks to top right) */}
          <div className="w-full flex justify-end mt-4 lg:hidden pointer-events-none absolute left-0 right-0 px-6">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="pointer-events-auto p-3 border-[2px] border-[#111] rounded-xl bg-white shadow-[4px_4px_0px_0px_#111] active:translate-y-[2px] active:shadow-none transition-all"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE NAV MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className="lg:hidden pointer-events-auto absolute top-20 left-6 right-6 bg-[#EBE9E1] border-[4px] border-[#111] rounded-[2.5rem] flex flex-col p-10 gap-6 font-black text-2xl uppercase shadow-[15px_15px_0px_0px_#111]"
              >
                {['skills', 'experience', 'work'].map(item => (
                  <a key={item} href={`#${item}`} onClick={(e) => handleScrollClick(e, item)} className="active:text-[#F5FF46]">{item}</a>
                ))}
                <div className="h-[2px] bg-[#111]/10 w-full"></div>
                <a 
                    href="#contact" 
                    onClick={(e) => handleScrollClick(e, 'contact')} 
                    className="text-center bg-[#F5FF46] py-5 rounded-2xl border-[3px] border-[#111] shadow-[6px_6px_0px_0px_#111] active:shadow-none transition-all"
                >
                    Contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 2. NORMAL HEADER LAYER: Logo & Let's Talk */}
      <header className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-8 flex items-center justify-between relative z-[100]">
        
        {/* Logo */}
        <div 
          onClick={() => {
            const scrollContainer = document.querySelector('.overflow-y-auto') || window;
            scrollContainer.scrollTo({top:0, behavior:'smooth'});
          }} 
          className="font-black text-2xl tracking-tighter cursor-pointer flex items-center gap-2 group"
        >
          <span className="text-[#111]">RAJ RATHOD</span>
          <span className="text-xl text-[#111] group-hover:scale-125 group-hover:rotate-12 transition-all">♥</span>
        </div>

        {/* LET'S TALK BUTTON */}
        <div className="hidden md:block">
           <button 
             onClick={(e) => handleScrollClick(e, 'contact')} 
             className="relative bg-[#111] text-white border-[2px] border-[#111] rounded-full px-10 py-3 font-black text-[11px] uppercase tracking-widest shadow-[6px_6px_0px_0px_#F5FF46] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-3 overflow-hidden group"
           >
             <span className="relative z-10 flex items-center gap-2">
               Let's Talk <MessageSquare size={14} className="group-hover:rotate-12 transition-transform" />
             </span>
             <div className="absolute inset-0 bg-[#F5FF46] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
           </button>
        </div>
        
      </header>
    </>
  );
}