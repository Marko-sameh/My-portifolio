"use client";

import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ProjectsContext = createContext(null);

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CACHE_DURATION = 5 * 60 * 1000;

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const cacheRef = useRef({ data: null, timestamp: 0 });
  const fetchingRef = useRef(false);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchProjects = async () => {
      if (fetchingRef.current) return;
      
      const now = Date.now();
      if (cacheRef.current.data && (now - cacheRef.current.timestamp) < CACHE_DURATION) {
        setProjects(cacheRef.current.data);
        setLoading(false);
        return;
      }

      fetchingRef.current = true;
      
      try {
        const res = await fetch("/api/projects", {
          headers: { "X-API-Key": API_KEY },
          signal: abortController.signal
        });
        const data = await res.json();
        setProjects(data);
        cacheRef.current = { data, timestamp: now };
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to fetch projects:', error);
        }
      } finally {
        setLoading(false);
        fetchingRef.current = false;
      }
    };
    
    fetchProjects();
    
    return () => abortController.abort();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within ProjectsProvider');
  }
  return context;
}
