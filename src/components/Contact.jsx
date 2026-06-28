import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const myEmail = "devloper.raj07@gmail.com"; 
    const subject = encodeURIComponent(`Inquiry from ${formData.user_name}`);
    const body = encodeURIComponent(
      `Name: ${formData.user_name}\n` +
      `Email: ${formData.user_email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const forceBlack = { color: '#111111', opacity: 1 };

  return (
    /* Changed px-6 to px-2 for a wider mobile look */
    <section id="contact" className="relative w-full max-w-[1300px] mx-auto px-2 md:px-12 py-24 z-10">
      
      {/* SECTION HEADER - added px-2 for mobile so text doesn't touch the screen edge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-end justify-between border-b-[3px] border-[#111] pb-6 mb-16 mx-2 md:mx-0"
      >
        <h2 style={forceBlack} className="text-4xl md:text-6xl font-black uppercase tracking-tighter !text-[#111]">
          Let's<br />Talk
        </h2>
        
        <div className="hidden md:flex gap-3 mb-2">
          <div className="w-5 h-5 bg-[#111] rounded-full"></div>
          <div className="w-5 h-5 bg-[#F5FF46] border-[2px] border-[#111] rounded-full"></div>
          <div className="w-5 h-5 bg-[#111] rounded-full opacity-20"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* LEFT COLUMN */}
        <motion.div className="lg:col-span-2 flex flex-col justify-between px-2 md:px-0">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6">
              <MessageSquare size={14} /> Open For Work
            </div>
            <h3 style={forceBlack} className="text-3xl lg:text-4xl font-black uppercase tracking-tight !text-[#111] mb-6">
              Have a project<br/>in mind?
            </h3>
            <p style={forceBlack} className="!text-[#111] font-bold leading-relaxed mb-8 max-w-[90%]">
              Whether you need a full frontend architecture built from scratch or just want to connect, my inbox is always open. Let's build something aesthetic.
            </p>
          </div>

          <div className="hidden lg:flex w-full h-32 bg-[#F5FF46] border-[2px] border-[#111] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl items-center justify-center shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mt-auto">
            <Mail size={48} className="text-[#111]" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Adjusted padding and rounded corners for mobile */}
        <motion.div 
          className="lg:col-span-3 relative bg-white border-[2px] border-[#111] p-5 sm:p-10 rounded-tr-[2rem] sm:rounded-tr-[3.5rem] rounded-bl-[2rem] sm:rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
        >
          {/* Top Right Mini Tab */}
          <div className="absolute -top-[2px] -right-[2px] bg-[#111] rounded-bl-2xl rounded-tr-xl px-4 py-2 border-[2px] border-[#111] flex gap-1.5 items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5FF46]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5FF46]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5FF46]"></div>
          </div>

          <form onSubmit={handleSend} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label style={forceBlack} className="font-black text-[11px] uppercase tracking-widest !text-[#111]">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  onChange={handleChange}
                  className="w-full bg-[#EBE9E1] border-[2px] border-[#111] rounded-xl px-4 py-3 !text-[#111] font-bold outline-none focus:bg-[#F5FF46] transition-colors" 
                  placeholder="Your Name" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label style={forceBlack} className="font-black text-[11px] uppercase tracking-widest !text-[#111]">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  onChange={handleChange}
                  className="w-full bg-[#EBE9E1] border-[2px] border-[#111] rounded-xl px-4 py-3 !text-[#111] font-bold outline-none focus:bg-[#F5FF46] transition-colors" 
                  placeholder="your@example.com" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label style={forceBlack} className="font-black text-[11px] uppercase tracking-widest !text-[#111]">Message</label>
              <textarea 
                name="message" 
                required
                rows="5" 
                onChange={handleChange}
                className="w-full bg-[#EBE9E1] border-[2px] border-[#111] rounded-xl px-4 py-3 !text-[#111] font-bold outline-none focus:bg-[#F5FF46] transition-colors resize-none" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex justify-center items-center gap-3 bg-[#111] border-[2px] border-[#111] text-white py-4 rounded-xl hover:bg-[#F5FF46] hover:text-[#111] transition-colors font-black text-sm uppercase tracking-widest group mt-4"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
