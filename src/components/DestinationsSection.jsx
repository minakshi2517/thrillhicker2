import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 'kedarnath',
    name: 'Kedarnath Temple Trek',
    region: 'UTTARAKHAND',
    duration: '6 Days / 5 Nights',
    altitude: '3,583m',
    price: '₹14,999',
    rating: 4.9,
    reviews: 148,
    image: '/kedarnath_upright.jpg'
  },
  {
    id: 'spiti',
    name: 'Spiti Valley Cold Desert',
    region: 'HIMACHAL',
    duration: '8 Days / 7 Nights',
    altitude: '4,270m',
    price: '₹19,500',
    rating: 4.96,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'kashmir',
    name: 'Kashmir Great Lakes',
    region: 'KASHMIR',
    duration: '7 Days / 6 Nights',
    altitude: '4,190m',
    price: '₹18,499',
    rating: 4.98,
    reviews: 195,
    image: '/kashmir.jpg'
  },
  {
    id: 'kasol-manali',
    name: 'Kasol & Parvati Valley',
    region: 'HIMACHAL',
    duration: '5 Days / 4 Nights',
    altitude: '3,050m',
    price: '₹11,999',
    rating: 4.88,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <MapPin className="w-4 h-4 text-white" />
              <span>02. FEATURED DESTINATIONS</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              HIMALAYAN DESTINATIONS
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            Handpicked high-altitude mountain trails, sacred temple pilgrimages, and turquoise alpine lake circuits.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-stone-900/60 border border-stone-800 hover:border-stone-600 transition-all duration-500 h-[460px] flex flex-col justify-between p-6 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />

              {/* Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white font-extrabold">
                  {dest.region}
                </span>
                <span className="text-xs font-mono text-stone-300 font-bold">{dest.altitude}</span>
              </div>

              {/* Bottom Row */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {dest.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {dest.rating}
                  </span>
                </div>

                <h3 className="font-space text-2xl font-bold uppercase text-white group-hover:text-amber-200 transition-colors leading-tight">
                  {dest.name}
                </h3>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Starting From</span>
                    <span className="font-space text-xl font-black text-white">{dest.price}</span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white text-black group-hover:bg-amber-300 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-5 h-5 font-bold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
