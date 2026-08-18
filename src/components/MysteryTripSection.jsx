import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Lock, Gift, Sparkles, ArrowRight } from 'lucide-react';

export default function MysteryTripSection() {
  return (
    <section id="mystery-trip" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-extrabold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>05. SECRET ADVENTURE</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              MYSTERY EXPEDITION
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            For thrill-seekers who crave the ultimate surprise. Destination disclosed only 48 hours before departure!
          </p>
        </div>

        {/* Feature Box */}
        <div className="relative rounded-[2.5rem] p-8 sm:p-14 overflow-hidden border border-amber-500/30 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest font-bold inline-block">
              LIMITED CAPACITY • SECRET TRAILS
            </span>

            <h3 className="font-space text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
              UNVEIL THE UNKNOWN HIMALAYAN SUMMIT
            </h3>

            <p className="text-stone-300 text-base font-sans leading-relaxed">
              Book your slot, pack your gear for the specified altitude climate, and receive your secret coordinates 48 hours prior to trek start. All accommodation, meals, equipment, and guided safety included.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>48H Secret Reveal</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Surprise Gear Kit</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>All-Inclusive Package</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-black/60 border border-stone-800 text-center space-y-6 shrink-0 w-full lg:w-80 shadow-2xl">
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Mystery Slot Price</span>
            <div className="font-space text-4xl font-black text-amber-400">₹15,999</div>
            <p className="text-stone-400 text-xs font-mono">Includes all meals, stay, permits & guides</p>
            
            <button className="w-full py-4 rounded-full bg-amber-400 text-black font-space font-black text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-xl flex items-center justify-center gap-2">
              <span>BOOK MYSTERY TRIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
