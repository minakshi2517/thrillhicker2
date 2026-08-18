import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Flame, Sun, Compass, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'stargazing',
    title: 'Chandra Taal Stargazing Campsites',
    category: 'STARGAZING & NIGHT EXPEDITION',
    location: 'Spiti Valley Cold Desert • 4,270m',
    duration: 'Overnight Camp',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    icon: Moon,
    highlights: ['Zero Light Pollution Skies', 'Astronomy Telescope Setups', 'Heated High-Altitude Tents'],
    description: 'Camp under pristine, zero-light pollution skies in Spiti Desert with high-altitude astronomy telescopes.'
  },
  {
    id: 'kedarnath-sunrise',
    title: 'Kedarnath Sacred Ridge Sunrise Hikes',
    category: 'SACRED RIDGE TRAILS',
    location: 'Garhwal Himalayas • 3,583m',
    duration: 'Early Morning Trek',
    image: '/kedarnath_upright.jpg',
    icon: Sun,
    highlights: ['Golden Hour Temple Views', 'Glacial River Trail', 'Wilderness Medic Escort'],
    description: 'Witness golden sun rays illuminating 8th-century stone temple walls and 6,000m snow-clad summits.'
  },
  {
    id: 'bonfire-lore',
    title: 'High-Altitude Timber Bonfire Circles',
    category: 'MOUNTAIN CAMARADERIE',
    location: 'Parvati Valley • 3,050m',
    duration: 'Evening Experience',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    icon: Flame,
    highlights: ['Timber Bonfire Gatherings', 'Himalayan Folk Stories', 'Acoustic Music Gatherings'],
    description: 'Unwind around traditional timber bonfires listening to native Himalayan folklore stories and acoustic music.'
  },
  {
    id: 'glacial-traverse',
    title: 'Kashmir Glacial Stream Traversing',
    category: 'WILDERNESS ADVENTURE',
    location: 'Sonamarg Alpine Valley • 4,190m',
    duration: 'Day Expedition',
    image: '/kashmir.jpg',
    icon: Compass,
    highlights: ['Glacial Stream Crossing', 'Wild Alpine Meadows', 'GPS Navigation Training'],
    description: 'Master glacial stream crossings and high-altitude ridge navigation with certified survival instructors.'
  }
];

export default function ExperiencesSection() {
  const [activeExpId, setActiveExpId] = useState('stargazing');

  return (
    <section id="experiences" className="relative py-28 bg-stone-950 text-white px-6 md:px-16 overflow-hidden select-none border-t border-stone-900">
      
      {/* Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-stone-900/30 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header (Matching Pinterest Pin bsjUZ3GYc Video Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <Sparkles className="w-4 h-4 text-white" />
              <span>03. SIGNATURE HIMALAYAN EXPERIENCES</span>
            </div>
            
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none text-white">
              UNFORGETTABLE MOMENTS
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md leading-relaxed">
            More than just a trek. Immerse yourself in stargazing, sacred sunrise ridge walks, timber bonfires, and mountain survival culture.
          </p>
        </div>

        {/* Experience Cards Grid (Matching Pinterest Video Pin bsjUZ3GYc Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp) => {
            const IconComp = exp.icon;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-stone-900/70 border border-stone-800 hover:border-stone-500 transition-all duration-500 flex flex-col justify-between h-[480px] p-8 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.95)] cursor-pointer"
              >
                {/* Background Image with Smooth Hover Zoom */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />

                {/* Dark Gradient Overlay for Crisp Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30 group-hover:via-stone-950/60 transition-colors duration-500" />

                {/* Top Bar: Category Pill Badge + Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white font-extrabold shadow-lg">
                    {exp.category}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Block */}
                <div className="relative z-10 space-y-4">
                  
                  {/* Location & Duration Tag */}
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-300 font-extrabold block">
                    {exp.location} • {exp.duration}
                  </span>

                  {/* Experience Title */}
                  <h3 className="font-space text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-amber-200 transition-colors leading-tight drop-shadow-xl">
                    {exp.title}
                  </h3>

                  {/* Highlights Checklist */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.highlights.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-black/60 border border-white/20 text-[11px] font-mono text-stone-200 backdrop-blur-md flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-amber-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <p className="text-stone-300 text-xs font-sans max-w-sm line-clamp-1">
                      {exp.description}
                    </p>

                    <div className="w-11 h-11 rounded-full bg-white text-black group-hover:bg-amber-300 flex items-center justify-center transition-all duration-300 shadow-xl shrink-0 group-hover:translate-x-1">
                      <ArrowUpRight className="w-5 h-5 font-extrabold" />
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Safety Guarantee Bar */}
        <div className="rounded-[2rem] p-8 sm:p-10 bg-stone-900/60 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-stone-700 bg-stone-950 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-space text-lg font-bold text-white uppercase">Himalayan Wilderness Safety Commitment</h4>
              <p className="text-stone-400 text-xs font-sans">All signature experiences include satellite GPS tracking, emergency medical gear, and wilderness-certified navigators.</p>
            </div>
          </div>

          <button className="px-8 py-4 rounded-full border border-white/60 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shrink-0 font-bold">
            VIEW SAFETY PROTOCOLS
          </button>
        </div>

      </div>
    </section>
  );
}
