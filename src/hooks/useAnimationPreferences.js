"use client";

import { useState, useEffect } from 'react';

export function useAnimationPreferences() {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    isMobile: false,
    isLowEnd: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkMobile = () => window.innerWidth < 768;
    const checkLowEnd = () => navigator.hardwareConcurrency <= 4;

    const updatePreferences = () => {
      setPreferences({
        reducedMotion: mediaQuery.matches,
        isMobile: checkMobile(),
        isLowEnd: checkLowEnd(),
      });
    };

    updatePreferences();

    mediaQuery.addEventListener('change', updatePreferences);
    window.addEventListener('resize', updatePreferences);

    return () => {
      mediaQuery.removeEventListener('change', updatePreferences);
      window.removeEventListener('resize', updatePreferences);
    };
  }, []);

  return preferences;
}
