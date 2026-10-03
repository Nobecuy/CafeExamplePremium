import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { IMAGES } from '../../data/images';

const facilities = [
  { title: 'Cyclorama Wall', tag: '360° View' },
  { title: 'Lighting Gear', tag: 'Profoto B10X' },
  { title: 'Dressing Room', tag: 'Private' },
];

export default function StudioFacilities() {
  return (
    <section className="py-24 px-6 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-heading text-5xl text-studio-ivory mb-16">Studio Assets</motion.h2>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <motion.div key={i} variants={fadeIn} className="group relative h-96 overflow-hidden border border-studio-border">
              <img src={IMAGES.facilities} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 bg-studio-charcoal/80 backdrop-blur px-3 py-1 text-[10px] uppercase text-studio-gold border border-studio-border">
                {item.tag}
              </div>
              <div className="absolute bottom-6 left-6 text-studio-ivory font-heading text-2xl">{item.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
