import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { projects } from '../../data/portfolioData';

export default function PortfolioGrid({ onSelectImage }) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="py-24 px-6 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <h2 className="font-heading text-5xl text-studio-ivory">Selected Works</h2>
          <div className="flex gap-4 text-studio-muted text-sm uppercase tracking-widest">
            {['All', 'Fashion', 'Portrait', 'Commercial'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`transition-colors duration-300 ${filter === cat ? 'text-studio-gold' : 'hover:text-studio-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => onSelectImage(project.image)}
                className="relative group overflow-hidden bg-studio-card border border-studio-border h-80 cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-studio-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <p className="text-studio-gold text-xs uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-studio-ivory font-heading text-2xl">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
