import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// CUSTOM ICONS: Lucide removed brand icons, so we build our own perfectly matching SVGs.
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Centralized Navigation Sequence
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' }
  ];

  const socialLinks = [
    { id: 'github', url: 'https://github.com/rajrathod07', label: 'GH', icon: GithubIcon },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/rajrathod07', label: 'LI', icon: LinkedinIcon }
  ];

  // Scroll detection to hide/show the full sticky header
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto') || window;

    const handleScroll = () => {
      const currentScrollY = scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;
      
      setIsAtTop(currentScrollY < 100);
      
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

  const menuVars = {
    hidden: { opacity: 0, y: -20, scale: 0.95, transformOrigin: "top right" },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 20, staggerChildren: 0.05 }
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }
  };

  const itemVars = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 500, damping: 15 } }
  };

  return (
    <>
      {/* UNIFIED STICKY HEADER WRAPPER */}
      <div 
        className={`fixed top-0 left-0 w-full z-[150] pointer-events-none transition-transform duration-[400ms] ease-[cubic-bezier(0.4,1.5,0.4,1)] ${
          isNavVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        
        {/* 1. DESKTOP TOP ISLAND */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <nav
                className={`pointer-events-auto hidden lg:flex bg-[#111] text-white rounded-b-[24px] items-center text-[12px] font-black uppercase tracking-[0.18em] shadow-[0px_10px_25px_rgba(0,0,0,0.3)] border-x-[3px] border-b-[3px] border-[#111] -mt-[28px] group relative overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.5,1.5,0.4,1)] justify-center ${
                  isAtTop
                    ? 'pt-[48px] pb-4 px-8 max-w-[720px]'
                    : 'pt-[48px] pb-4 px-0 max-w-[220px] hover:max-w-[720px] hover:px-8 cursor-pointer'
                }`}
              >
            {/* Island Indicator */}
            <div className={`absolute inset-0 flex items-end justify-center pb-[12px] pointer-events-none transition-all duration-300 ${isAtTop ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'}`}>
              <div className="w-[80px] h-[4px] bg-white/40 rounded-full"></div> 
            </div>

            {/* Links Wrapper */}
            <div className={`flex items-center gap-5 xl:gap-6 whitespace-nowrap translate-y-[2px] transition-all duration-[500ms] ${
              isAtTop 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 pointer-events-none translate-y-2 blur-[2px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:blur-0'
            }`}>
              
              {/* Main Nav Links */}
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollClick(e, item.id)}
                  className="relative group/link overflow-hidden px-1.5 py-1"
                >
                  <span className="relative z-10 group-hover/link:text-[#F5FF46] transition-colors duration-300">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5FF46] -translate-x-[105%] group-hover/link:translate-x-0 transition-transform duration-[300ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]"></span>
                </a>
              ))}
              
              <div className="w-[2px] h-4 bg-white/20 mx-2 xl:mx-3"></div>
              
              {/* Social Links */}
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="relative group/link overflow-hidden px-1.5 py-1 flex items-center gap-2"
                >
                  <span className="relative z-10 group-hover/link:text-[#F5FF46] transition-colors duration-300 flex items-center gap-2">
                    {social.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5FF46] -translate-x-[105%] group-hover/link:translate-x-0 transition-transform duration-[300ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]"></span>
                </a>
              ))}

            </div>
          </nav>
        </div>

        {/* 2. THE HEADER COMPONENTS (Logo & Action Buttons) */}
        <header className="max-w-[1400px] w-full mx-auto px-5 md:px-12 pt-6 md:pt-8 flex items-start justify-between relative z-[10]">
          
          {/* Logo */}
          <div 
            onClick={() => {
              const scrollContainer = document.querySelector('.overflow-y-auto') || window;
              scrollContainer.scrollTo({top:0, behavior:'smooth'});
            }} 
className={`font-black text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-center gap-2 transition-all duration-300 ${
  !isAtTop
    ? 'lg:opacity-0 lg:-translate-y-4'
    : 'lg:opacity-100 lg:translate-y-0'
}`}>
            <span className="text-[#111]">RAJ RATHOD</span>
            <span className="text-xl md:text-2xl text-[#111] group-hover:scale-125 group-hover:rotate-12 transition-transform duration-[400ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]">♥</span>
          </div>

          {/* Action Buttons Container */}
          <div className="flex gap-4">
            
            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="pointer-events-auto lg:hidden group flex items-center gap-3 bg-white hover:bg-[#F5FF46] text-[#111] border-[3px] border-[#111] shadow-[4px_4px_0px_0px_#111] rounded-[1.25rem] pl-5 pr-2 py-2 font-black uppercase tracking-widest text-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#111] transition-all"
            >
              <span className="leading-none mt-0.5">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              <div className="bg-[#111] text-[#F5FF46] w-8 h-8 rounded-[10px] flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300">
                 {mobileMenuOpen ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
              </div>
            </button>

            {/* DESKTOP LET'S TALK BUTTON (Contact) */}
<button
  onClick={(e) => handleScrollClick(e, 'contact')}
  className={`pointer-events-auto hidden lg:flex relative bg-[#111] text-white border-[3px] border-[#111] rounded-full px-10 py-3 font-black text-[11px] uppercase tracking-[0.15em] shadow-[5px_5px_0px_0px_#F5FF46] hover:shadow-[2px_2px_0px_0px_#F5FF46] hover:translate-x-[3px] hover:translate-y-[3px] transition-all items-center gap-3 overflow-hidden group ${
    !isAtTop
      ? 'opacity-0 pointer-events-none -translate-y-4'
      : 'opacity-100 translate-y-0'
  }`}
>
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <MessageSquare size={14} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#F5FF46] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.5,1.5,0.4,1)]"></div>
            </button>

          </div>
        </header>

        {/* 3. MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="absolute top-[85px] right-5 md:right-12 z-[140]">
              <motion.div 
                variants={menuVars}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="pointer-events-auto bg-[#EBE9E1] border-[3px] border-[#111] rounded-[1.5rem] flex flex-col p-6 gap-4 font-black text-xl uppercase shadow-[8px_8px_0px_0px_#111] w-[calc(100vw-2.5rem)] max-w-[300px]"
              >
                {/* Main Nav Links Mapping */}
                {navLinks.map((item) => (
                  <motion.a 
                    variants={itemVars}
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={(e) => handleScrollClick(e, item.id)} 
                    className="active:text-[#F5FF46] flex items-center justify-between group py-1"
                  >
                    {item.label}
                    <span className="w-0 h-[3px] bg-[#111] group-active:w-8 transition-all duration-300"></span>
                  </motion.a>
                ))}
                
                <motion.div variants={itemVars} className="h-[3px] bg-[#111]/10 w-full my-1"></motion.div>

                {/* Social Links Row (Mobile) */}
                <motion.div variants={itemVars} className="flex items-center gap-4 py-1">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={social.id}
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white py-2.5 border-[3px] border-[#111] rounded-xl shadow-[3px_3px_0px_0px_#111] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[1px_1px_0px_0px_#111] transition-all text-sm"
                      >
                        <Icon size={16} />
                        {social.label}
                      </a>
                    );
                  })}
                </motion.div>
                
                {/* Contact Button */}
                <motion.a 
                    variants={itemVars}
                    href="#contact" 
                    onClick={(e) => handleScrollClick(e, 'contact')} 
                    className="text-center bg-[#F5FF46] py-3.5 mt-2 rounded-xl border-[3px] border-[#111] shadow-[4px_4px_0px_0px_#111] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#111] transition-all text-lg flex items-center justify-center gap-2"
                >
                    LET'S TALK <MessageSquare size={18} />
                </motion.a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Spacer to prevent layout jumps since header is now fixed out of the document flow */}
      <div className="h-[100px] w-full hidden md:block"></div>
      <div className="h-[80px] w-full md:hidden"></div>
    </>
  );
}