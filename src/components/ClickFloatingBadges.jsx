import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Sun, Mountain, Heart, Feather } from 'lucide-react';

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

const CLEAN_THEMES = [
  { bg: 'bg-white text-stone-900 border-stone-300 shadow-xl', icon: 'text-amber-700' },
  { bg: 'bg-stone-950 text-white border-stone-800 shadow-2xl', icon: 'text-amber-300' },
  { bg: 'bg-amber-100/90 text-amber-950 border-amber-300/80 shadow-xl', icon: 'text-amber-800' }
];

const CLEAN_DIRECTIONS = [
  { x: -35, y: -35 },
  { x: 35, y: -35 },
  { x: -35, y: 35 },
  { x: 35, y: 35 },
  { x: 0, y: -45 },
  { x: 0, y: 45 }
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
      const currentTheme = CLEAN_THEMES[index % CLEAN_THEMES.length];
      const randomDirection = CLEAN_DIRECTIONS[Math.floor(Math.random() * CLEAN_DIRECTIONS.length)];
      
      setIndex((prev) => prev + 1);

      const id = Date.now() + Math.random();
      
      const newBadge = {
        id,
        x: e.clientX,
        y: e.clientY,
        targetX: randomDirection.x,
        targetY: randomDirection.y,
        text: currentPhrase.text,
        icon: currentPhrase.icon,
        theme: currentTheme
      };

      setBadges((prev) => [...prev.slice(-6), newBadge]);

      // Ultra-clean 800ms duration
      setTimeout(() => {
        setBadges((prev) => prev.filter((b) => b.id !== id));
      }, 800);
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
            <motion.div
              key={b.id}
              initial={{ opacity: 0, scale: 0.6, x: '-50%', y: '-50%' }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.6, 1.1, 1, 0.9],
                x: `calc(-50% + ${b.targetX}px)`,
                y: `calc(-50% + ${b.targetY}px)`
              }}
              transition={{ duration: 0.8, times: [0, 0.2, 0.75, 1], ease: [0.16, 1, 0.3, 1] }}
              style={{ left: b.x, top: b.y }}
              className="absolute pointer-events-none"
            >
              <div className={`px-4 py-2 rounded-full border backdrop-blur-md ${b.theme.bg} font-mono text-xs font-bold flex items-center gap-2.5 tracking-wide whitespace-nowrap shadow-2xl`}>
                <IconComp className={`w-3.5 h-3.5 ${b.theme.icon}`} />
                <span>{b.text}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
