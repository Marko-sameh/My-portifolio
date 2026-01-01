'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/../public/dark_logo_wbg.png"

export default function RecruiterNav() {
  const router = useRouter();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b border-slate-200 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-40 transition-transform duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button onClick={() => scrollTo('about')}>
          <div
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
              className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-10 h-8 sm:w-12 sm:h-10 md:w-15 md:h-12 lg:w-20 lg:h-16"
              priority
            />
          </div>
        </button>

        <div className="hidden md:flex gap-4 lg:gap-6">
          <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">About</button>
          <button onClick={() => scrollTo('metrics')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Metrics</button>
          <button onClick={() => scrollTo('skills')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Skills</button>
          <button onClick={() => scrollTo('experience')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Experience</button>
          <button onClick={() => scrollTo('projects')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm lg:text-base">Projects</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-slate-200 px-4 py-3">
        <div className="flex flex-col space-y-3">
          <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-slate-900 transition-colors text-left text-sm">About</button>
          <button onClick={() => scrollTo('metrics')} className="text-slate-600 hover:text-slate-900 transition-colors text-left text-sm">Metrics</button>
          <button onClick={() => scrollTo('skills')} className="text-slate-600 hover:text-slate-900 transition-colors text-left text-sm">Skills</button>
          <button onClick={() => scrollTo('experience')} className="text-slate-600 hover:text-slate-900 transition-colors text-left text-sm">Experience</button>
          <button onClick={() => scrollTo('projects')} className="text-slate-600 hover:text-slate-900 transition-colors text-left text-sm">Projects</button>
        </div>
      </div>
    </nav >
  );
}