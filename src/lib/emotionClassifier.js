const EMOTION_PALETTES = {
  Joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
  Calmness: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
  Motivation: ["#FF3636", "#FF7878", "#FFA1A1", "#FFD3D3"],
  Creativity: ["#9B5DE5", "#F15BB5", "#00BBF9", "#00F5D4"],
  Mystery: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
  Sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
  Stress: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
  Anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
  Confidence: ["#0A81D1", "#054A91", "#1E3D59", "#88A2AA"],
  Curiosity: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
};

const EMOTION_SIGNATURES = {
  Joy: {
    textMarkers: ["happy", "excited", "amazing", "wonderful", "great", "love", "perfect", "brilliant"],
    behaviorWeight: { fastScroll: 0.2, quickClicks: 0.3, shortHover: 0.1 },
    contextBoost: { morning: 0.1, weekend: 0.2 }
  },
  Calmness: {
    textMarkers: ["peaceful", "relaxed", "calm", "serene", "quiet", "gentle", "tranquil", "zen"],
    behaviorWeight: { slowScroll: 0.4, longHover: 0.3, deepNavigation: 0.2 },
    contextBoost: { evening: 0.2, portfolio: 0.1 }
  },
  Motivation: {
    textMarkers: ["motivated", "driven", "determined", "goal", "achieve", "success", "push", "strive"],
    behaviorWeight: { fastScroll: 0.3, quickClicks: 0.4, deepNavigation: 0.3 },
    contextBoost: { morning: 0.2, workday: 0.1 }
  },
  Creativity: {
    textMarkers: ["creative", "innovative", "artistic", "design", "imagine", "inspire", "unique", "vision"],
    behaviorWeight: { longHover: 0.4, deepNavigation: 0.3, mediumScroll: 0.2 },
    contextBoost: { afternoon: 0.1, creative_pages: 0.3 }
  },
  Mystery: {
    textMarkers: ["mysterious", "unknown", "hidden", "secret", "dark", "enigma", "shadow", "beneath"],
    behaviorWeight: { slowScroll: 0.3, longHover: 0.4, hesitation: 0.3 },
    contextBoost: { evening: 0.3, night: 0.2 }
  },
  Sadness: {
    textMarkers: ["sad", "disappointed", "down", "melancholy", "lonely", "hurt", "empty", "lost"],
    behaviorWeight: { slowScroll: 0.4, longPauses: 0.3, lowActivity: 0.3 },
    contextBoost: { evening: 0.1, rainy: 0.2 }
  },
  Stress: {
    textMarkers: ["stressed", "overwhelmed", "pressure", "anxious", "worried", "rushed", "urgent", "deadline"],
    behaviorWeight: { fastScroll: 0.4, rapidClicks: 0.4, shortSessions: 0.2 },
    contextBoost: { workday: 0.2, deadline_context: 0.3 }
  },
  Anger: {
    textMarkers: ["angry", "frustrated", "mad", "furious", "annoyed", "hate", "disgusted", "outraged"],
    behaviorWeight: { rapidClicks: 0.5, fastScroll: 0.3, shortSessions: 0.2 },
    contextBoost: { high_caps: 0.3, exclamation: 0.2 }
  },
  Confidence: {
    textMarkers: ["confident", "strong", "powerful", "bold", "sure", "certain", "capable", "expert"],
    behaviorWeight: { quickClicks: 0.3, deepNavigation: 0.4, mediumScroll: 0.2 },
    contextBoost: { professional_context: 0.2, achievement: 0.3 }
  },
  Curiosity: {
    textMarkers: ["curious", "wondering", "explore", "discover", "learn", "question", "investigate", "research"],
    behaviorWeight: { deepNavigation: 0.5, longHover: 0.3, mediumScroll: 0.2 },
    contextBoost: { learning_context: 0.3, questions: 0.4 }
  }
};

class EmotionClassifier {
  constructor() {
    this.behaviorHistory = [];
    this.lastEmotion = null;
    this.emotionCooldown = 15000; // 15 seconds
    this.lastEmotionTime = 0;
    this.confidenceThreshold = 0.6;
  }

  // Analyze text input for emotional markers
  analyzeText(text) {
    if (!text || text.length < 3) return {};
    
    const scores = {};
    const textLower = text.toLowerCase();
    
    Object.entries(EMOTION_SIGNATURES).forEach(([emotion, signature]) => {
      let score = 0;
      
      // Count keyword matches
      const matches = signature.textMarkers.filter(marker => 
        textLower.includes(marker)
      ).length;
      
      if (matches > 0) {
        score = Math.min(matches * 0.2, 0.8); // Cap at 0.8
      }
      
      // Boost for text patterns
      if (emotion === 'Curiosity' && text.includes('?')) score += 0.2;
      if (emotion === 'Stress' && /[A-Z]{3,}/.test(text)) score += 0.3;
      if (emotion === 'Anger' && /!{2,}/.test(text)) score += 0.3;
      if (emotion === 'Joy' && /!/.test(text)) score += 0.1;
      
      scores[emotion] = Math.min(score, 1.0);
    });
    
    return scores;
  }

  // Track and analyze user behavior
  trackBehavior(behaviorData) {
    const timestamp = Date.now();
    this.behaviorHistory.push({ ...behaviorData, timestamp });
    
    // Keep only last 30 seconds of behavior
    this.behaviorHistory = this.behaviorHistory.filter(
      b => timestamp - b.timestamp < 30000
    );
  }

  // Analyze behavior patterns
  analyzeBehavior() {
    if (this.behaviorHistory.length < 3) return {};
    
    const recent = this.behaviorHistory.slice(-10);
    const scores = {};
    
    // Calculate behavior metrics
    const avgScrollSpeed = recent.reduce((sum, b) => sum + (b.scrollSpeed || 0), 0) / recent.length;
    const avgClickFreq = recent.reduce((sum, b) => sum + (b.clickFrequency || 0), 0) / recent.length;
    const avgHoverTime = recent.reduce((sum, b) => sum + (b.hoverDuration || 0), 0) / recent.length;
    const navigationDepth = recent.reduce((sum, b) => sum + (b.navigationDepth || 0), 0) / recent.length;
    
    Object.entries(EMOTION_SIGNATURES).forEach(([emotion, signature]) => {
      let score = 0;
      const weights = signature.behaviorWeight;
      
      // Fast scroll patterns
      if (weights.fastScroll && avgScrollSpeed > 800) {
        score += weights.fastScroll;
      }
      
      // Slow scroll patterns  
      if (weights.slowScroll && avgScrollSpeed < 200) {
        score += weights.slowScroll;
      }
      
      // Click patterns
      if (weights.quickClicks && avgClickFreq > 2) {
        score += weights.quickClicks;
      }
      
      if (weights.rapidClicks && avgClickFreq > 4) {
        score += weights.rapidClicks;
      }
      
      // Hover patterns
      if (weights.longHover && avgHoverTime > 2000) {
        score += weights.longHover;
      }
      
      if (weights.shortHover && avgHoverTime < 500) {
        score += weights.shortHover;
      }
      
      // Navigation depth
      if (weights.deepNavigation && navigationDepth > 3) {
        score += weights.deepNavigation;
      }
      
      scores[emotion] = Math.min(score, 1.0);
    });
    
    return scores;
  }

  // Analyze contextual factors
  analyzeContext() {
    const now = new Date();
    const hour = now.getHours();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const currentPage = window.location.pathname;
    
    const scores = {};
    
    Object.entries(EMOTION_SIGNATURES).forEach(([emotion, signature]) => {
      let score = 0;
      const boosts = signature.contextBoost;
      
      // Time-based context
      if (boosts.morning && hour >= 6 && hour < 12) score += boosts.morning;
      if (boosts.afternoon && hour >= 12 && hour < 18) score += boosts.afternoon;
      if (boosts.evening && hour >= 18 && hour < 22) score += boosts.evening;
      if (boosts.night && (hour >= 22 || hour < 6)) score += boosts.night;
      if (boosts.weekend && isWeekend) score += boosts.weekend;
      if (boosts.workday && !isWeekend) score += boosts.workday;
      
      // Page-based context
      if (boosts.creative_pages && /\/(creativity|design|art)/i.test(currentPage)) {
        score += boosts.creative_pages;
      }
      if (boosts.professional_context && /\/(work|career|professional)/i.test(currentPage)) {
        score += boosts.professional_context;
      }
      
      scores[emotion] = Math.min(score, 0.3); // Context is subtle
    });
    
    return scores;
  }

  // Main classification method
  classify(textInput = '', behaviorData = null) {
    const now = Date.now();
    
    // Respect cooldown period
    if (this.lastEmotion && (now - this.lastEmotionTime) < this.emotionCooldown) {
      return {
        emotion: this.lastEmotion,
        confidence: 0.5,
        source: 'cooldown'
      };
    }
    
    // Track behavior if provided
    if (behaviorData) {
      this.trackBehavior(behaviorData);
    }
    
    // Get scores from all sources
    const textScores = this.analyzeText(textInput);
    const behaviorScores = this.analyzeBehavior();
    const contextScores = this.analyzeContext();
    
    // Combine scores with weights
    const finalScores = {};
    const emotions = Object.keys(EMOTION_SIGNATURES);
    
    emotions.forEach(emotion => {
      const textScore = textScores[emotion] || 0;
      const behaviorScore = behaviorScores[emotion] || 0;
      const contextScore = contextScores[emotion] || 0;
      
      // Weighted combination
      finalScores[emotion] = (
        textScore * 0.5 +           // Text is most important
        behaviorScore * 0.35 +      // Behavior is significant  
        contextScore * 0.15         // Context provides subtle boost
      );
    });
    
    // Find dominant emotion
    const sortedEmotions = emotions.sort((a, b) => finalScores[b] - finalScores[a]);
    const dominantEmotion = sortedEmotions[0];
    const confidence = finalScores[dominantEmotion];
    
    // Only update if confidence is high enough
    if (confidence >= this.confidenceThreshold) {
      this.lastEmotion = dominantEmotion;
      this.lastEmotionTime = now;
      
      return {
        emotion: dominantEmotion,
        confidence: Math.min(confidence, 1.0)
      };
    }
    
    // Return previous emotion or default
    return {
      emotion: this.lastEmotion || 'Calmness',
      confidence: 0.4
    };
  }

  // Get color palette for emotion
  getEmotionPalette(emotion) {
    return EMOTION_PALETTES[emotion] || EMOTION_PALETTES.Calmness;
  }

  // Apply theme to CSS variables
  applyTheme(emotion) {
    const palette = this.getEmotionPalette(emotion);
    const root = document.documentElement;
    
    root.style.setProperty('--primary', palette[0]);
    root.style.setProperty('--secondary', palette[1]);
    root.style.setProperty('--accent', palette[2]);
    root.style.setProperty('--background', palette[3]);
    
    // Smooth transition
    root.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  }
}

export default EmotionClassifier;