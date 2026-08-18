import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck, Mountain } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 'kedarnath',
    number: '01',
    title: 'KEDARNATH TEMPLE TREK',
    subtitle: 'Sacred Himalayan Alpine Pilgrimage',
    tagline: 'UTTARAKHAND • 3,583M ALTITUDE',
    description: 'Sacred glacial rivers and ancient 8th-century stone temple surrounded by colossal snow peaks.',
    image: '/kedarnath_upright.jpg',
    features: ['Guided Temple Trail', 'Glacial River Camps', 'Wilderness Medic Escort']
  },
  {
    id: 'spiti',
    number: '02',
    title: 'SPITI COLD DESERT CIRCUIT',
    subtitle: 'High Altitude Mountain Pass Traverse',
    tagline: 'HIMACHAL PRADESH • 4,270M ALTITUDE',
    description: 'Rugged mountain passes, ancient cliffside Key monastery, and starlit high desert skies.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop',
    features: ['Key Monastery Pass', 'Kunzum Ridge Camping', 'Chandra Taal Stargazing']
  },
  {
    id: 'kashmir',
    number: '03',
    title: 'KASHMIR GREAT LAKES TREK',
    subtitle: 'Paradise Alpine Turquoise Lakes',
    tagline: 'JAMMU & KASHMIR • 4,190M ALTITUDE',
    description: 'Seven pristine turquoise high-altitude alpine lakes surrounded by wild blooming meadows.',
    image: '/kashmir.jpg',
    features: ['7 Alpine Turquoise Lakes', 'Blooming Wild Meadows', 'Dal Lake Shikara Stay']
  },
  {
    id: 'kasol-manali',
    number: '04',
    title: 'KASOL & PARVATI VALLEY',
    subtitle: 'Pine Forest & Hot Springs Traverse',
    tagline: 'HIMACHAL PRADESH • 3,050M ALTITUDE',
    description: 'Dense emerald pine forests, roaring river valleys, and natural hot spring summits.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop',
    features: ['Kheerganga Hot Springs', 'Parvati River Trail', 'Pine Ridge Campsites']
  }
];

export default function ExploreDestinations() {
  // Section 2 Sub-step State Machine:
  // 0: Initial 2-Column State (Left text animates line-by-line upward, right image card animates upward)
  // 1: Scroll 1 -> Right image card expands to full screen (100vw x 100vh)
  // 2: Scroll 2 -> Full-screen image & content change to Spiti Valley
  // 3: Scroll 3 -> Full-screen image & content change to Kashmir Great Lakes
  // 4: Scroll 4 -> Full-screen image & content change to Kasol & Manali
  // 5: Scroll 5 -> Release section pin for normal page scroll
  const [subStep, setSubStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimatingRef = useRef(false);
  const sectionRef = useRef(null);

  const activeDestinationIndex = subStep <= 1 ? 0 : Math.min(subStep - 1, DESTINATIONS.length - 1);
  const currentDestination = DESTINATIONS[activeDestinationIndex];

  useEffect(() => {
    const lockDuration = 900;

    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Lock scroll while stepping through subSteps inside Section 2
      if (rect.top <= 20 && rect.bottom >= window.innerHeight) {
        if (subStep < 5 || (subStep === 5 && window.scrollY <= sectionRef.current.offsetTop && e.deltaY < 0)) {
          if (subStep < 5) {
            e.preventDefault();
          }
          if (isAnimatingRef.current) return;

          if (Math.abs(e.deltaY) > 15) {
            isAnimatingRef.current = true;
            if (e.deltaY > 0) {
              setDirection(1);
              setSubStep((prev) => Math.min(prev + 1, 5));
            } else {
              setDirection(-1);
              setSubStep((prev) => Math.max(prev - 1, 0));
            }
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, lockDuration);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [subStep]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-stone-950 text-white overflow-hidden select-none"
    >
      {/* 
        SUBSTEP 0: 2-COLUMN ENTRANCE ANIMATION 
        (Left text line-by-line upward reveal, Right image card upward reveal)
      */}
      <AnimatePresence mode="wait">
        {subStep === 0 && (
          <motion.div
            key="2-column-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="w-full min-h-screen max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            
            {/* LEFT COLUMN: Line-by-line entrance animation */}
            <div className="w-full lg:w-1/2 space-y-8">
              
              {/* Line 1: Badge Tag */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>DISCOVER HIMALAYAN EXPEDITIONS</span>
              </motion.div>

              {/* Line 2: Headline */}
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none"
              >
                EXPLORE OUR <br />
                <span className="text-stone-400">SACRED TREKS</span>
              </motion.h2>

              {/* Line 3: Description */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-stone-300 text-base sm:text-lg font-sans leading-relaxed max-w-xl"
              >
                Handcrafted high-altitude mountain trails, sacred pilgrimages, and turquoise alpine lake circuits guided by certified Himalayan survival experts.
              </motion.p>

              {/* Line 4: Bullet Highlights */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-3 pt-2"
              >
                {['Certified High Altitude Navigators', 'Wilderness Oxygen & Medical Escorts', 'Curated Sacred Himalayan Trails'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-mono text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Line 5: CTA Action & Scroll Prompt */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex items-center gap-6 pt-4"
              >
                <button className="px-8 py-4 rounded-full bg-white text-black font-space font-black text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors shadow-2xl flex items-center gap-3">
                  <span>EXPLORE ALL ROUTES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 animate-pulse">
                  SCROLL DOWN TO EXPAND
                </span>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Image Card entrance animation */}
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full lg:w-1/2 h-[500px] rounded-[2.5rem] overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-stone-800 group"
            >
              <img
                src={DESTINATIONS[0].image}
                alt={DESTINATIONS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />

              {/* Card Overlay Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white font-extrabold">
                  {DESTINATIONS[0].tagline}
                </span>
                <span className="font-space text-xl font-black text-white">01</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <h3 className="font-space text-2xl sm:text-3xl font-black uppercase text-white drop-shadow-md">
                  {DESTINATIONS[0].title}
                </h3>
                <p className="text-xs font-mono text-stone-300 uppercase tracking-wider">
                  SCROLL DOWN TO OPEN FULL SCREEN →
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 
        SUBSTEP 1..4: FULL SCREEN EXPANSION & SUBSEQUENT CONTENT CHANGE ON SCROLL
      */}
      <AnimatePresence mode="wait">
        {subStep >= 1 && (
          <motion.div
            key={`fullscreen-${currentDestination.id}`}
            initial={{ 
              clipPath: direction > 0 
                ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' 
                : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              scale: 1.08
            }}
            animate={{ 
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              scale: 1.0
            }}
            exit={{ 
              clipPath: direction > 0 
                ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' 
                : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
              scale: 1.04
            }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 w-full h-screen bg-cover bg-center select-none"
            style={{ backgroundImage: `url(${currentDestination.image})` }}
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

            {/* FULL SCREEN EDITORIAL CONTENT */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-28 pb-12">
              
              {/* Top Row: Counter & Tagline */}
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-xs font-mono uppercase tracking-[0.25em] text-white font-extrabold shadow-xl">
                  {currentDestination.tagline}
                </span>

                <div className="flex items-center gap-2 font-mono text-sm tracking-widest drop-shadow-md">
                  <span className="font-space text-lg font-black text-white">{currentDestination.number}</span>
                  <span className="text-stone-400">/ 04</span>
                </div>
              </div>

              {/* Main Content Reveal */}
              <div className="max-w-4xl space-y-6">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-white font-extrabold drop-shadow-md"
                  >
                    {currentDestination.subtitle}
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="font-space text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                  >
                    {currentDestination.title}
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2"
                  >
                    <p className="text-white text-base sm:text-xl font-serif-editorial italic leading-relaxed max-w-xl font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                      "{currentDestination.description}"
                    </p>

                    <button className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.25em] text-white hover:text-stone-200 transition-colors self-start md:self-auto drop-shadow-md">
                      <span>BOOK THIS TREK</span>
                      <div className="w-10 h-10 rounded-full border border-white/80 bg-black/30 group-hover:bg-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-lg backdrop-blur-md">
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-black" />
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Progress Prompt */}
              <div className="flex items-center justify-between border-t border-white/30 pt-4 text-xs font-mono text-white">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="uppercase tracking-wider">Certified Himalayan Survival & Safety Expeditions</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="uppercase tracking-widest text-stone-300">
                    {subStep < 4 ? 'SCROLL FOR NEXT DESTINATION' : 'CONTINUE EXPLORING'}
                  </span>
                  <div className="w-1 h-6 bg-white/30 rounded-full overflow-hidden relative">
                    <motion.div 
                      animate={{ y: [0, 24, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                      className="w-full h-2.5 bg-white rounded-full"
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
