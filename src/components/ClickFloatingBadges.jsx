import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Sun, Mountain, Heart, Feather, Star } from 'lucide-react';

const PHRASES = [
  { text: 'Lose Yourself.', icon: Compass },
  { text: 'A Different You.', icon: Sparkles },
  { text: 'Out Of Office.', icon: Sun },
  { text: 'Stay Awhile.', icon: Mountain },
  { text: 'Find Your Wild.', icon: Feather },
  { text: 'Unplug & Breathe.', icon: Heart },
  { text: 'The Himalayas Await.', icon: Compass },
  { text: 'Chasing Horizons.', icon: Sparkles },
  { text: 'Peak Serenity.', icon: Mountain }
];

const PASTEL_THEMES = [
  { bg: 'bg-[#ffe4e6]', text: 'text-[#9f1239]', shadow: 'shadow-[0_10px_25px_rgba(244,63,94,0.3)]' }, // Pastel Pink
  { bg: 'bg-[#fef3c7]', text: 'text-[#92400e]', shadow: 'shadow-[0_10px_25px_rgba(245,158,11,0.3)]' }, // Pastel Yellow
  { bg: 'bg-[#f3e8ff]', text: 'text-[#6b21a8]', shadow: 'shadow-[0_10px_25px_rgba(168,85,247,0.3)]' }, // Soft Lavender
  { bg: 'bg-[#dcfce7]', text: 'text-[#166534]', shadow: 'shadow-[0_10px_25px_rgba(34,197,94,0.3)]' },  // Soft Mint
  { bg: 'bg-[#ffedd5]', text: 'text-[#9a3412]', shadow: 'shadow-[0_10px_25px_rgba(249,115,22,0.3)]' }  // Pastel Peach
];

const DIRECTIONS = [
  { x: -70, y: -70 },  // Top-Left
  { x: 70, y: -70 },   // Top-Right
  { x: -70, y: 70 },   // Bottom-Left
  { x: 70, y: 70 },    // Bottom-Right
  { x: 0, y: -80 },    // Straight Up
  { x: 0, y: 80 },     // Straight Down
  { x: -90, y: 0 },    // Left
  { x: 90, y: 0 }      // Right
];

export default function ClickFloatingBadges() {
  const [badges, setBadges] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        return;
      }

      const currentPhrase = PHRASES[index % PHRASES.length];
      const currentTheme = PASTEL_THEMES[index % PASTEL_THEMES.length];
      const randomDirection = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      
      setIndex((prev) => prev + 1);

      const id = Date.now() + Math.random();
      
      // Create badge object
      const newBadge = {
        id,
        x: e.clientX,
        y: e.clientY,
        targetX: randomDirection.x,
        targetY: randomDirection.y,
        text: currentPhrase.text,
        icon: currentPhrase.icon,
        theme: currentTheme,
        particles: Array.from({ length: 5 }, (_, i) => ({
          id: i,
          angle: (i * 72 * Math.PI) / 180,
          dist: 35 + Math.random() * 25
        }))
      };

      setBadges((prev) => [...prev.slice(-8), newBadge]);

      // Ultra-fast duration (650ms total vanish)
      setTimeout(() => {
        setBadges((prev) => prev.filter((b) => b.id !== id));
      }, 650);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [index]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      <AnimatePresence>
        {badges.map((b) => {
          const IconComp = b.icon;

          return (
            <React.Fragment key={b.id}>
              
              {/* BOOM BURST PARTICLES */}
              {b.particles.map((p) => {
                const px = Math.cos(p.angle) * p.dist;
                const py = Math.sin(p.angle) * p.dist;

                return (
                  <motion.div
                    key={`${b.id}-p-${p.id}`}
                    initial={{ opacity: 1, scale: 1, x: b.x, y: b.y }}
                    animate={{ opacity: 0, scale: 0, x: b.x + px, y: b.y + py }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute w-2 h-2 rounded-full bg-amber-300 shadow-md pointer-events-none"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                );
              })}

              {/* MAIN PASTEL STICKER BADGE WITH SNAPPY BOOM POP EFFECT */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.4, 1, 0.4],
                  x: `calc(-50% + ${b.targetX}px)`,
                  y: `calc(-50% + ${b.targetY}px)`
                }}
                transition={{ duration: 0.65, times: [0, 0.25, 0.75, 1], ease: [0.175, 0.885, 0.32, 1.275] }}
                style={{ left: b.x, top: b.y }}
                className="absolute pointer-events-none"
              >
                <div className={`px-4 py-2 rounded-full border-2 border-white ${b.theme.bg} ${b.theme.text} ${b.theme.shadow} font-mono text-xs font-black flex items-center gap-2 tracking-wide whitespace-nowrap`}>
                  <IconComp className="w-4 h-4" />
                  <span>{b.text}</span>
                </div>
              </motion.div>

            </React.Fragment>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
