import React from 'react';
import { motion } from 'framer-motion';

const CARDS = [
  {
    id: 'safety',
    category: 'SAFETY PROTOCOLS',
    title: '100% Certified Safety',
    description: 'Every expedition is equipped with live satellite GPS tracking, high-altitude oxygen canisters, and wilderness medics.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    author: 'ThrillHikers Safety'
  },
  {
    id: 'guides',
    category: 'NATIVE GUIDES',
    title: 'Native Mountain Navigators',
    description: 'Guided by native Himalayan mountaineers with over 15 years of summit experience and secret route knowledge.',
    image: '/kedarnath_upright.jpg',
    author: 'ThrillHikers Expeditions'
  },
  {
    id: 'pricing',
    category: 'ALL-INCLUSIVE',
    title: 'Transparent Pricing Value',
    description: 'High-altitude tenting, mountain meals, trek permits, and safety equipment are 100% covered upfront with zero hidden fees.',
    image: '/kashmir.jpg',
    author: 'ThrillHikers Guarantee'
  }
];

export default function WhyThrillHikersSection() {
  return (
    <section id="why-thrillhikers" className="relative py-28 bg-[#eef0f2] text-stone-900 select-none overflow-hidden border-t border-stone-300/80">
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10 px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-4 py-1 rounded-full bg-white border border-stone-300 text-stone-500 font-mono text-[11px] uppercase tracking-[0.25em] font-bold inline-block shadow-sm">
            WHY THRILLHIKERS
          </span>
          <h2 className="font-space text-3xl sm:text-5xl font-black tracking-tight text-stone-900 uppercase leading-tight">
            THE THRILLHIKERS ADVANTAGE
          </h2>
          <p className="text-stone-500 text-sm font-sans leading-relaxed">
            Direct, reliable, and authentic high-altitude Himalayan trekking experiences.
          </p>
        </div>

        {/* 3 CLEAN VERTICAL CARDS (EXACT MATCH TO USER REFERENCE IMAGE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-stone-200/80 flex flex-col justify-between cursor-pointer"
            >
              {/* Top Photo Image */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom Content Area (Exact Match to Reference Screenshot Typography) */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left bg-white">
                <div className="space-y-2">
                  {/* Category Tag */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                    {card.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-space text-xl font-extrabold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {card.title}
                  </h3>

                  {/* Body Description */}
                  <p className="text-stone-500 text-xs sm:text-sm font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Footer Tag: by ThrillHikers */}
                <div className="pt-4 border-t border-stone-100 flex items-center text-[11px] font-sans">
                  <span className="text-stone-400 mr-1">by</span>
                  <span className="font-bold text-[#e63946]">{card.author}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
