import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';

const stats = [
  { label: 'Editorial Campaigns', value: '150+' },
  { label: 'Fashion Covers', value: '12' },
  { label: 'Studio Space (m²)', value: '450' },
];

export default function AboutStudio() {
  return (
    <section id="about" className="py-24 px-8 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <motion.h2 variants={fadeIn} className="font-heading text-5xl text-studio-ivory mb-8">Manifesto</motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-studio-muted max-w-3xl leading-relaxed">
            Atelier Studio was founded on the belief that photography is a dialogue between light, form, and emotion. We provide a space where vision transcends technique, fostering an environment where luxury becomes an everyday experience.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeIn} className="p-8 border border-studio-border bg-studio-card">
              <div className="text-4xl font-heading text-studio-gold mb-2">{stat.value}</div>
              <div className="text-studio-muted uppercase tracking-widest text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
