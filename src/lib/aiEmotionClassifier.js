let pipeline;

const EMOTION_PALETTES = {
  joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
  sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
  anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
  fear: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
  surprise: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
  disgust: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
  neutral: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"]
};

const EMOTION_MAPPING = {
  joy: 'Joy',
  sadness: 'Sadness', 
  anger: 'Anger',
  fear: 'Mystery',
  surprise: 'Curiosity',
  disgust: 'Stress',
  neutral: 'Calmness'
};

class AIEmotionClassifier {
  constructor() {
    this.classifier = null;
    this.isLoading = false;
    this.isReady = false;
    this.lastEmotion = 'Calmness';
    this.lastEmotionTime = 0;
    this.cooldown = 10000;
  }

  async initialize() {
    if (this.isLoading || this.isReady) return;
    
    this.isLoading = true;
    try {
      const { pipeline: pipelineFunc } = await import('@xenova/transformers');
      pipeline = pipelineFunc;
      this.classifier = await pipeline('text-classification', 'Xenova/bert-base-multilingual-uncased-sentiment');
      this.isReady = true;
    } catch (error) {
      this.classifier = null;
    }
    this.isLoading = false;
  }

  async classifyEmotion(text) {
    if (!text || text.length < 3) {
      return { emotion: 'Calmness', confidence: 0.3 };
    }

    const now = Date.now();
    if (now - this.lastEmotionTime < this.cooldown) {
      return { emotion: this.lastEmotion, confidence: 0.5 };
    }

    try {
      if (!this.classifier) {
        await this.initialize();
      }

      if (this.classifier) {
        const result = await this.classifier(text);
        const prediction = result[0];
        
        let emotion = 'neutral';
        if (prediction.label === 'POSITIVE' && prediction.score > 0.7) {
          emotion = 'joy';
        } else if (prediction.label === 'NEGATIVE' && prediction.score > 0.7) {
          emotion = this.detectNegativeEmotion(text);
        }

        const mappedEmotion = EMOTION_MAPPING[emotion];
        const confidence = prediction.score;

        if (confidence > 0.6) {
          this.lastEmotion = mappedEmotion;
          this.lastEmotionTime = now;
          this.applyTheme(emotion);
        }

        return { emotion: mappedEmotion, confidence };
      }
    } catch (error) {
      // Silently fall back to keyword-based classification
    }

    return this.fallbackClassification(text);
  }

  detectNegativeEmotion(text) {
    const lower = text.toLowerCase();
    if (/angry|mad|furious|rage/.test(lower)) return 'anger';
    if (/sad|depressed|down|cry/.test(lower)) return 'sadness';
    if (/scared|afraid|fear|worry/.test(lower)) return 'fear';
    if (/disgusting|hate|awful/.test(lower)) return 'disgust';
    return 'sadness';
  }

  fallbackClassification(text) {
    const keywords = {
      joy: ['happy', 'excited', 'great', 'amazing', 'wonderful', 'love'],
      sadness: ['sad', 'down', 'depressed', 'lonely', 'hurt'],
      anger: ['angry', 'mad', 'furious', 'hate', 'frustrated'],
      fear: ['scared', 'afraid', 'worried', 'anxious'],
      surprise: ['wow', 'amazing', 'incredible', 'unbelievable'],
      disgust: ['disgusting', 'awful', 'terrible', 'horrible']
    };

    let maxScore = 0;
    let detectedEmotion = 'neutral';

    Object.entries(keywords).forEach(([emotion, words]) => {
      const score = words.filter(word => 
        text.toLowerCase().includes(word)
      ).length;
      
      if (score > maxScore) {
        maxScore = score;
        detectedEmotion = emotion;
      }
    });

    const confidence = Math.min(maxScore * 0.3, 0.9);
    return { 
      emotion: EMOTION_MAPPING[detectedEmotion], 
      confidence 
    };
  }

  applyTheme(emotion) {
    const palette = EMOTION_PALETTES[emotion] || EMOTION_PALETTES.neutral;
    const root = document.documentElement;
    
    root.style.setProperty('--primary', palette[0]);
    root.style.setProperty('--secondary', palette[1]);
    root.style.setProperty('--accent', palette[2]);
    root.style.setProperty('--background', palette[3]);
  }

  getEmotionPalette(emotion) {
    const key = Object.keys(EMOTION_MAPPING).find(k => 
      EMOTION_MAPPING[k] === emotion
    ) || 'neutral';
    return EMOTION_PALETTES[key];
  }
}

export default AIEmotionClassifier;