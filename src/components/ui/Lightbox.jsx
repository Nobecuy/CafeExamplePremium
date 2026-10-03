import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ isOpen, onClose, image }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-studio-charcoal/90 backdrop-blur-sm p-8"
        >
          <motion.img 
            initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
            src={image} className="max-h-full object-contain border border-studio-border"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
