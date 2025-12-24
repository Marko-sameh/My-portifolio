// GoEmotions to Target Emotion Mapping
const EMOTION_MAPPING = {
  joy: 'Joy', amusement: 'Joy', excitement: 'Joy', admiration: 'Joy', 
  gratitude: 'Joy', love: 'Joy', approval: 'Joy',
  
  serenity: 'Calmness', relief: 'Calmness', caring: 'Calmness',
  
  desire: 'Motivation', enthusiasm: 'Motivation', optimism: 'Motivation', 
  determination: 'Motivation', pride: 'Motivation',
  
  inspiration: 'Creativity', realization: 'Creativity', fascination: 'Creativity',
  
  confusion: 'Mystery', uncertainty: 'Mystery',
  
  sadness: 'Sadness', disappointment: 'Sadness', grief: 'Sadness', 
  remorse: 'Sadness', embarrassment: 'Sadness',
  
  fear: 'Stress', nervousness: 'Stress', anxiety: 'Stress', worry: 'Stress',
  
  anger: 'Anger', annoyance: 'Anger', disgust: 'Anger', frustration: 'Anger',
  
  empowerment: 'Confidence', certainty: 'Confidence',
  
  curiosity: 'Curiosity', interest: 'Curiosity', anticipation: 'Curiosity'
};

const KEYWORD_PATTERNS = {
  joy: /\b(happy|joy|excited|amazing|wonderful|fantastic|great|awesome|love|perfect|delighted)\b/gi,
  sadness: /\b(sad|disappointed|down|blue|melancholy|depressed|lonely|hurt|unhappy)\b/gi,
  anger: /\b(angry|frustrated|mad|furious|annoyed|irritated|rage|hate|upset)\b/gi,
  fear: /\b(scared|afraid|anxious|worried|nervous|panic|terrified|frightened)\b/gi,
  surprise: /\b(surprised|shocked|amazed|astonished|unexpected|wow)\b/gi,
  curiosity: /\b(curious|wondering|explore|discover|learn|question|investigate|interested)\b/gi,
  confusion: /\b(confused|uncertain|puzzled|unclear|lost|bewildered)\b/gi,
  determination: /\b(motivated|driven|determined|focused|goal|achieve|success|push)\b/gi,
  caring: /\b(peaceful|relaxed|calm|serene|quiet|gentle|soft|tranquil|soothing)\b/gi,
  pride: /\b(confident|strong|powerful|bold|sure|certain|capable|skilled|proud)\b/gi
};

export function classifyEmotion(text) {
  if (!text || text.trim().length === 0) {
    return {
      emotion: 'Mystery',
      confidence: 0.5,
      details: {
        top_raw_label: 'neutral',
        top_raw_score: 0.5
      }
    };
  }

  const scores = {};
  let totalMatches = 0;

  Object.entries(KEYWORD_PATTERNS).forEach(([rawEmotion, pattern]) => {
    const matches = (text.match(pattern) || []).length;
    if (matches > 0) {
      scores[rawEmotion] = matches;
      totalMatches += matches;
    }
  });

  if (totalMatches === 0) {
    return {
      emotion: 'Mystery',
      confidence: 0.3,
      details: {
        top_raw_label: 'neutral',
        top_raw_score: 0.3
      }
    };
  }

  const [topRawLabel, topRawCount] = Object.entries(scores)
    .reduce((a, b) => a[1] > b[1] ? a : b);

  const topRawScore = Math.min(topRawCount / (text.split(/\s+/).length * 0.5), 1);
  const targetEmotion = EMOTION_MAPPING[topRawLabel] || 'Mystery';
  const confidence = Math.max(0.4, Math.min(topRawScore, 0.95));

  return {
    emotion: targetEmotion,
    confidence: parseFloat(confidence.toFixed(2)),
    details: {
      top_raw_label: topRawLabel,
      top_raw_score: parseFloat(topRawScore.toFixed(2))
    }
  };
}
