
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! This is a demo form.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
    >
       <div className="grid lg:grid-cols-2 gap-16">
          <div>
              <h1 className="text-4xl font-bold text-white mb-6">Let's Work Together</h1>
              <p className="text-slate-400 text-lg mb-12">
                  Have a project in mind? Whether it's a quick analysis or a complex AI integration, I'm ready to discuss how we can create value from your data.
              </p>

              <div className="space-y-8">
                  <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <Mail className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                          <h3 className="text-white font-semibold">Email</h3>
                          <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                              {PROFILE.email}
                          </a>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                          <MapPin className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                          <h3 className="text-white font-semibold">Location</h3>
                          <p className="text-slate-400">{PROFILE.location}</p>
                      </div>
                  </div>
              </div>

              <div className="mt-12 p-6 bg-emerald-900/10 border border-emerald-900/30 rounded-xl">
                  <p className="text-emerald-400 font-medium mb-2">Currently Available for:</p>
                  <ul className="text-slate-300 space-y-1 text-sm list-disc pl-4">
                      <li>Strategic Analytics & Automation Engagements</li>
                      <li>AI Systems Architecture & Implementation</li>
                      <li>End-to-End Business Process Optimization</li>
                  </ul>
              </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Your Name"
                      />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="john@company.com"
                      />
                  </div>
                  <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                      <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                          <option value="">Select a topic</option>
                          <option value="consulting">Consulting Inquiry</option>
                          <option value="project">Project Proposal</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                      <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="Tell me about your project..."
                      />
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                      <Send className="w-4 h-4" /> Send Message
                  </button>
              </form>
          </div>
       </div>
    </motion.div>
  );
};

export default Contact;
