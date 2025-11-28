import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
    >
      <Link to="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
      </Link>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-slate-800 pb-8">
              <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h1>
                  <p className="text-slate-400 text-lg">{service.shortDescription}</p>
              </div>
              <div className="text-left md:text-right min-w-fit">
                  <p className="text-slate-400 text-sm uppercase tracking-wide">Starting at</p>
                  <p className="text-3xl font-bold text-emerald-400">{service.startingPrice}</p>
                  <p className="text-xs text-slate-500 mt-1">*Final price depends on scope</p>
              </div>
          </div>

          <div className="prose prose-invert prose-lg text-slate-300 mb-12">
              <p className="leading-relaxed">{service.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Deliverables</h3>
                  <ul className="space-y-4">
                      {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="bg-slate-950 p-8 rounded-xl border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Engagement Process</h3>
                  <ol className="relative border-l border-slate-800 ml-3 space-y-6">
                      <li className="ml-6">
                          <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <h4 className="font-semibold text-white">Discovery Call</h4>
                          <p className="text-sm text-slate-400 mt-1">Understanding your goals and data availability.</p>
                      </li>
                      <li className="ml-6">
                          <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <h4 className="font-semibold text-slate-300">Proposal & Strategy</h4>
                          <p className="text-sm text-slate-500 mt-1">Defining deliverables, timeline, and tools.</p>
                      </li>
                      <li className="ml-6">
                          <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <h4 className="font-semibold text-slate-300">Execution</h4>
                          <p className="text-sm text-slate-500 mt-1">Building the solution with regular updates.</p>
                      </li>
                      <li className="ml-6">
                          <span className="absolute -left-[5px] mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                          <h4 className="font-semibold text-slate-300">Handoff & Support</h4>
                          <p className="text-sm text-slate-500 mt-1">Documentation, training, and deployment.</p>
                      </li>
                  </ol>
              </div>
          </div>

          <div className="text-center">
              <Link to="/contact" className="inline-block w-full md:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-emerald-900/40">
                  Book This Service
              </Link>
          </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;