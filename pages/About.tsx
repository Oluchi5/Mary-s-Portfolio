import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, METRICS, PHILOSOPHY_PRINCIPLES } from '../constants';
import { Download, Play, Image as ImageIcon, Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<'photo' | 'video'>('photo');

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-8 h-8 text-emerald-400 mb-4" />;
      case 1: return <Target className="w-8 h-8 text-emerald-400 mb-4" />;
      case 2: return <Users className="w-8 h-8 text-emerald-400 mb-4" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-center">
        {/* Media Slider Section */}
        <div className="order-2 lg:order-1 relative group">
           <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3] shadow-2xl">
              {activeMedia === 'photo' ? (
                <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Mary Profile" 
                    className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500">
                    {/* Placeholder for video */}
                    <div className="text-center p-8">
                        <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Introduction Video Placeholder</p>
                    </div>
                </div>
              )}
           </div>

           {/* Toggle Controls */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-1 bg-slate-950/80 backdrop-blur rounded-full border border-slate-800">
               <button 
                onClick={() => setActiveMedia('photo')}
                className={`p-2 rounded-full transition-colors ${activeMedia === 'photo' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'}`}
               >
                   <ImageIcon className="w-4 h-4" />
               </button>
               <button 
                onClick={() => setActiveMedia('video')}
                className={`p-2 rounded-full transition-colors ${activeMedia === 'video' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'}`}
               >
                   <Play className="w-4 h-4" />
               </button>
           </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            <div className="prose prose-invert prose-lg text-slate-300">
                <p className="text-xl leading-relaxed font-light text-white mb-6 whitespace-pre-line">
                    {PROFILE.bio}
                </p>
            </div>
            
            <div className="mt-8 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 font-medium">
                    <Download className="w-4 h-4" /> Download CV
                </button>
            </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-slate-800 my-16 bg-slate-900/30 rounded-2xl">
          {METRICS.map((metric, idx) => (
              <div key={idx} className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                  <div className="text-slate-400 uppercase tracking-wide text-sm font-medium">{metric.label}</div>
              </div>
          ))}
      </div>

      {/* Philosophy Section */}
      <div className="py-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">My Philosophy</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
                I believe every business has a story, and my goal is to turn that story into actionable strategies that drive growth, efficiency, and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              {PHILOSOPHY_PRINCIPLES.map((item, idx) => (
                   <div key={idx} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors hover:bg-slate-900/80 group">
                      {getIcon(idx)}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                   </div>
              ))}
          </div>
      </div>
    </motion.div>
  );
};

export default About;