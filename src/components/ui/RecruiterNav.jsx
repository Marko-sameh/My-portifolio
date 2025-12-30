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
    <nav className="bg-white border-b border-slate-200 py-4 px-8 fixed top-0 left-0 right-0 z-40 transition-transform duration-300">
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
              className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-15 h-12 sm:w-17 sm:h-14 md:w-20 md:h-16"
              priority
            />
          </div>
        </button>

        <div className="flex gap-6">
          <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-slate-900 transition-colors">About</button>
          <button onClick={() => scrollTo('metrics')} className="text-slate-600 hover:text-slate-900 transition-colors">Metrics</button>
          {/* <button onClick={() => scrollTo('work')} className="text-slate-600 hover:text-slate-900 transition-colors">How I Work</button> */}
          {/* <button onClick={() => scrollTo('strengths')} className="text-slate-600 hover:text-slate-900 transition-colors">Strengths</button> */}
          <button onClick={() => scrollTo('skills')} className="text-slate-600 hover:text-slate-900 transition-colors">Skills</button>
          <button onClick={() => scrollTo('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">Experience</button>
          <button onClick={() => scrollTo('projects')} className="text-slate-600 hover:text-slate-900 transition-colors">Projects</button>
        </div>

      </div>
    </nav >
  );
}