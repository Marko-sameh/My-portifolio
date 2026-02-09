/**
 * Performance-optimized animation configuration
 * Uses GPU-accelerated properties and respects user preferences
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check device capabilities
export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  return navigator.hardwareConcurrency <= 4 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// GPU-accelerated properties only
export const SAFE_ANIMATION_PROPS = {
  transform: true,
  opacity: true,
  filter: true,
};

// Base animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const scale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Optimized transition configs
export const TRANSITIONS = {
  fast: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  normal: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springBouncy: { type: "spring", stiffness: 400, damping: 20, bounce: 0.2 },
};

// Conditional animation helper
export const getAnimation = (animation, condition = true) => {
  if (prefersReducedMotion() || !condition) {
    return {};
  }
  return animation;
};

// Hover animation helper
export const getHoverAnimation = (scale = 1.05) => {
  if (prefersReducedMotion() || isLowEndDevice()) {
    return {};
  }
  return { scale };
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
