import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-studio-charcoal/80 border-b border-studio-border"
    >
      <div className="text-xl font-heading tracking-widest text-studio-ivory cursor-pointer" onClick={() => window.scrollTo(0,0)}>ATELIER</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-studio-muted">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className={`transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-studio-gold' : 'hover:text-studio-gold'}`}>
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-studio-ivory" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[77px] bg-studio-charcoal flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-2xl font-heading text-studio-ivory" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
