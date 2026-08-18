import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, Award } from 'lucide-react';

const BUCKET_ITEMS = [
  'Witness Kedarnath Temple Sunrise at 3,583m',
  'Stargaze under Zero-Light Skies at Chandra Taal Lake',
  'Cross the High-Altitude Kunzum Pass (4,551m)',
  'Experience Shikara Sunset on Dal Lake in Kashmir',
  'Dip in Natural Hot Springs at Kheerganga Peak',
  'Walk across 7 Glacial Turquoise Lakes in Kashmir'
];

export default function BucketListSection() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const count = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section id="bucket-list" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <Award className="w-4 h-4 text-white" />
              <span>07. HIMALAYAN CHECKLIST</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              BUCKET LIST
            </h2>
          </div>

          <div className="px-6 py-3 rounded-full bg-stone-900 border border-stone-800 text-xs font-mono text-white">
            Completed: <span className="font-bold text-amber-400">{count}</span> / {BUCKET_ITEMS.length} Experiences
          </div>
        </div>

        {/* Interactive List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUCKET_ITEMS.map((item, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <motion.div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  isChecked
                    ? 'bg-stone-900 border-amber-400/60 text-white shadow-lg'
                    : 'bg-stone-900/40 border-stone-800 text-stone-300 hover:border-stone-600'
                }`}
              >
                <span className="font-space text-base font-bold uppercase">{item}</span>
                {isChecked ? (
                  <CheckSquare className="w-6 h-6 text-amber-400 shrink-0" />
                ) : (
                  <Square className="w-6 h-6 text-stone-600 shrink-0" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
