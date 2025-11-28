
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart2, Brain, Zap, LineChart, CheckCircle } from 'lucide-react';
import { PROFILE, SKILL_GROUPS, WHY_CHOOSE_ME } from '../constants';

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "I am a Data Analyst",
    "I am an AI Engineer",
    "I am a Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between gap-12">
            <div className="md:w-3/5 space-y-8">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-medium border border-emerald-800/50 mb-4 uppercase tracking-wider">
                        {PROFILE.availability}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                        Hi, I'm Mary
                    </h1>
                    
                    {/* Dynamic Text Animation */}
                    <div className="h-12 md:h-16 relative mb-6">
                        <AnimatePresence mode="wait">
                            <motion.h2 
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 absolute top-0 left-0 md:left-0 right-0"
                            >
                                {roles[roleIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </motion.div>
                
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl leading-relaxed mt-2"
                >
                    {PROFILE.tagline}
                </motion.p>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
                >
                    <Link to="/projects" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/20">
                        View Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/contact" className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
                        Work With Me
                    </Link>
                </motion.div>
            </div>

            {/* Skill Cards Grid */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:grid grid-cols-2 gap-4 w-full md:w-2/5"
            >
                 <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
                     <BarChart2 className="w-8 h-8 text-emerald-400 mb-3" />
                     <h3 className="font-semibold text-white mb-1">Data Analytics</h3>
                     <p className="text-xs text-slate-400">Dashboards • Insights • Data Cleaning • EDA</p>
                 </div>
                 
                 <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors mt-8">
                     <Brain className="w-8 h-8 text-purple-400 mb-3" />
                     <h3 className="font-semibold text-white mb-1">AI Engineering</h3>
                     <p className="text-xs text-slate-400">RAG • Chatbots • Knowledge Bases</p>
                 </div>

                 <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors -mt-8">
                     <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                     <h3 className="font-semibold text-white mb-1">Automation</h3>
                     <p className="text-xs text-slate-400">Zapier • Make • API Integrations • Agents</p>
                 </div>

                 <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
                     <LineChart className="w-8 h-8 text-blue-400 mb-3" />
                     <h3 className="font-semibold text-white mb-1">Machine Learning</h3>
                     <p className="text-xs text-slate-400">Supervised • Unsupervised • Forecasting • Computer Vision</p>
                 </div>
            </motion.div>
        </div>
      </section>

      {/* Why Choose Me - Horizontal Slider */}
      <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 mb-10">
              <h2 className="text-2xl font-bold text-white text-center mb-12">Why Choose Me?</h2>
          </div>
          <div className="w-full overflow-x-auto pb-8 hide-scrollbar px-4">
              <div className="flex gap-6 min-w-max mx-auto max-w-7xl">
                  {WHY_CHOOSE_ME.map((reason, idx) => (
                      <div key={idx} className="w-72 p-6 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0 hover:border-emerald-500/30 transition-colors">
                          <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Technologies - Text Only */}
      <section className="py-20 border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Technologies I Work With</h2>
                <p className="text-slate-400 text-sm">A snapshot of my preferred stack.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILL_GROUPS.map((group, idx) => (
                    <div key={idx} className="bg-transparent">
                        <h3 className="text-emerald-400 font-semibold mb-3 uppercase tracking-wide text-sm border-b border-slate-800 pb-2 inline-block">
                            {group.category}
                        </h3>
                        <p className="text-slate-300 leading-loose">
                            {group.items.join(" • ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-emerald-950/20">
        <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to take your business from complexity to clarity?</h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
                From detailed analysis to custom AI agents and automated workflows, I create solutions that support your business at every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/50">
                    Work With Me
                </Link>
                <Link to="/projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all border border-slate-700">
                    View Projects
                </Link>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
