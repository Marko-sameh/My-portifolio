'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "@/../public/logo-removebg-preview.png"
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
import RecruiterNav from './RecruiterNav';

const NAV_ITEMS = [
  { path: "/", label: "Home", ariaLabel: "Navigate to Home page" },
  { path: "/Identity", label: "Identity", ariaLabel: "Navigate to Identity page" },
  { path: "/Mastery", label: "Mastery", ariaLabel: "Navigate to Mastery page" },
  { path: "/Builds", label: "Builds", ariaLabel: "Navigate to Builds page" },
  { path: "/Core", label: "Core", ariaLabel: "Navigate to Core page" },
  { path: "/beyond", label: "Beyond", ariaLabel: "Navigate to Beyond page" },
  { path: "/Signal", label: "Signal", ariaLabel: "Navigate to Signal page" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { isRecruiterMode } = useRecruiterMode();

  const handleBannerChange = useCallback((e) => setBannerVisible(e.detail), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  useEffect(() => {
    window.addEventListener('bannerVisibilityChange', handleBannerChange);
    setBannerVisible(window.bannerVisible ?? true);
    return () => window.removeEventListener('bannerVisibilityChange', handleBannerChange);
  }, [handleBannerChange]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };
    
    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    handleScroll();
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  if (isRecruiterMode) {
    return <RecruiterNav />;
  }

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 z-30 transition-all duration-300 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
        style={{ top: bannerVisible ? '50px' : '0px' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" aria-label="Go to homepage - Marko Sameh Portfolio">
              <motion.div
                className="relative cursor-pointer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span
                  className="absolute inset-0 rounded-full blur-xl opacity-70"
                  style={{
                    background: `radial-gradient(circle, var(--emotion-primary), transparent 40%)`,
                  }}
                  aria-hidden="true"
                />
                <Image
                  alt="Marko Sameh - Frontend Developer Logo"
                  src={logo}
                  width={60}
                  height={60}
                  className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-15 h-12 sm:w-17 sm:h-14 md:w-20 md:h-16"
                  priority
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 80px"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-1 items-center bg-white/5 rounded-full px-2 py-2 border border-white/10" role="menubar">
              {NAV_ITEMS.map((item) => (
                <li key={item.path} role="none">
                  <Link href={item.path} aria-label={item.ariaLabel}>
                    <motion.button
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black ${pathname === item.path ? "text-white" : "text-white/60 hover:text-white/90"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      role="menuitem"
                      aria-current={pathname === item.path ? 'page' : undefined}
                      type="button"
                    >
                      {pathname === item.path && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full border"
                          style={{ background: 'color-mix(in srgb, var(--emotion-primary) 20%, transparent)', borderColor: 'rgba(var(--emotion-primary-rgb), 0.3)' }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={closeMobileMenu} />
            <motion.div
              className="relative flex flex-col items-center justify-center min-h-screen px-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-6 right-6">
                <motion.button
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={closeMobileMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close mobile menu"
                >
                  <X size={24} aria-hidden="true" />
                </motion.button>
              </div>

              <nav className="space-y-6" role="navigation" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link href={item.path} onClick={closeMobileMenu} aria-label={item.ariaLabel}>
                      <motion.button
                        className={`block w-full text-center px-8 py-4 rounded-2xl text-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${pathname === item.path
                          ? "text-white bg-gradient-to-r from-[var(--accent)] to-[var(--background)] shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-current={pathname === item.path ? 'page' : undefined}
                      >
                        {item.label}
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Throttle utility function
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}