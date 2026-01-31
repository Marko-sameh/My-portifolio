// Performance monitoring for Core Web Vitals
export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload hero image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/EG-en-20251124-TRIFECTA-perspective_8e567342-c60f-4ebb-a1e4-c591bb3f8fac_large.jpg';
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  }
}

// Optimize images for different screen sizes
export function getOptimizedImageSrc(src, width) {
  if (src.includes('assets.nflxext.com')) {
    // Use appropriate size based on screen width
    if (width <= 640) return src.replace('_large', '_small');
    if (width <= 1200) return src.replace('_large', '_medium');
    return src;
  }
  return src;
}