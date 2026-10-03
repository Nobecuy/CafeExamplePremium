import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { Instagram, MessageCircle, Video, Globe, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/atelierstudio.id' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/6281234567890' },
  { name: 'TikTok', icon: Video, href: 'https://tiktok.com/@atelierstudio' },
  { name: 'Behance', icon: Globe, href: 'https://behance.net/atelierstudio' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@atelierstudio.com' },
];

export default function StudioLocation() {
  return (
    <section id="contact" className="pt-12 md:pt-16 pb-24 px-8 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
          <div className="space-y-4">
            <motion.h2 variants={fadeIn} className="font-heading text-5xl text-studio-ivory">Contact Us</motion.h2>
            <motion.p variants={fadeIn} className="text-studio-muted">Ready to create something extraordinary? Let's talk.</motion.p>
          </div>
          
          <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-studio-muted hover:text-studio-gold transition-colors duration-300"
              >
                <link.icon size={20} />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Map */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-96 border border-studio-border overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3090885236717!2d106.81552551535787!3d-6.224131595494441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14b306b6a25%3A0x6e7e1742407519a8!2sSenopati%2C%20Kebayoran%20Baru!5e0!3m2!1sid!2sid!4v1696230000000!5m2!1sid!2sid" 
            width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
