'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/Identity", label: "Identity" },
  { path: "/Mastery", label: "Mastery" },
  { path: "/Builds", label: "Builds" },
  { path: "/Core", label: "Core" },
  { path: "/beyond", label: "Beyond" },
  { path: "/Signal", label: "Signal" },
];

const SECTIONS = ["Home", "Identity", "Mastery", "Builds", "Core", "Beyond", "Signal"];

export default function Nav() {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

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
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 h-[10%]  ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl border-b border-white/5 h-[10%]" />
      <div className="relative max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.span
              className="text-2xl font-bold cursor-pointer"
              style={{ background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Marko
            </motion.span>
          </Link>

          <ul className="hidden md:flex gap-1 items-center bg-white/5 rounded-full px-2 py-2 border border-white/10">
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

          <select
            className="md:hidden bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm outline-none"
            value={pathname}
            onChange={(e) => window.location.href = e.target.value}
          >
            {NAV_ITEMS.map((item) => (
              <option key={item.path} value={item.path} className="bg-black">
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.nav>
  );
}