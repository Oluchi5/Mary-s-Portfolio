import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Data Analytics', 'AI & Automation'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">Featured Projects</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A selection of case studies demonstrating data-driven problem solving and intelligent automation.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
            <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                    filter === category
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600'
                }`}
            >
                {category}
            </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={project.id}
                    className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-lg flex flex-col"
                >
                    <div className="relative h-64 overflow-hidden shrink-0">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur px-3 py-1 rounded-full text-xs text-emerald-400 border border-slate-700 uppercase tracking-wide font-semibold">
                            {project.category}
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 mb-6 text-sm flex-grow">{project.summary}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.slice(0, 4).map(tech => (
                                <span key={tech} className="text-xs px-2 py-1 bg-slate-950 text-slate-300 rounded border border-slate-800">
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="text-xs px-2 py-1 bg-slate-950 text-slate-500 rounded border border-slate-800">
                                    +{project.technologies.length - 4}
                                </span>
                            )}
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <Link 
                                to={`/projects/${project.id}`}
                                className="flex-1 text-center py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors font-medium border border-slate-700"
                            >
                                View Case Study
                            </Link>
                            {project.demoLink && (
                                <a 
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors border border-emerald-500 shadow-lg shadow-emerald-900/20 group-hover:scale-105"
                                    title="Interact with Project (Live Demo)"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
              No projects found in this category.
          </div>
      )}
    </motion.div>
  );
};

export default Projects;