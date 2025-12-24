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

const EMOTION_MARKERS = {
  Joy: {
    words: [
      "happy",
      "excited",
      "amazing",
      "wonderful",
      "fantastic",
      "great",
      "awesome",
      "love",
      "perfect",
      "brilliant",
      "excellent",
      "thrilled",
      "delighted",
      "ecstatic",
    ],
    patterns: /[!]{2,}|😊|😄|🎉|❤️/g,
    intensity: { exclamation: 15, caps: 10, repetition: 8 },
  },
  Calmness: {
    words: [
      "peaceful",
      "relaxed",
      "calm",
      "serene",
      "quiet",
      "gentle",
      "soft",
      "tranquil",
      "soothing",
      "zen",
      "mindful",
      "balanced",
    ],
    patterns: /\.\.\.|slowly|gently|softly/g,
    intensity: { periods: 5, lowercase: 3, slow_words: 8 },
  },
  Motivation: {
    words: [
      "motivated",
      "driven",
      "determined",
      "focused",
      "goal",
      "achieve",
      "success",
      "push",
      "strive",
      "accomplish",
      "conquer",
      "overcome",
    ],
    patterns: /let's|we can|i will|must|need to|going to/gi,
    intensity: { action_words: 12, future_tense: 8, imperatives: 10 },
  },
  Creativity: {
    words: [
      "creative",
      "innovative",
      "artistic",
      "design",
      "imagine",
      "inspire",
      "unique",
      "original",
      "vision",
      "craft",
      "build",
      "create",
    ],
    patterns: /what if|imagine|could be|new way|different/gi,
    intensity: { questions: 8, metaphors: 10, abstract: 7 },
  },
  Mystery: {
    words: [
      "mysterious",
      "unknown",
      "hidden",
      "secret",
      "dark",
      "enigma",
      "puzzle",
      "shadow",
      "whisper",
      "beneath",
      "behind",
    ],
    patterns: /\?\?\?|\.\.\.|perhaps|maybe|might be/g,
    intensity: { questions: 6, ellipsis: 8, uncertainty: 5 },
  },
  Sadness: {
    words: [
      "sad",
      "disappointed",
      "down",
      "blue",
      "melancholy",
      "depressed",
      "lonely",
      "hurt",
      "broken",
      "empty",
      "lost",
      "tears",
    ],
    patterns: /😢|😭|💔|sigh|unfortunately/g,
    intensity: { negative: 10, past_tense: 6, isolation: 8 },
  },
  Stress: {
    words: [
      "stressed",
      "overwhelmed",
      "pressure",
      "anxious",
      "worried",
      "tense",
      "rushed",
      "panic",
      "deadline",
      "urgent",
      "crisis",
    ],
    patterns: /!!+|ASAP|urgent|help|can't|won't/gi,
    intensity: { urgency: 15, caps: 12, negation: 8 },
  },
  Anger: {
    words: [
      "angry",
      "frustrated",
      "mad",
      "furious",
      "annoyed",
      "irritated",
      "rage",
      "hate",
      "disgusted",
      "outraged",
      "livid",
    ],
    patterns: /[A-Z]{3,}|!!+|damn|wtf|seriously/g,
    intensity: { caps: 20, profanity: 15, repetition: 10 },
  },
  Confidence: {
    words: [
      "confident",
      "strong",
      "powerful",
      "bold",
      "sure",
      "certain",
      "capable",
      "skilled",
      "expert",
      "master",
      "leader",
    ],
    patterns: /i know|i can|definitely|absolutely|without doubt/gi,
    intensity: { certainty: 12, first_person: 8, absolutes: 10 },
  },
  Curiosity: {
    words: [
      "curious",
      "wondering",
      "explore",
      "discover",
      "learn",
      "question",
      "investigate",
      "research",
      "study",
      "understand",
    ],
    patterns: /\?|how|why|what|when|where|tell me|show me/gi,
    intensity: { questions: 10, inquiry: 8, learning: 6 },
  },
};

export function analyzeEmotion(text) {
  const scores = {};
  const reasoningParts = [];

  // Initialize scores
  Object.keys(EMOTION_MARKERS).forEach((emotion) => {
    scores[emotion] = 0;
  });

  // Analyze each emotion
  Object.entries(EMOTION_MARKERS).forEach(([emotion, markers]) => {
    let emotionScore = 0;
    let emotionReasons = [];

    // Word matching
    const wordMatches = markers.words.filter((word) =>
      text.toLowerCase().includes(word)
    ).length;
    if (wordMatches > 0) {
      emotionScore += wordMatches * 10;
      emotionReasons.push(`${wordMatches} ${emotion.toLowerCase()} keywords`);
    }

    // Pattern matching
    const patternMatches = (text.match(markers.patterns) || []).length;
    if (patternMatches > 0) {
      emotionScore += patternMatches * 8;
      emotionReasons.push(`${patternMatches} linguistic patterns`);
    }

    // Intensity modifiers
    const capsCount = (text.match(/[A-Z]/g) || []).length;
    const exclamationCount = (text.match(/!/g) || []).length;
    const questionCount = (text.match(/\?/g) || []).length;

    if (capsCount > text.length * 0.3) emotionScore += 15;
    if (exclamationCount > 2) emotionScore += exclamationCount * 5;
    if (questionCount > 1 && emotion === "Curiosity")
      emotionScore += questionCount * 8;

    scores[emotion] = emotionScore;
    if (emotionScore > 0) {
      reasoningParts.push(`${emotion}: ${emotionReasons.join(", ")}`);
    }
  });

  // Find dominant emotion
  const dominantEmotion = Object.entries(scores).reduce((a, b) =>
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];

  // Calculate intensity (0-100)
  const maxScore = Math.max(...Object.values(scores));
  const intensity = Math.min(
    Math.round((maxScore / text.length) * 100 + text.length * 2),
    100
  );

  // Generate reasoning
  const reasoning =
    reasoningParts.length > 0
      ? reasoningParts.slice(0, 2).join("; ")
      : `Neutral tone with ${dominantEmotion.toLowerCase()} undertones`;

  // Get color palette
  const palette = EMOTION_PALETTES[dominantEmotion];

  return {
    emotion: dominantEmotion,
    intensity: intensity.toString(),
    reasoning,
    commands: [
      `document.documentElement.style.setProperty('--primary-color', '${palette[0]}')`,
      `document.documentElement.style.setProperty('--secondary-color', '${palette[1]}')`,
      `document.documentElement.style.setProperty('--accent-color', '${palette[2]}')`,
      `document.documentElement.style.setProperty('--background-color', '${palette[3]}')`,
    ],
  };
}
