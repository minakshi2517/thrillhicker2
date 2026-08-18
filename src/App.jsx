import React from 'react';
import CinematicHero from './components/CinematicHero';
import SectionTwo from './components/SectionTwo';
import TravelReelsSection from './components/TravelReelsSection';
import WhyThrillHikersSection from './components/WhyThrillHikersSection';
import Footer from './components/Footer';
import ClickFloatingBadges from './components/ClickFloatingBadges';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-stone-100 font-sans selection:bg-white selection:text-black">
      
      {/* GLOBAL INTERACTIVE TAP FLOATING BADGES (AIJUGAAD.CO STYLE) */}
      <ClickFloatingBadges />

      {/* 1. HERO SECTION (Pinned Cinematic Hero — UNTOUCHED & FROZEN) */}
      <CinematicHero />

      {/* 2. DESTINATIONS SHOWCASE SECTION */}
      <SectionTwo />

      {/* 3. TRAVEL REELS & TRIP VIDEOS SECTION (3D Curved Reel Carousel) */}
      <TravelReelsSection />

      {/* 4. WHY THRILLHIKERS SECTION (3 Clean Compact Square Cards) */}
      <WhyThrillHikersSection />

      {/* 5. FOOTER WITH SUNSET HIKERS RIDGELINE PHOTO BACKDROP */}
      <Footer />

    </div>
  );
}
