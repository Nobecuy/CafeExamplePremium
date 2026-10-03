import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { IMAGES } from '../../data/images';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal via-studio-charcoal/60 to-transparent" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.span variants={fadeIn} className="text-studio-gold uppercase tracking-[0.2em] text-xs mb-4 block">
          Photography & Art Direction
        </motion.span>
        <motion.h1 variants={fadeIn} className="font-heading text-4xl sm:text-6xl md:text-8xl text-studio-ivory mb-6 leading-tight">
          Capturing Moments <br /> <span className="italic text-studio-muted">Beyond Time</span>
        </motion.h1>
      </motion.div>

      {/* Press Strip */}
      <div className="absolute bottom-10 w-full overflow-hidden border-t border-b border-studio-border py-4 bg-studio-charcoal/50 backdrop-blur-sm z-20">
        <div className="flex animate-marquee whitespace-nowrap text-studio-muted text-xs uppercase tracking-widest gap-16">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>VOGUE</span> <span>ELLE</span> <span>BAZAAR</span> <span>GQ</span> <span>ARCHITECTURAL DIGEST</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
