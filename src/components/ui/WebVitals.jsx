"use client";
import { useEffect } from "react";

export default function WebVitals() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Simple performance logging without external dependencies
    const logMetric = (name, value) => {
      if (process.env.NODE_ENV === "development") {
        console.log(`${name}:`, value);
      }
    };

    // Basic performance observer
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === "first-contentful-paint") {
              logMetric("FCP", entry.startTime);
            }
            if (entry.name === "largest-contentful-paint") {
              logMetric("LCP", entry.startTime);
            }
          }
        });
        
        observer.observe({ entryTypes: ["paint", "largest-contentful-paint"] });
        
        // Proper cleanup
        return () => {
          observer.disconnect();
        };
      } catch (e) {
        console.warn("Performance observer not supported");
      }
    }
  }, []);

  return null;
}