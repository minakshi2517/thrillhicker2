import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 'kedarnath',
    number: '01',
    name: 'KEDARNATH',
    country: 'Uttarakhand, India',
    tagline: 'CHAR DHAM ALPINE PILGRIMAGE',
    description: 'Sacred Himalayan peak trek guarded by towering snow-capped ridges and ancient stone sanctuary.',
    image: '/kedarnath_upright.jpg'
  },
  {
    id: 'spiti',
    number: '02',
    name: 'SPITI VALLEY',
    country: 'Himachal Pradesh, India',
    tagline: 'HIGH ALTITUDE COLD DESERT TREK',
    description: 'Rugged mountain passes, ancient cliffside monasteries, and pristine starry night skies.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop'
  },
  {
    id: 'kasol-manali',
    number: '03',
    name: 'KASOL & MANALI',
    country: 'Himachal Pradesh, India',
    tagline: 'PARVATI VALLEY TRAVERSE',
    description: 'Lush pine forests, roaring river valleys, and panoramic sunlit Himalayan summit views.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop'
  },
  {
    id: 'kashmir',
    number: '04',
    name: 'KASHMIR GREAT LAKES',
    country: 'Jammu & Kashmir, India',
    tagline: 'PARADISE ALPINE & SHIKARA TRAVERSE',
    description: 'High altitude turquoise glacial lakes, Dal Lake shikara boats, and snow-draped Himalayan peaks.',
    image: '/kashmir.jpg'
  }
];

export default function CinematicHero({ onReleaseScroll }) {
  // Step Sequence State Machine:
  // 0: Initial State (Clean full image, clean centered THRILLHIKERS title)
  // 1: Scroll 1 -> THRILLHIKERS title slides down & fades out; slide 01 (Kedarnath) reveals
  // 2: Scroll 2 -> Slide 01 (Kedarnath) -> Slide 02 (Spiti Valley)
  // 3: Scroll 3 -> Slide 02 -> Slide 03 (Kasol & Manali)
  // 4: Scroll 4 -> Slide 03 -> Slide 04 (Kashmir Great Lakes)
  // 5: Scroll 5 -> Released for normal page scrolling
  const [step, setStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev

  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const heroRef = useRef(null);

  const activeSlideIndex = step === 0 ? 0 : Math.min(step - 1, DESTINATIONS.length - 1);
  const currentDestination = DESTINATIONS[activeSlideIndex];

  // Discrete scroll & touch locking mechanism
  useEffect(() => {
    const lockDuration = 900; // ms transition lock

    const triggerStepChange = (dir) => {
      if (isAnimatingRef.current) return;

      if (dir > 0) { // Scroll DOWN
        if (step < 5) {
          isAnimatingRef.current = true;
          setSlideDirection(1);
          setStep((prev) => {
            const nextStep = prev + 1;
            if (nextStep === 5 && onReleaseScroll) {
              onReleaseScroll(true);
            }
            return nextStep;
          });
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, lockDuration);
        }
      } else if (dir < 0) { // Scroll UP
        if (window.scrollY <= 10 && step > 0) {
          isAnimatingRef.current = true;
          setSlideDirection(-1);
          setStep((prev) => {
            const prevStep = prev - 1;
            if (prevStep < 5 && onReleaseScroll) {
              onReleaseScroll(false);
            }
            return prevStep;
          });
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, lockDuration);
        }
      }
    };

    const handleWheel = (e) => {
      if (step < 5 || (step === 5 && window.scrollY <= 10 && e.deltaY < 0)) {
        if (step < 5) {
          e.preventDefault();
        }
        if (Math.abs(e.deltaY) > 15) {
          triggerStepChange(e.deltaY > 0 ? 1 : -1);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (step < 5 || (step === 5 && window.scrollY <= 10)) {
        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartYRef.current - touchEndY;
        if (Math.abs(deltaY) > 30) {
          if (step < 5) {
            e.preventDefault();
          }
          triggerStepChange(deltaY > 0 ? 1 : -1);
          touchStartYRef.current = touchEndY;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [step, onReleaseScroll]);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black select-none z-20"
    >
      {/* Real Travel Agency Navbar Links */}
      <nav className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6">
        
        {/* Brand Text Logo: THRILLHIKERS */}
        <a href="#hero" className="flex items-center gap-3">
          <span className="font-space text-xl md:text-2xl font-black tracking-widest text-white uppercase drop-shadow-md">
            THRILLHIKERS
          </span>
        </a>

        {/* Standard Travel Agency Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] font-mono uppercase text-white font-semibold drop-shadow-md">
          <a href="#destinations" className="hover:text-stone-300 transition-colors">DESTINATIONS</a>
          <a href="#tours" className="hover:text-stone-300 transition-colors">TOURS & TREKS</a>
          <a href="#experiences" className="hover:text-stone-300 transition-colors">EXPERIENCES</a>
          <a href="#about" className="hover:text-stone-300 transition-colors">ABOUT US</a>
          <a href="#contact" className="hover:text-stone-300 transition-colors">CONTACT</a>
        </div>

        <button className="px-5 py-2 rounded-full border border-white/80 bg-black/30 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md font-bold shadow-lg">
          BOOK TREK
        </button>
      </nav>

      {/* FULL SCREEN TRAVEL IMAGES */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentDestination.id}
            custom={slideDirection}
            initial={{ 
              clipPath: slideDirection > 0 
                ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' 
                : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              scale: 1.08
            }}
            animate={{ 
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              scale: 1.0
            }}
            exit={{ 
              clipPath: slideDirection > 0 
                ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' 
                : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
              scale: 1.04
            }}
            transition={{ 
              duration: 0.9,
              ease: [0.65, 0, 0.35, 1]
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${currentDestination.image})`
            }}
          >
            {/* Subtle Gradient Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* INITIAL CENTERED THRILLHIKERS TITLE (Step 0) */}
      <AnimatePresence>
        {step === 0 && (
          <div className="absolute inset-0 z-30 flex items-center justify-center px-4 md:px-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                y: 50
              }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="w-full max-w-[1400px] mx-auto text-center"
            >
              {/* Edge-to-Edge SVG Text Renderer: THRILLHIKERS */}
              <svg viewBox="0 0 1050 150" className="w-full h-auto overflow-visible select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="font-space font-black fill-white tracking-[0.02em] uppercase"
                  style={{ fontSize: '138px' }}
                >
                  THRILLHIKERS
                </text>
              </svg>
              
              <p className="text-xs sm:text-sm font-mono tracking-[0.4em] text-white font-bold uppercase mt-3 drop-shadow-lg">
                HIMALAYAN ADVENTURE & TREKKING EXPEDITIONS
              </p>
              <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-white font-semibold animate-pulse drop-shadow-md">
                <span>SCROLL DOWN TO BEGIN JOURNEY</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* EDITORIAL CONTENT OVERLAY */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-28 pb-12">
        
        {/* Top Destination Counter Row */}
        <div className="flex items-center justify-end text-xs font-mono text-white">
          {step > 0 && (
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest drop-shadow-md">
              <div className="h-6 overflow-hidden relative w-6 text-right font-bold text-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`num-digit-${currentDestination.number}`}
                    initial={{ y: slideDirection > 0 ? 25 : -25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: slideDirection > 0 ? -25 : 25, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block absolute inset-0 text-white font-space font-bold"
                  >
                    {currentDestination.number}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-stone-300">/ 04</span>
            </div>
          )}
        </div>

        {/* Main Editorial Text & Reveal Animation */}
        <div className="max-w-5xl space-y-4 sm:space-y-6">
          
          {/* Tagline & Country */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {step > 0 && (
                <motion.div
                  key={`tag-${currentDestination.id}-${step}`}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span 
                    className="inline-block text-sm sm:text-base font-space font-black uppercase tracking-[0.25em] text-white"
                    style={{
                      textShadow: '0 3px 12px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.9)'
                    }}
                  >
                    {currentDestination.tagline} — {currentDestination.country}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Headline Name */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {step > 0 && (
                <motion.h1
                  key={`title-${currentDestination.id}-${step}`}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="font-space text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-black tracking-tight text-white leading-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                >
                  {currentDestination.name}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Subtitle & CTA Row */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {step > 0 && (
                <motion.div
                  key={`sub-${currentDestination.id}-${step}`}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2"
                >
                  <p className="text-white text-base sm:text-xl font-serif-editorial italic leading-relaxed max-w-xl font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    "{currentDestination.description}"
                  </p>

                  <button className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.25em] text-white hover:text-stone-200 transition-colors self-start md:self-auto drop-shadow-md">
                    <span>EXPLORE ADVENTURE</span>
                    <div className="w-10 h-10 rounded-full border border-white/80 bg-black/30 group-hover:bg-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-lg backdrop-blur-md">
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-black" />
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Interactive Step Timeline Bar */}
        <div className="flex items-end justify-between border-t border-white/30 pt-4">
          
          {/* Step Timeline Indicator Bars */}
          <div className="flex items-center space-x-3">
            {DESTINATIONS.map((dest, idx) => {
              const isActive = activeSlideIndex === idx;
              return (
                <div 
                  key={dest.id}
                  onClick={() => {
                    if (!isAnimatingRef.current) {
                      setStep(idx + 1);
                    }
                  }}
                  className="group py-2 cursor-pointer flex items-center space-x-2"
                >
                  <div 
                    className={`h-[2px] transition-all duration-700 ${
                      isActive && step > 0
                        ? 'w-12 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' 
                        : 'w-5 bg-white/40 group-hover:bg-white'
                    }`}
                  />
                  <span className={`text-[10px] font-mono transition-opacity ${isActive && step > 0 ? 'opacity-100 text-white font-bold drop-shadow' : 'opacity-0 text-white/70'}`}>
                    {dest.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Scroll Action Prompt Indicator */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white font-mono drop-shadow">
            <span className="hidden sm:inline">
              {step === 0 
                ? 'SCROLL DOWN TO START' 
                : step < 4 
                ? 'SCROLL FOR NEXT TREK' 
                : step === 4 
                ? 'SCROLL TO EXPLORE PAGE' 
                : 'CONTINUE EXPLORING'}
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
    </section>
  );
}
