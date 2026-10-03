import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PortfolioGrid from './components/sections/PortfolioGrid';
import AboutStudio from './components/sections/AboutStudio';
import StudioFacilities from './components/sections/StudioFacilities';
import Services from './components/sections/Services';
import StudioLocation from './components/sections/StudioLocation';
import Lightbox from './components/ui/Lightbox';
import BookingModal from './components/ui/BookingModal';
import { Instagram, MessageCircle, Video, Globe, Mail } from 'lucide-react';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-studio-charcoal text-studio-ivory min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid onSelectImage={(img) => setSelectedImage(img)} />
        <AboutStudio />
        <StudioFacilities />
        <Services onBook={(title) => { setSelectedPackage(title); setIsBookingOpen(true); }} />
        <StudioLocation />
      </main>

      <footer className="border-t border-studio-border bg-studio-charcoal py-12 px-8 text-center text-studio-muted text-sm space-y-6">
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com/atelierstudio.id" className="hover:text-studio-gold transition-colors"><Instagram size={20} /></a>
          <a href="https://wa.me/6281234567890" className="hover:text-studio-gold transition-colors"><MessageCircle size={20} /></a>
          <a href="https://tiktok.com/@atelierstudio" className="hover:text-studio-gold transition-colors"><Video size={20} /></a>
          <a href="https://behance.net/atelierstudio" className="hover:text-studio-gold transition-colors"><Globe size={20} /></a>
          <a href="mailto:hello@atelierstudio.com" className="hover:text-studio-gold transition-colors"><Mail size={20} /></a>
        </div>
        <p>© {new Date().getFullYear()} ATELIER STUDIO. ALL RIGHTS RESERVED.</p>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedPackage={selectedPackage} 
      />
    </div>
  );
}
