import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, BarChart, Zap, Brain } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BarChart: <BarChart className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Brain: <Brain className="w-10 h-10" />,
};

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Consulting Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Specialized solutions tailored to your data needs. From cleaning raw data to deploying autonomous AI agents.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 flex flex-col"
          >
            <div className="mb-6 p-4 bg-slate-950 rounded-xl w-fit text-emerald-400 group-hover:scale-110 transition-transform duration-300 border border-slate-800 shadow-lg">
              {iconMap[service.icon]}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
              {service.shortDescription}
            </p>

            <ul className="mb-8 space-y-2">
                {service.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        {item}
                    </li>
                ))}
            </ul>

            <Link 
                to={`/services/${service.id}`}
                className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-auto"
            >
                View Service Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
          <h3 className="text-xl text-white font-bold mb-2">Don't see exactly what you need?</h3>
          <p className="text-slate-400 mb-6">I offer custom packages for hybrid projects involving both analytics and AI automation.</p>
          <Link to="/contact" className="text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact for Custom Quote
          </Link>
      </div>
    </motion.div>
  );
};

export default Services;