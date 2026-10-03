import { Variants } from 'framer-motion';

export const transition = { 
  duration: 0.8, 
  ease: [0.22, 1, 0.36, 1] 
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ...transition }
  }
};

export const imageHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition }
};
