import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection to hide/show the drawer
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
        setMobileMenuOpen(false); 
      } else if (currentScrollY < lastScrollY) {
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

  // High-energy, fast spring animations for the mobile dropdown
  const menuVars = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { 
      opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 15, staggerChildren: 0.05 }
    },
    exit: { opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.15 } }
  };

  const itemVars = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 500, damping: 12 } }
  };

  return (
    <>
      {/* 1. STICKY SLIDING DRAWER LAYER */}
      {/* Increased the width to w-[calc(100%+3rem)] and -ml-6 to ensure a huge overlap on the sides */}
      <div 
        className={`sticky top-0 z-[120] w-[calc(100%+3rem)] -ml-6 md:w-[calc(100%+2rem)] md:-ml-4 lg:w-full lg:ml-0 flex justify-center pointer-events-none transition-transform duration-[550ms] ease-[cubic-bezier(0.4,1.5,0.4,1)] ${
          isNavVisible ? 'translate-y-0' : '-translate-y-[130%]'
        }`}
      >
        
        {/* DESKTOP NOTCH */}
        {/* Increased top margin and padding so it overlaps the top edge massively */}
        <nav className="hidden lg:flex pointer-events-auto bg-[#111] text-white rounded-b-[1.75rem] px-10 pb-4 pt-[54px] items-center gap-8 text-[12px] font-black uppercase tracking-[0.2em] shadow-[0px_12px_30px_rgba(0,0,0,0.35)] border-x-[3px] border-b-[3px] border-[#111] -mt-[38px]">
          {['skills', 'experience', 'work'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleScrollClick(e, item)}
              className="relative group overflow-hidden px-1"
            >
              <span className="relative z-10 group-hover:text-[#F5FF46] transition-colors duration-300">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5FF46] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-[300ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]"></span>
            </a>
          ))}
          <div className="w-[2px] h-4 bg-white/20 mx-2"></div>
          <a href="https://github.com/rajrathod07" target="_blank" rel="noreferrer" className="hover:text-[#F5FF46] transition-colors duration-300 px-1">GH</a>
          <a href="https://www.linkedin.com/in/rajrathod07" target="_blank" rel="noreferrer" className="hover:text-[#F5FF46] transition-colors duration-300 px-1">LI</a>
        </nav>

        {/* MOBILE TOP-RIGHT CORNER CUTOUT */}
        {/* Extreme Overlap: -mr-[24px] and -mt-[44px] guarantees it bleeds fully into the container walls */}
        <div className="absolute right-0 top-0 lg:hidden pointer-events-none">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            // Adjusted padding to keep the icon centered despite the massive overlap
            className="pointer-events-auto flex items-center justify-center pb-4 pt-[58px] pl-6 pr-10 border-b-[3px] border-l-[3px] border-[#111] rounded-bl-[1.75rem] bg-[#111] text-white shadow-[-6px_6px_15px_rgba(0,0,0,0.4)] active:bg-[#222] transition-colors -mt-[44px] -mr-[24px]"
          >
            {mobileMenuOpen ? <X size={26} className="transition-transform duration-300 rotate-90" /> : <Menu size={26} className="transition-transform duration-300" />}
          </button>
        </div>

        {/* BOUNCY MOBILE NAV DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              variants={menuVars}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden pointer-events-auto absolute top-[72px] left-6 right-6 bg-[#EBE9E1] border-[4px] border-[#111] rounded-[2rem] flex flex-col p-8 gap-6 font-black text-2xl uppercase shadow-[12px_12px_0px_0px_#111]"
            >
              {['skills', 'experience', 'work'].map(item => (
                <motion.a 
                  variants={itemVars}
                  key={item} 
                  href={`#${item}`} 
                  onClick={(e) => handleScrollClick(e, item)} 
                  className="active:text-[#F5FF46] flex items-center justify-between group"
                >
                  {item}
                  <span className="w-0 h-[3px] bg-[#111] group-active:w-10 transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.div variants={itemVars} className="h-[3px] bg-[#111]/10 w-full"></motion.div>
              <motion.a 
                  variants={itemVars}
                  href="#contact" 
                  onClick={(e) => handleScrollClick(e, 'contact')} 
                  className="text-center bg-[#F5FF46] py-4 rounded-xl border-[3px] border-[#111] shadow-[6px_6px_0px_0px_#111] active:translate-y-[2px] active:shadow-none transition-all text-xl"
              >
                  Contact
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. BACKGROUND HEADER: Logo & Let's Talk */}
      <header className="max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-10 pb-6 flex items-center justify-between relative z-[100] -mt-[65px]">
        
        {/* Logo */}
        <div 
          onClick={() => {
            const scrollContainer = document.querySelector('.overflow-y-auto') || window;
            scrollContainer.scrollTo({top:0, behavior:'smooth'});
          }} 
          className="font-black text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-center gap-2 group mt-16"
        >
          <span className="text-[#111]">RAJ RATHOD</span>
          <span className="text-xl md:text-2xl text-[#111] group-hover:scale-125 group-hover:rotate-12 transition-transform duration-[400ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]">♥</span>
        </div>

        {/* LET'S TALK BUTTON */}
        <div className="hidden md:block mt-16">
           <button 
             onClick={(e) => handleScrollClick(e, 'contact')} 
             className="relative bg-[#111] text-white border-[3px] border-[#111] rounded-full px-10 py-3 font-black text-[11px] uppercase tracking-[0.15em] shadow-[5px_5px_0px_0px_#F5FF46] hover:shadow-[2px_2px_0px_0px_#F5FF46] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-3 overflow-hidden group"
           >
             <span className="relative z-10 flex items-center gap-2">
               Let's Talk <MessageSquare size={14} className="group-hover:rotate-12 transition-transform duration-300" />
             </span>
             <div className="absolute inset-0 bg-[#F5FF46] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]"></div>
           </button>
        </div>
        
      </header>
    </>
  );
}