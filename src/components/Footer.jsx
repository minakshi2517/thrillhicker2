import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-stone-950 text-white select-none overflow-hidden pt-24 pb-12 border-t border-amber-500/20">
      
      {/* 
        ========================================================================
        FULL-RES GOLDEN SUNSET MOUNTAIN RIDGELINE HIKERS BACKGROUND IMAGE
        (Exact user uploaded image starting cleanly at the bottom)
        ========================================================================
      */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom opacity-60 pointer-events-none scale-105"
        style={{ backgroundImage: `url('/sunset_hikers.jpg')` }}
      />

      {/* Atmospheric Dark Gradient Overlay for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Main Footer Links & Newsletter Grid (Over Golden Sunset Sky) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/20 pb-16 items-start">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a href="#hero" className="inline-block">
              <span className="font-space text-3xl font-black tracking-widest text-white uppercase drop-shadow-lg">
                THRILLHIKERS
              </span>
            </a>

            <p className="text-stone-200 text-sm font-sans leading-relaxed max-w-sm drop-shadow-md">
              Premier high-altitude Himalayan trekking agency. Curating sacred temple ridge walks, cold desert circuits, and turquoise alpine lake trails.
            </p>

            {/* Circular Social Outline Icons */}
            <div className="flex items-center gap-4 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/50 border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-md">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/50 border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-md">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:expeditions@thrillhikers.com" className="w-10 h-10 rounded-full bg-black/50 border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-md">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Expedition Routes Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300 font-extrabold border-b border-white/20 pb-2 drop-shadow">
              EXPEDITION ROUTES
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-stone-200 font-semibold">
              <li><a href="#destinations-showcase" className="hover:text-amber-300 transition-colors">Kedarnath Temple Trek</a></li>
              <li><a href="#destinations-showcase" className="hover:text-amber-300 transition-colors">Spiti Cold Desert Circuit</a></li>
              <li><a href="#destinations-showcase" className="hover:text-amber-300 transition-colors">Kashmir Great Lakes</a></li>
              <li><a href="#destinations-showcase" className="hover:text-amber-300 transition-colors">Kasol & Parvati Valley</a></li>
              <li><a href="#destinations-showcase" className="hover:text-amber-300 transition-colors">Hampta Pass Crossover</a></li>
            </ul>
          </div>

          {/* Base Camps Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300 font-extrabold border-b border-white/20 pb-2 drop-shadow">
              BASE CAMPS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-stone-200 font-semibold">
              <li>Rishikesh HQ</li>
              <li>Spiti Kaza Base</li>
              <li>Srinagar Outpost</li>
              <li>Manali Ridge Station</li>
            </ul>
          </div>

          {/* Secret Route Releases Newsletter Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300 font-extrabold border-b border-white/20 pb-2 drop-shadow">
              SECRET ROUTE RELEASES
            </h4>
            <p className="text-stone-300 text-xs font-sans drop-shadow-sm">
              Subscribe to get secret route dates and early-bird Himalayan expedition releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              {subscribed ? (
                <div className="p-3 rounded-xl bg-black/60 border border-amber-400 text-amber-300 font-mono text-xs backdrop-blur-md">
                  ✓ Subscribed! You will receive secret releases.
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/30 focus:border-white text-xs font-mono text-white outline-none pr-10 backdrop-blur-md"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center hover:bg-amber-300 transition-colors shadow-md">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Direct Contact & Copyright Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-stone-300 pt-2">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="font-bold text-white block uppercase tracking-wider font-space">ThrillHikers Himalayan Base Camp</span>
            <p className="flex items-center justify-center md:justify-start gap-2 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-300" /> Rishikesh • <Phone className="w-3.5 h-3.5 text-amber-300" /> +91 98765 43210
            </p>
          </div>

          <div className="flex items-center space-x-6 text-stone-300">
            <a href="#privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-amber-300 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#safety" className="hover:text-amber-300 transition-colors">Safety Protocols</a>
          </div>

          <span className="text-stone-400">
            © {new Date().getFullYear()} ThrillHikers Expeditions. All rights reserved.
          </span>

        </div>

      </div>
    </footer>
  );
}
