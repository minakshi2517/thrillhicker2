import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Heart, Award } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="about" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <Compass className="w-4 h-4 text-white" />
              <span>08. OUR MISSION & VISION</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              ABOUT THRILLHIKERS
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            Born out of love for the Indian Himalayas. Dedicated to eco-conscious, safe, and authentic mountain expeditions.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
            <h3 className="font-space text-xl font-bold uppercase text-white">Safety First Protocol</h3>
            <p className="text-stone-400 text-sm font-sans">
              All ThrillHikers routes are continuously monitored with satellite GPS, emergency medical gear, and certified high-altitude navigators.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <Heart className="w-8 h-8 text-amber-400" />
            <h3 className="font-space text-xl font-bold uppercase text-white">Leave No Trace Eco Commitment</h3>
            <p className="text-stone-400 text-sm font-sans">
              We practice zero-waste mountain trekking, clean mountain campaigns, and support native Himalayan mountain communities.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <Award className="w-8 h-8 text-amber-400" />
            <h3 className="font-space text-xl font-bold uppercase text-white">Authentic Local Guides</h3>
            <p className="text-stone-400 text-sm font-sans">
              Led by native mountaineers born in Garhwal, Spiti, and Kashmir valleys with decades of summit survival experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
