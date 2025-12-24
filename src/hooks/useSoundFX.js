import { useCallback } from 'react';

export function useSoundFX() {
  const playSound = useCallback((soundPath) => {
    // Sound implementation
  }, []);
  
  return { playSound };
}