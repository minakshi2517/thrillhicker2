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

export default function ClickFloatingBadges() {
  const [badges, setBadges] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Ignore clicks on buttons, links, inputs, or interactive controls
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
      setIndex((prev) => prev + 1);

      const id = Date.now() + Math.random();
      const newBadge = {
        id,
        x: e.clientX,
        y: e.clientY,
        text: currentPhrase.text,
        icon: currentPhrase.icon
      };

      setBadges((prev) => [...prev.slice(-12), newBadge]);

      // Automatically remove badge after animation
      setTimeout(() => {
        setBadges((prev) => prev.filter((b) => b.id !== id));
      }, 1800);
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
              initial={{ opacity: 0, scale: 0.5, y: 0, x: '-50%' }}
              animate={{ opacity: 1, scale: 1.05, y: -45 }}
              exit={{ opacity: 0, scale: 0.8, y: -80 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ left: b.x, top: b.y }}
              className="absolute pointer-events-none"
            >
              <div className="px-4 py-2 rounded-full bg-stone-900/90 text-amber-300 border border-amber-300/40 backdrop-blur-md font-mono text-xs font-bold shadow-2xl flex items-center gap-2 tracking-wide whitespace-nowrap">
                <IconComp className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>{b.text}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
