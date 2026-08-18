import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-28 text-white select-none overflow-hidden border-t border-stone-800">
      
      {/* Full-Bleed High-Definition Mountain Forest Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2600&auto=format&fit=crop')` }}
      />
      {/* Subtle Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10 px-6 md:px-12 text-center">
        
        {/* Main CTA Header */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] uppercase drop-shadow-2xl">
            World-class Himalayan expeditions <br />
            <span className="text-amber-300 font-serif italic font-normal">building unforgettable memories</span>
          </h2>

          <p className="text-stone-200 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We provide distinct high-altitude routes that are tailored to every trekker's needs at each stage of their journey to scale.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-space font-black text-xs uppercase tracking-widest hover:bg-amber-300 transition-all shadow-2xl hover:scale-105"
            >
              BOOK YOUR TREK
            </a>

            <a
              href="#destinations-showcase"
              className="px-8 py-4 rounded-full bg-black/60 border border-white/40 text-white font-space font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl backdrop-blur-md"
            >
              EXPLORE ROUTES
            </a>
          </div>
        </div>

        {/* Floating 3D Mountain Island Visual Artwork */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <img
            src="/kedarnath_upright.jpg"
            alt="Kedarnath Mountain Sanctuary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white text-left flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 block">SACRED HIMALAYAN EXPEDITIONS</span>
              <h4 className="font-space text-xl font-bold uppercase">Garhwal • Spiti • Kashmir</h4>
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Bottom Trust Ribbon */}
        <div className="pt-6 border-t border-white/20 space-y-4">
          <span className="text-xs font-mono text-stone-300 uppercase tracking-widest font-bold block drop-shadow">
            WE'VE BEEN TRUSTED BY TREKKERS FROM
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-stone-300 font-mono text-sm font-bold opacity-90 drop-shadow-md">
            <span>GOOGLE</span>
            <span>MICROSOFT</span>
            <span>AMAZON</span>
            <span>STANFORD</span>
            <span>HARVARD</span>
          </div>
        </div>

      </div>
    </section>
  );
}
