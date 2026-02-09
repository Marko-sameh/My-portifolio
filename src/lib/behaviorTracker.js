class BehaviorTracker {
  constructor() {
    this.isTracking = false;
    this.behaviorData = {
      scrollSpeed: 0,
      clickFrequency: 0,
      hoverDuration: 0,
      navigationDepth: 0,
      timeOnPage: 0,
      interactionRhythm: []
    };
    
    this.scrollHistory = [];
    this.clickHistory = [];
    this.hoverHistory = [];
    this.pageStartTime = Date.now();
    this.currentHoverStart = null;
    
    this.callbacks = [];
  }

  // Start tracking user behavior
  startTracking() {
    if (this.isTracking) return;
    
    this.isTracking = true;
    this.setupEventListeners();
    this.startPeriodicAnalysis();
  }

  // Stop tracking
  stopTracking() {
    this.isTracking = false;
    this.removeEventListeners();
    if (this.analysisInterval) {
      clearInterval(this.analysisInterval);
    }
  }

  // Add callback for behavior updates
  onBehaviorUpdate(callback) {
    this.callbacks.push(callback);
  }

  // Setup event listeners
  setupEventListeners() {
    // Scroll tracking
    this.scrollHandler = this.throttle((e) => {
      const now = Date.now();
      this.scrollHistory.push({ timestamp: now, scrollY: window.scrollY });
      
      // Keep only last 5 seconds of scroll data
      this.scrollHistory = this.scrollHistory.filter(
        s => now - s.timestamp < 5000
      );
      
      this.calculateScrollSpeed();
    }, 100);

    // Click tracking
    this.clickHandler = (e) => {
      const now = Date.now();
      this.clickHistory.push({ 
        timestamp: now, 
        x: e.clientX, 
        y: e.clientY,
        target: e.target.tagName 
      });
      
      // Keep only last 10 seconds of clicks
      this.clickHistory = this.clickHistory.filter(
        c => now - c.timestamp < 10000
      );
      
      this.calculateClickFrequency();
    };

    // Hover tracking
    this.mouseEnterHandler = (e) => {
      this.currentHoverStart = Date.now();
    };

    this.mouseLeaveHandler = (e) => {
      if (this.currentHoverStart) {
        const hoverDuration = Date.now() - this.currentHoverStart;
        this.hoverHistory.push({ 
          duration: hoverDuration, 
          timestamp: Date.now(),
          element: e.target.tagName 
        });
        
        // Keep only last 20 hover events
        if (this.hoverHistory.length > 20) {
          this.hoverHistory = this.hoverHistory.slice(-20);
        }
        
        this.calculateHoverDuration();
        this.currentHoverStart = null;
      }
    };

    // Navigation tracking
    this.navigationHandler = () => {
      this.behaviorData.navigationDepth++;
    };

    // Attach listeners
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    document.addEventListener('click', this.clickHandler);
    document.addEventListener('mouseenter', this.mouseEnterHandler, true);
    document.addEventListener('mouseleave', this.mouseLeaveHandler, true);
    window.addEventListener('popstate', this.navigationHandler);
  }

  // Remove event listeners
  removeEventListeners() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
    }
    if (this.mouseEnterHandler) {
      document.removeEventListener('mouseenter', this.mouseEnterHandler, true);
    }
    if (this.mouseLeaveHandler) {
      document.removeEventListener('mouseleave', this.mouseLeaveHandler, true);
    }
    if (this.navigationHandler) {
      window.removeEventListener('popstate', this.navigationHandler);
    }
  }

  // Calculate scroll speed
  calculateScrollSpeed() {
    if (this.scrollHistory.length < 2) return;
    
    const recent = this.scrollHistory.slice(-5);
    let totalDistance = 0;
    let totalTime = 0;
    
    for (let i = 1; i < recent.length; i++) {
      const distance = Math.abs(recent[i].scrollY - recent[i-1].scrollY);
      const time = recent[i].timestamp - recent[i-1].timestamp;
      
      totalDistance += distance;
      totalTime += time;
    }
    
    this.behaviorData.scrollSpeed = totalTime > 0 ? (totalDistance / totalTime) * 1000 : 0;
  }

  // Calculate click frequency
  calculateClickFrequency() {
    const now = Date.now();
    const recentClicks = this.clickHistory.filter(
      c => now - c.timestamp < 5000
    );
    
    this.behaviorData.clickFrequency = recentClicks.length / 5; // clicks per second
  }

  // Calculate average hover duration
  calculateHoverDuration() {
    if (this.hoverHistory.length === 0) return;
    
    const recent = this.hoverHistory.slice(-10);
    const avgDuration = recent.reduce((sum, h) => sum + h.duration, 0) / recent.length;
    
    this.behaviorData.hoverDuration = avgDuration;
  }

  // Calculate time on current page
  calculateTimeOnPage() {
    this.behaviorData.timeOnPage = Date.now() - this.pageStartTime;
  }

  // Analyze interaction rhythm
  analyzeInteractionRhythm() {
    const now = Date.now();
    const allInteractions = [
      ...this.clickHistory.map(c => ({ type: 'click', timestamp: c.timestamp })),
      ...this.hoverHistory.map(h => ({ type: 'hover', timestamp: h.timestamp }))
    ].sort((a, b) => a.timestamp - b.timestamp);
    
    const recentInteractions = allInteractions.filter(
      i => now - i.timestamp < 10000
    );
    
    if (recentInteractions.length < 2) return;
    
    const intervals = [];
    for (let i = 1; i < recentInteractions.length; i++) {
      intervals.push(recentInteractions[i].timestamp - recentInteractions[i-1].timestamp);
    }
    
    const avgInterval = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    const variance = intervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / intervals.length;
    
    this.behaviorData.interactionRhythm = {
      avgInterval,
      variance,
      consistency: variance < 1000000 ? 'consistent' : 'erratic'
    };
  }

  // Start periodic analysis
  startPeriodicAnalysis() {
    this.analysisInterval = setInterval(() => {
      this.calculateTimeOnPage();
      this.analyzeInteractionRhythm();
      
      // Notify callbacks with current behavior data
      this.callbacks.forEach(callback => {
        callback({ ...this.behaviorData });
      });
    }, 2000); // Update every 2 seconds
  }

  // Get current behavior snapshot
  getBehaviorSnapshot() {
    this.calculateTimeOnPage();
    this.analyzeInteractionRhythm();
    
    return { ...this.behaviorData };
  }

  // Throttle utility
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Reset tracking data
  reset() {
    this.scrollHistory = [];
    this.clickHistory = [];
    this.hoverHistory = [];
    this.pageStartTime = Date.now();
    this.behaviorData = {
      scrollSpeed: 0,
      clickFrequency: 0,
      hoverDuration: 0,
      navigationDepth: 0,
      timeOnPage: 0,
      interactionRhythm: []
    };
  }
}

export default BehaviorTracker;