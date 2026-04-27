import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    // 1. The outermost layer is now SOLID BLACK (bg-[#111]). 
    // The padding (p-2 md:p-4) acts as the uniform border around the whole screen.
    <div className="min-h-screen w-full bg-[#111] p-2 md:p-4 font-sans selection:bg-[#F5FF46] selection:text-[#111]">
      
      {/* 2. The inner canvas. It has the beige background and beautifully rounded corners. */}
      {/* Because the outside is black, the black smoothly fills the curves with zero white gaps! */}
      <div className="relative w-full min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-32px)] bg-[#EBE9E1] rounded-2xl md:rounded-[2rem] flex flex-col">
        
        {/* Global Architectural Dot Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[radial-gradient(#111_1.5px,transparent_1.5px)] [background-size:36px_36px] rounded-2xl md:rounded-[2rem] z-0"></div>

        {/* Main Content Area - Locked strictly to the center */}
        <div className="flex-grow flex flex-col w-full max-w-[1300px] mx-auto relative z-10">
          <CustomCursor />
          <Navbar />
          
          <main className="flex-grow flex flex-col w-full pb-12">
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
          
        </div>

      </div>
    </div>
  );
}

export default App;
