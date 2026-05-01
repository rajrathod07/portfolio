import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [gateState, setGateState] = useState('waiting');
  const [typedText, setTypedText] = useState('');
  
  const targetText = "loading_raj_workspace...";

  useEffect(() => {
    if (typedText.length < targetText.length && gateState === 'waiting') {
      const timeout = setTimeout(() => {
        setTypedText(targetText.slice(0, typedText.length + 1));
      }, 15); 
      return () => clearTimeout(timeout);
    }
  }, [typedText, gateState]);

  const handleEnterSite = async () => {
    const elem = document.documentElement;
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        await elem.msRequestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen request ignored or blocked.");
    }

    setGateState('launching');

    setTimeout(() => {
      setGateState('done');
    }, 750); 
  };

  return (
    <div className={`relative bg-[#111] w-full font-sans selection:bg-[#F5FF46] selection:text-[#111] h-[100dvh] overflow-hidden`}>
      
      {/* WELCOME GATE (Terminal) */}
      {gateState !== 'done' && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 transition-all duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            gateState === 'launching' ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#444_2px,transparent_2px)] [background-size:40px_40px] opacity-20 animate-[pulse_3s_ease-in-out_infinite] z-0"></div>

          <div className="relative z-10 w-full max-w-[550px] bg-[#EBE9E1] rounded-2xl border-[4px] border-[#111] flex flex-col overflow-hidden shadow-[12px_12px_0px_0px_#111]">
            <div className="w-full bg-white border-b-[4px] border-[#111] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#111]"></div>
                <div className="w-3 h-3 rounded-full bg-[#111]"></div>
                <div className="w-3 h-3 rounded-full bg-[#F5FF46] border-[2px] border-[#111]"></div>
              </div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#111]">Terminal_v1.0</span>
              <div className="w-8"></div>
            </div>

            <div className="p-8 md:p-12 flex flex-col items-center text-center relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] z-0"></div>
              <div className="relative z-10 w-full">
                <div className="h-6 mb-6 font-mono text-sm font-bold text-[#111]/70 uppercase tracking-widest flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-[#111]"></div>
                  <span>{typedText}<span className="animate-pulse bg-[#111] text-[#111] ml-0.5">_</span></span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[0.9] mb-8">
                  Raj's<br/>Workspace
                </h1>
                <button 
                  onClick={handleEnterSite}
                  disabled={gateState !== 'waiting' || typedText.length < targetText.length}
                  className={`group relative w-full py-4 border-[3px] border-[#111] rounded-xl font-black uppercase tracking-widest transition-all duration-300 ${
                    typedText.length === targetText.length 
                      ? 'bg-[#F5FF46] text-[#111] shadow-[6px_6px_0px_0px_#111] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#111] cursor-pointer opacity-100' 
                      : 'bg-[#111]/10 text-[#111]/30 shadow-none cursor-not-allowed opacity-0 translate-y-4'
                  }`}
                >
                  Enter Site
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN SITE CONTENT */}
      <div 
        className={`absolute inset-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col px-2 pt-2 pb-1 md:px-4 md:pt-4 md:pb-2 ${
          gateState === 'launching' || gateState === 'done' 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-[0.95] -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="relative w-full h-full bg-[#EBE9E1] flex flex-col border-[2px] md:border-[4px] border-[#111] rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[radial-gradient(#111_1.5px,transparent_1.5px)] [background-size:36px_36px] z-0"></div>

          <div className="flex flex-col w-full h-full relative z-10">
            {/* FIX: Added overflow-x-hidden here to permanently kill horizontal scrolling! */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <main className="flex flex-col w-full max-w-[1300px] mx-auto pb-12 px-4 md:px-0">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
              <div className="w-full max-w-[1300px] mx-auto">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CustomCursor />
    </div>
  );
}
export default App;
