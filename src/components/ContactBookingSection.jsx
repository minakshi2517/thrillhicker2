import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function ContactBookingSection() {
  const [formData, setFormData] = useState({ name: '', email: '', trek: 'Kedarnath Temple Trek', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <Mail className="w-4 h-4 text-white" />
              <span>09. GET IN TOUCH</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              BOOK YOUR EXPEDITION
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            Ready to embark on your Himalayan journey? Send an inquiry or reach out to our expedition planning team directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-[2.5rem] bg-stone-900/60 border border-stone-800 space-y-6 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-sm">
                ✓ Thank you! Your expedition request has been sent. Our team will contact you within 2 hours.
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-stone-400">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-stone-800 focus:border-white outline-none text-sm font-mono text-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-stone-400">Email Address / WhatsApp</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your email or phone"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-stone-800 focus:border-white outline-none text-sm font-mono text-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-stone-400">Select Trek Route</label>
                  <select
                    value={formData.trek}
                    onChange={(e) => setFormData({ ...formData, trek: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-stone-800 focus:border-white outline-none text-sm font-mono text-white transition-colors"
                  >
                    <option value="Kedarnath Temple Trek">Kedarnath Temple Trek</option>
                    <option value="Spiti Valley Cold Desert">Spiti Valley Cold Desert</option>
                    <option value="Kashmir Great Lakes">Kashmir Great Lakes</option>
                    <option value="Kasol & Parvati Valley">Kasol & Parvati Valley</option>
                    <option value="Mystery Trip Expedition">Mystery Trip Expedition</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-stone-400">Special Notes / Group Size</label>
                  <textarea
                    rows={4}
                    placeholder="Mention preferred travel dates, fitness level, or custom requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-stone-800 focus:border-white outline-none text-sm font-mono text-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black font-space font-black text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors shadow-2xl flex items-center justify-center gap-2"
                >
                  <span>SEND INQUIRY NOW</span>
                  <Send className="w-4 h-4" />
                </button>
              </>
            )}
          </form>

          {/* Contact Details */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-space text-3xl font-black uppercase text-white">ThrillHikers Expeditions HQ</h3>
              <p className="text-stone-400 text-sm font-sans leading-relaxed">
                Connect directly with our trip managers via phone, WhatsApp, or email to plan your upcoming Himalayan adventure.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-sm font-mono text-stone-300">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 98765 43210 / WhatsApp</span>
                </div>

                <div className="flex items-center gap-4 text-sm font-mono text-stone-300">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>expeditions@thrillhikers.com</span>
                </div>

                <div className="flex items-center gap-4 text-sm font-mono text-stone-300">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Rishikesh Base Camp • Uttarakhand, India</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-space text-lg font-bold text-white uppercase">Need Immediate Help?</h4>
                <p className="text-stone-400 text-xs font-mono">Chat live with our 24/7 mountain guides on WhatsApp.</p>
              </div>
              
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0 hover:bg-white transition-colors shadow-xl">
                <ArrowUpRight className="w-6 h-6 font-bold" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
