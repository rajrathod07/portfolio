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
import NoiseOverlay from './components/NoiseOverlay';

function App() {
  const [gateState, setGateState] = useState('waiting');
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  
  const bootLogs = [
    "Mounting local drives...",
    "Loading custom fonts...",
    "Compiling neo-brutalism.css...",
    "Establishing connection...",
    "System ready."
  ];

  // Dynamic Progress and Log Simulation
  useEffect(() => {
    if (progress < 100 && gateState === 'waiting') {
      const timeout = setTimeout(() => {
        // Randomize loading speed for realism
        const increment = Math.floor(Math.random() * 4) + 1;
        setProgress(prev => Math.min(prev + increment, 100));
        
        // Update logs based on progress
        if (progress > 20 && progress < 40) setLogIndex(1);
        if (progress >= 40 && progress < 70) setLogIndex(2);
        if (progress >= 70 && progress < 99) setLogIndex(3);
        if (progress === 100) setLogIndex(4);
        
      }, 30); 
      return () => clearTimeout(timeout);
    }
  }, [progress, gateState]);

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
    }, 850); 
  };

  const isReady = progress === 100;

  return (
    <div className={`relative bg-[#111] w-full font-sans selection:bg-[#F5FF46] selection:text-[#111] h-[100dvh] overflow-hidden`}>
      
      {/* WELCOME GATE (Terminal) */}
      {gateState !== 'done' && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 transition-all duration-[800ms] ease-[cubic-bezier(0.5,-0.5,0.2,1.5)] ${
            gateState === 'launching' ? 'translate-y-[150%] rotate-6 scale-90 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#444_2px,transparent_2px)] [background-size:40px_40px] opacity-20 animate-[pulse_3s_ease-in-out_infinite] z-0"></div>

          {/* Terminal Window */}
          <div className="relative z-10 w-full max-w-[550px] bg-[#EBE9E1] rounded-2xl border-[4px] border-[#111] flex flex-col overflow-hidden shadow-[16px_16px_0px_0px_#111]">
            
            {/* Solid Black Header with Colored Controls */}
            <div className="w-full bg-[#111] border-b-[4px] border-[#111] px-5 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 border-[2px] border-[#111] hover:bg-red-400"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-[2px] border-[#111] hover:bg-yellow-300"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 border-[2px] border-[#111] hover:bg-green-400"></div>
              </div>
              <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-white">Terminal_v2.0</span>
              <div className="w-[42px]"></div> 
            </div>

            {/* CRT Screen Area */}
            <div className="p-8 md:p-12 flex flex-col items-center text-center relative bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] [background-size:16px_16px] [background-position:center]">
              
              {/* CRT Scanlines Overlay */}
              <div className="absolute inset-0 bg-[#EBE9E1]/90 z-0 shadow-[inset_0px_0px_60px_rgba(0,0,0,0.1)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.025)_50%)] [background-size:100%_4px] pointer-events-none z-0"></div>

              <div className="relative z-10 w-full">
                
                {/* Boot Logs */}
                <div className="h-4 mb-4 font-mono text-[10px] font-bold text-[#111]/50 uppercase tracking-widest text-left w-full overflow-hidden">
                  <span className="animate-pulse mr-2">&gt;</span>
                  {bootLogs[logIndex]}
                </div>

                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[0.9] mb-10 drop-shadow-[2px_2px_0px_rgba(17,17,17,0.1)]">
                  Raj's<br/>Workspace
                </h1>
                
                {/* 
                  THE "LOCK/UNLOCK" BUTTON 
                  Acts as a progress bar, then pops out when ready.
                */}
                <button 
                  onClick={handleEnterSite}
                  disabled={!isReady || gateState !== 'waiting'}
                  className={`relative overflow-hidden w-full py-4 border-[3px] border-[#111] rounded-xl font-black uppercase tracking-widest transition-all duration-[300ms] ease-out ${
                    isReady 
                      ? 'bg-[#F5FF46] text-[#111] shadow-[8px_8px_0px_0px_#111] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[12px_12px_0px_0px_#111] active:translate-y-[8px] active:translate-x-[8px] active:shadow-[0px_0px_0px_0px_#111] cursor-pointer opacity-100 group' 
                      : 'bg-[#EBE9E1] text-[#111]/50 shadow-[inset_4px_4px_0px_0px_rgba(17,17,17,0.1)] cursor-not-allowed border-dashed'
                  }`}
                >
                  {/* Internal Loading Bar Fill */}
                  {!isReady && (
                    <div 
                      className="absolute left-0 top-0 h-full bg-[#111]/10 transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  )}

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {!isReady ? (
                      <>
                        <div className="w-3 h-3 border-[2px] border-[#111]/30 border-t-[#111]/80 rounded-full animate-spin"></div>
                        INITIALIZING [{progress}%]
                      </>
                    ) : (
                      <>
                        Enter Site
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </>
                    )}
                  </span>
                  
                  {/* Sweep shine effect on hover (only when ready) */}
                  {isReady && <div className="absolute inset-0 -translate-x-full bg-white/40 group-hover:animate-[shimmer_0.75s_ease-in-out] skew-x-12 z-0"></div>}
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN SITE CONTENT */}
      <div 
        className={`absolute inset-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col px-2 pt-2 pb-1 md:px-4 md:pt-4 md:pb-2 ${
          gateState === 'launching' || gateState === 'done' 
            ? 'opacity-100 scale-100 translate-y-0 blur-0' 
            : 'opacity-0 scale-[0.98] -translate-y-4 pointer-events-none blur-sm'
        }`}
      >
        <div className="relative w-full h-full bg-[#EBE9E1] flex flex-col border-[2px] md:border-[4px] border-[#111] rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[radial-gradient(#111_1.5px,transparent_1.5px)] [background-size:36px_36px] z-0"></div>

          <div className="flex flex-col w-full h-full relative z-10">
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
      <NoiseOverlay />
    </div>
  );
}

export default App;