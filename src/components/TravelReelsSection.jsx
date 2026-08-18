import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, X, Heart, Eye } from 'lucide-react';

const REELS = [
  {
    id: 'kedarnath-reel',
    title: 'Kedarnath Temple Sunrise',
    location: 'UTTARAKHAND • 3,583M',
    author: '@thrillhikers',
    thumbnail: '/kedarnath_upright.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hikers-walking-on-a-mountain-ridge-41548-large.mp4'
  },
  {
    id: 'spiti-reel',
    title: 'Spiti Stargazing Night',
    location: 'SPITI VALLEY • 4,270M',
    author: '@thrillhikers',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-night-sky-full-of-stars-over-a-mountain-41551-large.mp4'
  },
  {
    id: 'kashmir-reel',
    title: 'Kashmir 7 Alpine Lakes',
    location: 'KASHMIR • 4,190M',
    author: '@thrillhikers',
    thumbnail: '/kashmir.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-pristine-mountain-lake-41549-large.mp4'
  },
  {
    id: 'kasol-reel',
    title: 'Kasol Timber Bonfire',
    location: 'PARVATI VALLEY • 3,050M',
    author: '@thrillhikers',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-campfire-burning-in-the-forest-at-night-41553-large.mp4'
  },
  {
    id: 'hampta-reel',
    title: 'Hampta Pass Snow Ridge',
    location: 'HIMACHAL • 4,270M',
    author: '@thrillhikers',
    thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hikers-walking-on-a-mountain-ridge-41548-large.mp4'
  },
  {
    id: 'roopkund-reel',
    title: 'Roopkund Glacial Trail',
    location: 'UTTARAKHAND • 4,800M',
    author: '@thrillhikers',
    thumbnail: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-pristine-mountain-lake-41549-large.mp4'
  },
  {
    id: 'shikara-reel',
    title: 'Dal Lake Sunset Shikara',
    location: 'SRINAGAR • 1,585M',
    author: '@thrillhikers',
    thumbnail: '/kashmir.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-night-sky-full-of-stars-over-a-mountain-41551-large.mp4'
  }
];

export default function TravelReelsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const containerRef = useRef(null);

  // Mouse Move Cursor Physics Handler for Smooth 3D Curved Cylinder Movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    // Normalize mouse position between -1 and 1
    const normalizedX = (x / width) * 2 - 1;
    setMouseX(normalizedX);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
  };

  return (
    <section 
      id="travel-reels" 
      className="relative py-28 bg-[#faf7f2] text-stone-900 px-4 md:px-12 overflow-hidden select-none border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10 text-center">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-1.5 rounded-full bg-amber-200/60 border border-amber-300/80 text-xs font-sans text-amber-900 font-bold tracking-wide shadow-sm">
            Join over 100,000 happy adventurers
          </span>
        </div>

        {/* Big Bold Headline (Exact match to reference screenshot) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-space text-5xl sm:text-7xl font-black tracking-tight text-stone-900 leading-[1.05]">
            Engage Audiences <br />
            with Stunning Videos
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed font-normal">
            Relive raw Himalayan expeditions through high-impact short videos recorded live by our expert mountain navigators.
          </p>
        </div>

        {/* 3D CURVED CYLINDER CAROUSEL CONTAINER (EXACT MATCH TO REFERENCE SCREENSHOT) */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing pt-6 pb-6"
        >
          {/* Curved Cylinder Motion Track */}
          <motion.div 
            animate={{ x: mouseX * -180 }}
            transition={{ type: 'spring', stiffness: 120, damping: 25, mass: 0.8 }}
            className="flex items-center gap-4 sm:gap-6 px-12"
            style={{ perspective: '1200px' }}
          >
            {REELS.map((reel, idx) => {
              // Calculate 3D Arc Curve Offset & Rotation for Cylinder Effect
              const total = REELS.length;
              const centerIndex = (total - 1) / 2;
              const distanceFromCenter = idx - centerIndex;
              const rotateY = distanceFromCenter * 9 + (mouseX * 12);
              const translateZ = Math.abs(distanceFromCenter) * -35;
              const translateY = Math.pow(distanceFromCenter, 2) * 6;

              return (
                <motion.div
                  key={reel.id}
                  onClick={() => setSelectedVideo(reel)}
                  animate={{ 
                    rotateY: rotateY,
                    z: translateZ,
                    y: translateY
                  }}
                  transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                  className="relative shrink-0 w-[200px] sm:w-[240px] md:w-[260px] h-[340px] sm:h-[390px] rounded-[2rem] overflow-hidden bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/60 hover:scale-105 transition-transform duration-500 cursor-pointer group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Thumbnail Video Image */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200 block font-bold">
                      {reel.location}
                    </span>
                    <h4 className="font-space text-base font-bold leading-tight uppercase line-clamp-1">
                      {reel.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA Red Pill Button (Exact match to reference screenshot) */}
        <div className="flex justify-center pt-2">
          <button 
            onClick={() => setSelectedVideo(REELS[0])}
            className="px-8 py-4 rounded-full bg-[#ff6b61] text-white font-space font-extrabold text-sm uppercase tracking-wider hover:bg-[#ff5247] transition-all shadow-xl hover:scale-105"
          >
            Watch All Reels
          </button>
        </div>

        {/* FULL SCREEN VIDEO MODAL PLAYER */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md h-[85vh] rounded-[2.5rem] overflow-hidden bg-stone-900 border border-stone-700 shadow-2xl flex flex-col justify-between"
              >
                {/* HTML5 Video Player */}
                <video
                  src={selectedVideo.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Top Controls */}
                <div className="relative z-10 p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
                  <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-white font-bold">
                    {selectedVideo.location}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 p-6 space-y-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-left">
                  <h4 className="font-space text-xl font-bold uppercase text-white leading-tight">
                    {selectedVideo.title}
                  </h4>
                  <p className="text-stone-300 text-xs font-mono">
                    Captured live by {selectedVideo.author}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
