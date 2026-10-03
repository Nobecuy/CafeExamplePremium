import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedPackage }) {
  const [formData, setFormData] = useState({ name: '', date: '', notes: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Halo Atelier Studio!\n\nSaya ingin melakukan booking:\n*Paket: ${selectedPackage}*\n\nNama: ${formData.name}\nTanggal: ${formData.date}\nCatatan: ${formData.notes}`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    onClose();
    // Reset form after submit
    setFormData({ name: '', date: '', notes: '' });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-studio-charcoal/90 backdrop-blur-sm p-6"
      >
        <motion.div 
          initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
          className="bg-studio-card border border-studio-border p-8 w-full max-w-md relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-studio-muted hover:text-studio-ivory"><X size={20} /></button>
          <h2 className="font-heading text-2xl text-studio-ivory mb-6">Booking: {selectedPackage}</h2>
          
          <form onSubmit={handleWhatsApp} className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="w-full bg-studio-charcoal border border-studio-border p-3 text-studio-ivory focus:border-studio-gold outline-none transition-colors" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              type="date" 
              required 
              className="w-full bg-studio-charcoal border border-studio-border p-3 text-studio-muted focus:border-studio-gold outline-none transition-colors" 
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})} 
            />
            <textarea 
              placeholder="Notes / Special Request" 
              className="w-full bg-studio-charcoal border border-studio-border p-3 text-studio-ivory h-24 focus:border-studio-gold outline-none transition-colors" 
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})} 
            />
            <button type="submit" className="w-full bg-studio-gold text-studio-charcoal py-3 font-bold uppercase tracking-widest hover:bg-studio-gold/90 transition-colors">
              Continue to WhatsApp
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
