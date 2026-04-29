import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Smooth Cursor Follow
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const handleScroll = (e, targetId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    
    // Look for the element with the ID (ensure your Contact section has id="contact")
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80; // Space for the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Cursor Variants - Preserving your display:none logic for default
  const variants = {
    default: { opacity: 0, scale: 0 },
    link: { opacity: 1, scale: 1, height: 60, width: 60, backgroundColor: "#F5FF46", mixBlendMode: "difference" },
    button: { opacity: 1, scale: 1, height: 40, width: 120, borderRadius: "10px", backgroundColor: "#F5FF46" }
  };

  const enterLink = () => setCursorVariant("link");
  const enterButton = () => setCursorVariant("button");
  const leave = () => setCursorVariant("default");

  return (
    <header className="relative w-full z-[100] cursor-none">
      {/* CUSTOM NAV CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden lg:flex items-center justify-center border-2 border-[#111] rounded-full shadow-[2px_2px_0px_#111]"
        animate={variants[cursorVariant]}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ x: mousePos.x - (cursorVariant === "button" ? 60 : 30), y: mousePos.y - (cursorVariant === "button" ? 20 : 30), left: 0, top: 0 }}
      >
        {cursorVariant === "link" && <ArrowUpRight size={20} className="text-[#111]" />}
      </motion.div>

      {/* THE CENTER TAB */}
      <nav className="hidden lg:flex absolute top-[-2px] left-1/2 -translate-x-1/2 bg-[#111] text-white rounded-b-[1.5rem] px-10 py-4 items-center gap-8 text-[11px] font-black uppercase tracking-[0.25em] z-[110] border-x-[2px] border-b-[2px] border-[#111] shadow-xl">
        {['skills', 'experience', 'work'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onMouseEnter={enterLink}
            onMouseLeave={leave}
            onClick={(e) => handleScroll(e, item)}
            className="hover:text-[#F5FF46] transition-colors cursor-none relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#F5FF46] transition-all group-hover:w-full"></span>
          </a>
        ))}
        <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
        <a href="https://github.com/rajrathod07" target="_blank" onMouseEnter={enterLink} onMouseLeave={leave} className="hover:text-[#F5FF46]">GH</a>
        <a href="https://linkedin.com" target="_blank" onMouseEnter={enterLink} onMouseLeave={leave} className="hover:text-[#F5FF46]">LI</a>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex items-center justify-between relative z-[100]">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
          onMouseEnter={enterLink}
          onMouseLeave={leave}
          className="font-black text-2xl tracking-tighter cursor-none flex items-center gap-2 group"
        >
          <span className="text-[#111]">RAJ RATHOD</span>
          <span className="text-xl text-[#111] group-hover:scale-125 group-hover:rotate-12 transition-all">♥</span>
        </div>

        {/* REDIRECTION FIXED "LET'S TALK" BUTTON */}
        <div className="hidden md:block">
           <button 
             onMouseEnter={enterButton}
             onMouseLeave={leave}
             onClick={(e) => handleScroll(e, 'contact')} 
             className="relative bg-[#111] text-white border-[2px] border-[#111] rounded-full px-10 py-3 font-black text-[11px] uppercase tracking-widest shadow-[6px_6px_0px_0px_#F5FF46] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-3 overflow-hidden group cursor-none"
           >
             <span className="relative z-10 flex items-center gap-2">
               Let's Talk <MessageSquare size={14} className="group-hover:rotate-12 transition-transform" />
             </span>
             <div className="absolute inset-0 bg-[#F5FF46] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
           </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-3 border-[2px] border-[#111] rounded-xl bg-white shadow-[4px_4px_0px_0px_#111] active:translate-y-[2px] active:shadow-none transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-[#EBE9E1] border-[4px] border-[#111] rounded-[2.5rem] flex flex-col p-10 gap-6 font-black text-2xl uppercase z-[200] shadow-[15px_15px_0px_0px_#111]"
          >
            {['skills', 'experience', 'work'].map(item => (
              <a key={item} href={`#${item}`} onClick={(e) => handleScroll(e, item)} className="active:text-[#F5FF46]">{item}</a>
            ))}
            <div className="h-[2px] bg-[#111]/10 w-full"></div>
            {/* Mobile Contact Link Fix */}
            <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')} 
                className="text-center bg-[#F5FF46] py-5 rounded-2xl border-[3px] border-[#111] shadow-[6px_6px_0px_0px_#111] active:shadow-none transition-all"
            >
                Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}