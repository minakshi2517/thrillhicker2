import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, CheckCircle, ArrowRight } from 'lucide-react';

export default function BuildYourTripSection() {
  const [selectedRegion, setSelectedRegion] = useState('Uttarakhand');
  const [selectedDuration, setSelectedDuration] = useState('5-7 Days');
  const [selectedFitness, setSelectedFitness] = useState('Moderate');

  return (
    <section id="build-trip" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <Sliders className="w-4 h-4 text-white" />
              <span>04. CUSTOM TRIP BUILDER</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              BUILD YOUR TRIP
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            Design a custom Himalayan trek tailored to your dates, group size, and fitness level.
          </p>
        </div>

        {/* Builder Container */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-stone-900/60 border border-stone-800 backdrop-blur-md space-y-10 shadow-2xl">
          
          {/* Step 1: Select Region */}
          <div className="space-y-4">
            <label className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 font-bold block">
              STEP 1: SELECT HIMALAYAN REGION
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Uttarakhand', 'Himachal Pradesh', 'Jammu & Kashmir', 'Ladakh'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`p-4 rounded-2xl border text-xs font-mono uppercase tracking-widest transition-all ${
                    selectedRegion === region
                      ? 'bg-white text-black font-black border-white shadow-lg'
                      : 'bg-black/40 text-stone-300 border-stone-800 hover:border-stone-600'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Duration */}
          <div className="space-y-4">
            <label className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 font-bold block">
              STEP 2: SELECT TREK DURATION
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['3-4 Days', '5-7 Days', '8-10 Days', '12+ Days'].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`p-4 rounded-2xl border text-xs font-mono uppercase tracking-widest transition-all ${
                    selectedDuration === duration
                      ? 'bg-white text-black font-black border-white shadow-lg'
                      : 'bg-black/40 text-stone-300 border-stone-800 hover:border-stone-600'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Select Fitness */}
          <div className="space-y-4">
            <label className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 font-bold block">
              STEP 3: FITNESS LEVEL
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Beginner', 'Moderate', 'Challenging'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedFitness(level)}
                  className={`p-4 rounded-2xl border text-xs font-mono uppercase tracking-widest transition-all ${
                    selectedFitness === level
                      ? 'bg-white text-black font-black border-white shadow-lg'
                      : 'bg-black/40 text-stone-300 border-stone-800 hover:border-stone-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Result Bar */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-stone-400 uppercase">Estimated Expedition Estimate</span>
              <div className="font-space text-3xl font-black text-white">
                ₹12,500 – ₹18,999 <span className="text-xs font-mono text-stone-400">/ person</span>
              </div>
            </div>

            <button className="px-8 py-4 rounded-full bg-white text-black font-space font-black text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors shadow-2xl flex items-center gap-3">
              <span>GET CUSTOM ITINERARY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
