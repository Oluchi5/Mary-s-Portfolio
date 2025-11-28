
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Github, Trophy, Target, Lightbulb } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
    >
        <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
                 <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">{project.category}</span>
                 <h1 className="text-4xl font-bold text-white mt-2 mb-6">{project.title}</h1>
                 <p className="text-xl text-slate-300 leading-relaxed mb-8">
                     {project.description}
                 </p>
                 
                 <div className="flex gap-4">
                     {project.repoLink && (
                         <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors">
                             <Github className="w-4 h-4" /> View Code
                         </a>
                     )}
                     {project.demoLink && (
                         <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors">
                             <ExternalLink className="w-4 h-4" /> Live Demo
                         </a>
                     )}
                 </div>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                        The Challenge & Approach
                    </h2>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5" /> The Challenge
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {project.challenge || project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5" /> The Approach
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {project.approach || "Detailed methodology not available for this project."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-slate-950 text-slate-300 text-sm rounded border border-slate-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {project.results && project.results.length > 0 && (
                    <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 p-6 rounded-xl border border-emerald-900/50">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-emerald-400" /> Key Results
                        </h3>
                        <ul className="space-y-3">
                            {project.results.map((res, idx) => (
                                <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                                    <span className="text-emerald-500 font-bold mt-1">•</span>
                                    <span>{res}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
  );
};

export default ProjectDetail;
