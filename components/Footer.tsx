import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-slate-100">MARY + Data & AI</h3>
          <p className="text-slate-400 text-sm mt-1">Data driven. Future ready.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Mary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;