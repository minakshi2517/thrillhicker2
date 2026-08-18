import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DESTINATION_PACKAGES = [
  {
    id: 'kedarnath',
    name: 'Kedarnath Temple & Ridge Trek',
    duration: '6 Days',
    price: '₹ 14,999',
    image: '/kedarnath_upright.jpg'
  },
  {
    id: 'spiti',
    name: 'Spiti Valley Cold Desert Circuit',
    duration: '8 Days',
    price: '₹ 19,500',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'kashmir',
    name: 'Kashmir Great Lakes Alpine Trek',
    duration: '7 Days',
    price: '₹ 18,499',
    image: '/kashmir.jpg'
  },
  {
    id: 'kasol-manali',
    name: 'Kasol & Parvati Valley Traverse',
    duration: '5 Days',
    price: '₹ 11,999',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'hampta-pass',
    name: 'Hampta Pass Crossover Trek',
    duration: '5 Days',
    price: '₹ 13,500',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'roopkund',
    name: 'Roopkund Glacial Mystery Lake',
    duration: '8 Days',
    price: '₹ 22,500',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function SectionTwo() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations-showcase" className="relative pt-16 pb-24 bg-[#faf6f0] text-stone-900 select-none overflow-hidden border-t border-amber-200/60">
      
      {/* 
        ========================================================================
        BRIGHT & CRISP STICKY HEADER CARD BOX
        ========================================================================
      */}
      <div className="sticky top-10 z-0 w-full max-w-6xl mx-auto text-center px-6 py-14 mb-16 text-stone-900 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-md shadow-xl border border-amber-200/80">
        
        {/* Crisp Low Opacity Sunlit Mountain Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop')` }}
        />

        {/* Header Content */}
        <div className="relative z-10 space-y-6 max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Discover A World of <span className="font-serif italic font-normal text-amber-700">Sacred & Alpine Trails</span>
          </h2>

          {/* Subtitle 1 */}
          <p className="text-stone-700 text-lg sm:text-xl font-serif leading-relaxed">
            With Himalayan Sacred Temples, High-Altitude Cold Deserts, Turquoise Alpine Lakes, & Valley Passes.
          </p>

          {/* Subtitle 2 / Paragraph */}
          <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed max-w-3xl mx-auto">
            Whether you dream of exploring the <span className="italic font-serif text-amber-800">historic charm</span> of Kedarnath & Spiti, the vibrant turquoise lakes of Kashmir, or the serene pine valleys of Kasol and Manali, we have the <span className="italic font-serif text-amber-800">perfect getaway</span> for you. Let us guide you to <span className="italic font-serif text-amber-800">unforgettable experiences</span> and <span className="font-bold text-stone-900">cherished memories</span> that will <span className="font-bold text-stone-950">last a lifetime</span>.
          </p>
        </div>

      </div>

      {/* 
        ========================================================================
        BRIGHT & CRISP SUNSET GOLDEN HOUR CAROUSEL CONTAINER
        ========================================================================
      */}
      <div className="relative z-20 w-full py-16 px-6 sm:px-12 bg-gradient-to-r from-amber-100/90 via-orange-50 to-amber-100/90 border-y border-amber-200/80 shadow-[0_-25px_50px_rgba(0,0,0,0.08)]">
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8">
          
          {/* LEFT BRIGHT FEATURED BOX */}
          <div className="shrink-0 w-full lg:w-[340px] h-[400px] rounded-3xl bg-white text-stone-900 p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-amber-200/80">
            
            {/* Background Subtle Brush Stroke Curve Watermark */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-stone-900">
                <path d="M 20,100 Q 80,20 140,100 T 260,100" stroke="currentColor" strokeWidth="12" fill="none" />
              </svg>
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="font-space text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                Feel the mountain vibes with our exclusive holiday packages!
              </h3>
              
              <p className="text-stone-600 text-sm font-sans leading-relaxed">
                From sun-kissed sacred peaks to vibrant alpine lake escapes, soak up the perfect Himalayan weather and create unforgettable memories. Your dream getaway awaits with ThrillHikers!
              </p>
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-700 block">
                THRILLHIKERS EXCLUSIVES
              </span>
            </div>

          </div>

          {/* RIGHT HORIZONTAL SLIDER CAROUSEL */}
          <div className="relative flex-1 w-full overflow-hidden">
            
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-stone-900 text-white shadow-xl flex items-center justify-center hover:bg-black transition-all hover:scale-110"
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-5 h-5 font-bold" />
            </button>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-stone-900 text-white shadow-xl flex items-center justify-center hover:bg-black transition-all hover:scale-110"
              aria-label="Next Package"
            >
              <ChevronRight className="w-5 h-5 font-bold" />
            </button>

            {/* Slider Track */}
            <div 
              ref={carouselRef}
              className="flex items-center gap-6 overflow-x-auto scroll-smooth py-4 px-4 scrollbar-none snap-x snap-mandatory"
            >
              {DESTINATION_PACKAGES.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -6 }}
                  className="snap-start shrink-0 w-[270px] sm:w-[300px] h-[380px] rounded-3xl bg-white text-stone-900 p-5 flex flex-col justify-between shadow-lg border border-amber-200/60 cursor-pointer group hover:shadow-2xl transition-all"
                >
                  {/* Card Image */}
                  <div className="relative h-[220px] w-full rounded-2xl overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                    />
                  </div>

                  {/* Card Info */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-space text-lg font-bold text-stone-900 leading-snug line-clamp-2">
                      {pkg.name}
                    </h4>

                    {/* Bottom Row: Duration Left, Price Right */}
                    <div className="flex items-center justify-between pt-1 border-t border-stone-200">
                      <span className="text-xs font-mono font-bold text-stone-500">
                        {pkg.duration}
                      </span>
                      <span className="font-space text-lg font-extrabold text-stone-900">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
