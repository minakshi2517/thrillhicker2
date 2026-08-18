import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Mountain, ShieldCheck, Footprints, Award } from 'lucide-react';

export default function ExploreSection() {
  return (
    <section id="explore" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-stone-900/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-stone-800/80 pb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.35em] uppercase text-stone-400 font-extrabold">
              <Compass className="w-4 h-4 text-white" />
              <span>01. EXPLORE THRILLHIKERS</span>
            </div>
            
            <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-tight text-white">
              UNBOUNDED HIMALAYAN <br />
              <span className="text-stone-400">WILDERNESS TRAILS</span>
            </h2>
          </div>

          <p className="text-stone-300 text-base sm:text-lg font-sans leading-relaxed max-w-xl">
            We curate high-altitude mountain expeditions, sacred Himalayan ridge treks, and alpine wilderness journeys guided by certified survival navigators.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Mountain,
              number: '01',
              title: 'High-Altitude Routes',
              desc: 'Trek across untouched Himalayan passes exceeding 4,000m altitude with breathtaking summit panoramas.'
            },
            {
              icon: ShieldCheck,
              number: '02',
              title: 'Certified Safety',
              desc: 'Every expedition includes satellite GPS tracking, wilderness medics, and emergency oxygen systems.'
            },
            {
              icon: Footprints,
              number: '03',
              title: 'Sacred Pilgrimage Trails',
              desc: 'Follow ancient stone pathways to millennium-old temples like Kedarnath and cliffside Spiti monasteries.'
            },
            {
              icon: Award,
              number: '04',
              title: 'Expert Navigators',
              desc: 'Led by native Himalayan mountaineers with decades of summit survival and ridge navigation experience.'
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-600 transition-all duration-500 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black border border-stone-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-space text-lg font-black text-stone-500">{item.number}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-space text-xl font-bold uppercase text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-sm font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
