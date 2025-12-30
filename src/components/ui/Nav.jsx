'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "@/../public/logo-removebg-preview.png"
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
import RecruiterNav from './RecruiterNav';

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/Identity", label: "Identity" },
  { path: "/Mastery", label: "Mastery" },
  { path: "/Builds", label: "Builds" },
  { path: "/Core", label: "Core" },
  { path: "/beyond", label: "Beyond" },
  { path: "/Signal", label: "Signal" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    const handleBannerChange = (e) => setBannerVisible(e.detail);
    window.addEventListener('bannerVisibilityChange', handleBannerChange);
    setBannerVisible(window.bannerVisible ?? true);
    return () => window.removeEventListener('bannerVisibilityChange', handleBannerChange);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isRecruiterMode) {
    return <RecruiterNav></RecruiterNav>
  }

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 z-30 transition-all duration-300 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
        style={{ top: bannerVisible ? '64px' : '0px' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/">
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
                />
                <Image
                  alt="Marko Logo"
                  src={logo}
                  width={60}
                  height={60}
                  className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-15 h-12 sm:w-17 sm:h-14 md:w-20 md:h-16"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-1 items-center bg-white/5 rounded-full px-2 py-2 border border-white/10">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <motion.button
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${pathname === item.path ? "text-white" : "text-white/60 hover:text-white/90"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pathname === item.path && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full border"
                          style={{ background: 'color-mix(in srgb, var(--emotion-primary) 20%, transparent)', borderColor: 'rgba(var(--emotion-primary-rgb), 0.3)' }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
            <motion.div
              className="relative flex flex-col items-center justify-center min-h-screen px-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-6 right-6">
                <motion.button
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <nav className="space-y-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.button
                        className={`block w-full text-center px-8 py-4 rounded-2xl text-xl font-medium transition-all ${pathname === item.path
                          ? "text-white bg-gradient-to-r from-[var(--accent)] to-[var(--background)] shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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