'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Briefcase, Palette } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

export default function ModeToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const { isRecruiterMode, setIsRecruiterMode } = useRecruiterMode();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    setIsRecruiterMode(pathname === '/recruiter');
  }, [pathname, setIsRecruiterMode]);

  const toggleMode = () => {
    const newMode = !isRecruiterMode;
    setAnnouncement(newMode ? 'Switched to Recruiter Mode' : 'Switched to Creative Mode');
    
    if (isRecruiterMode) {
      router.push('/');
    } else {
      router.push('/recruiter');
    }
  };

  return (
    <>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={toggleMode}
          className={`
            group flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-300 shadow-lg backdrop-blur-sm
            ${isRecruiterMode
              ? 'bg-white/90 text-slate-900 border border-slate-200 hover:bg-white hover:shadow-xl'
              : 'bg-slate-900/90 text-white hover:bg-slate-800 hover:shadow-xl'
            }
          `}
          aria-label={isRecruiterMode ? 'Switch to Creative Mode' : 'Switch to Recruiter Mode'}
        >
          {isRecruiterMode ? (
            <>
              <Palette className="w-4 h-4 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="text-sm font-medium">Creative Mode</span>
            </>
          ) : (
            <>
              <Briefcase className="w-4 h-4 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="text-sm font-medium">Recruiter Mode</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}