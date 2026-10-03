import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';

const packages = [
  {
    title: 'Portrait & Personal Branding',
    price: 'Rp 450.000',
    features: ['1 Jam Sesi Studio', '1 Look / Outfit', '5 High-Res Retouched Photos', 'All Softcopy RAW via Google Drive'],
    popular: false
  },
  {
    title: 'Group / Graduation / Family',
    price: 'Rp 850.000',
    features: ['1.5 Jam Sesi Studio', 'Up to 6 People', '10 Retouched Photos', 'Free Printed Photos (4R + Frame)'],
    popular: true
  },
  {
    title: 'Editorial & Lookbook Campaign',
    price: 'Rp 1.800.000',
    features: ['Half Day Session (3 Jam)', 'Unlimited Outfit Changes', '15 Retouched Photos + Color Grading', 'Full Commercial Rights'],
    popular: false
  },
  {
    title: 'Catalog / Brand Product Shoot',
    price: 'Rp 2.500.000',
    features: ['Full Day Shoot (6 Jam)', 'Lighting Setup Included', 'Up to 20 Products', 'High-Res Edited Photos'],
    popular: false
  },
  {
    title: 'Private Studio Hire',
    price: 'Rp 150.000 / jam',
    features: ['Full Lighting Gear (Profoto / Godox)', 'Cyclorama Wall 360°', 'Dressing Room', 'Wi-Fi & AC (Min. 2 jam)'],
    popular: false
  }
];

export default function Services({ onBook }) {
  return (
    <section id="services" className="py-12 md:py-16 px-6 md:px-12 bg-studio-charcoal border-t border-studio-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl text-studio-ivory text-center mb-16"
        >
          Studio Packages
        </motion.h2>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {packages.map((pkg, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className={`p-8 border border-studio-border bg-studio-card relative flex flex-col ${pkg.popular ? 'ring-1 ring-studio-gold' : ''}`}
            >
              {pkg.popular && <span className="absolute top-0 right-0 bg-studio-gold text-studio-charcoal text-[10px] font-bold px-3 py-1 uppercase">Popular</span>}
              <h3 className="font-heading text-2xl text-studio-ivory mb-4">{pkg.title}</h3>
              <div className="text-2xl font-heading text-studio-gold mb-6">{pkg.price}</div>
              <ul className="text-studio-muted text-sm space-y-3 mb-8 flex-grow">
                {pkg.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button 
                onClick={() => onBook(pkg.title)}
                className="w-full text-center border border-studio-border py-3 text-sm text-studio-ivory hover:bg-studio-gold hover:text-studio-charcoal transition-colors duration-300"
              >
                Inquire Package
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
