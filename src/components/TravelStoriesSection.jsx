import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Quote } from 'lucide-react';

const STORIES = [
  {
    name: 'Aarav Sharma',
    location: 'Kedarnath Ridge Trek',
    quote: 'Standing in front of Kedarnath temple as the morning sun hit the snow peaks was the single most spiritual experience of my life. ThrillHikers managed everything flawlessly.',
    rating: 5,
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Priya Nair',
    location: 'Kashmir Great Lakes',
    quote: 'Seven alpine lakes in seven days! The wilderness medics and navigators made sure we felt 100% safe even at 4,200m altitude. Highly recommended!',
    rating: 5,
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Rohan Mehta',
    location: 'Spiti Cold Desert Circuit',
    quote: 'Camping at Chandra Taal under millions of stars was magical. The guides were extremely knowledgeable about native Himalayan geography and culture.',
    rating: 5,
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];

export default function TravelStoriesSection() {
  return (
    <section id="travel-stories" className="relative py-32 bg-stone-950 text-white px-6 md:px-16 overflow-hidden border-t border-stone-900">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-stone-400 font-extrabold">
              <MessageSquare className="w-4 h-4 text-white" />
              <span>06. TREKKER JOURNALS</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
              TRAVEL STORIES
            </h2>
          </div>

          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-md">
            Real stories, personal journals, and experiences shared by adventurers who summitted with ThrillHikers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 hover:border-stone-600 transition-all flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-stone-600" />
                <p className="text-stone-300 text-sm font-sans italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-800">
                <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full object-cover border border-stone-700" />
                <div>
                  <h4 className="font-space text-base font-bold text-white">{story.name}</h4>
                  <span className="text-xs font-mono text-stone-400 block">{story.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
