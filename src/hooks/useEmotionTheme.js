// import { useState, useCallback, useMemo, useRef } from 'react';
// import { classifyEmotion } from '../utils/emotionClassifier';

// const EMOTION_PALETTES = {
//   Joy: ['#FFD93D', '#FFB200', '#FF6B00', '#FFF7D1'],
//   Calmness: ['#6ECFF6', '#9FF0E9', '#C6FFF9', '#3AA7C5'],
//   Motivation: ['#FF3636', '#FF7878', '#FFA1A1', '#FFD3D3'],
//   Creativity: ['#9B5DE5', '#F15BB5', '#00BBF9', '#00F5D4'],
//   Mystery: ['#1B1B2F', '#16213E', '#0F3460', '#533483'],
//   Sadness: ['#4F5D75', '#B0C4DE', '#AEC6CF', '#2F3E46'],
//   Stress: ['#D7263D', '#F46060', '#FF9E9E', '#FFEAEA'],
//   Anger: ['#5E0000', '#A30000', '#D60000', '#FF5E5E'],
//   Confidence: ['#0A81D1', '#054A91', '#1E3D59', '#88A2AA'],
//   Curiosity: ['#FFE66D', '#FFB86C', '#E07A5F', '#3D405B']
// };

// const EMOTION_KEYWORDS = {
//   Joy: ['happy', 'excited', 'amazing', 'wonderful', 'fantastic', 'great', 'awesome', 'love', 'perfect'],
//   Calmness: ['peaceful', 'relaxed', 'calm', 'serene', 'quiet', 'gentle', 'soft', 'tranquil'],
//   Motivation: ['motivated', 'driven', 'determined', 'focused', 'goal', 'achieve', 'success', 'push'],
//   Creativity: ['creative', 'innovative', 'artistic', 'design', 'imagine', 'inspire', 'unique', 'original'],
//   Mystery: ['mysterious', 'unknown', 'hidden', 'secret', 'dark', 'enigma', 'puzzle', 'curious'],
//   Sadness: ['sad', 'disappointed', 'down', 'blue', 'melancholy', 'depressed', 'lonely', 'hurt'],
//   Stress: ['stressed', 'overwhelmed', 'pressure', 'anxious', 'worried', 'tense', 'rushed', 'panic'],
//   Anger: ['angry', 'frustrated', 'mad', 'furious', 'annoyed', 'irritated', 'rage', 'hate'],
//   Confidence: ['confident', 'strong', 'powerful', 'bold', 'sure', 'certain', 'capable', 'skilled'],
//   Curiosity: ['curious', 'wondering', 'explore', 'discover', 'learn', 'question', 'investigate']
// };

// export function useEmotionTheme() {
//   const [currentEmotion, setCurrentEmotion] = useState('Mystery');
//   const debounceRef = useRef(null);
//   const cacheRef = useRef(new Map());

//   const detectEmotion = useCallback((text) => {
//     const result = classifyEmotion(text);
//     return result.emotion;
//   }, []);

//   const applyEmotionTheme = useCallback((userInput) => {
//     // Debounce for performance
//     if (debounceRef.current) clearTimeout(debounceRef.current);

//     debounceRef.current = setTimeout(() => {
//       // Check cache first
//       const cacheKey = userInput.toLowerCase().trim();
//       if (cacheRef.current.has(cacheKey)) {
//         const cached = cacheRef.current.get(cacheKey);
//         setCurrentEmotion(cached.emotion);
//         return cached;
//       }

//       const emotion = detectEmotion(userInput);
//       const palette = EMOTION_PALETTES[emotion];
//       const intensity = Math.min(userInput.length / 50, 1);

//       // Use CSS custom properties directly (more performant than eval)
//       if (typeof document !== 'undefined') {
//         document.documentElement.style.setProperty('--emotion-primary', palette[0]);
//         document.documentElement.style.setProperty('--emotion-secondary', palette[1]);
//         document.documentElement.style.setProperty('--emotion-accent', palette[2]);
//         document.documentElement.style.setProperty('--emotion-background', palette[3]);
//       }

//       const result = {
//         emotion,
//         intensity: intensity.toFixed(2),
//         commands: [
//           `document.documentElement.style.setProperty('--emotion-primary', '${palette[0]}')`,
//           `document.documentElement.style.setProperty('--emotion-secondary', '${palette[1]}')`,
//           `document.documentElement.style.setProperty('--emotion-accent', '${palette[2]}')`,
//           `document.documentElement.style.setProperty('--emotion-background', '${palette[3]}')`
//         ]
//       };

//       // Cache result
//       cacheRef.current.set(cacheKey, result);
//       if (cacheRef.current.size > 50) {
//         const firstKey = cacheRef.current.keys().next().value;
//         cacheRef.current.delete(firstKey);
//       }

//       setCurrentEmotion(emotion);
//       return result;
//     }, 300);
//   }, [detectEmotion]);

//   // Emotion analyzer with GoEmotions classification
//   const analyzeEmotion = useCallback((userInput) => {
//     const classification = classifyEmotion(userInput);
//     const palette = EMOTION_PALETTES[classification.emotion];
//     const intensity = Math.min(userInput.length / 50, 1);

//     return {
//       ...classification,
//       intensity: intensity.toFixed(2),
//       commands: [
//         `document.documentElement.style.setProperty('--emotion-primary', '${palette[0]}')`,
//         `document.documentElement.style.setProperty('--emotion-secondary', '${palette[1]}')`,
//         `document.documentElement.style.setProperty('--emotion-accent', '${palette[2]}')`,
//         `document.documentElement.style.setProperty('--emotion-background', '${palette[3]}')`
//       ]
//     };
//   }, [detectEmotion]);

//   return { currentEmotion, applyEmotionTheme, analyzeEmotion };
// }

import { useState, useCallback, useRef } from "react";
import axios from "axios";

const HF_API_TOKEN = "YOUR_HF_FREE_TOKEN"; // HuggingFace FREE token

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

// Mapping Google GoEmotions → Target Emotion
const EMOTION_MAPPING = {
  Joy: [
    "joy",
    "amusement",
    "excitement",
    "admiration",
    "gratitude",
    "love",
    "approval",
  ],
  Calmness: ["serenity", "relief", "caring"],
  Motivation: ["desire", "enthusiasm", "optimism", "determination", "pride"],
  Creativity: ["inspiration", "realization", "surprise", "fascination"],
  Mystery: ["confusion", "curiosity", "uncertainty"],
  Sadness: ["sadness", "disappointment", "grief", "remorse", "embarrassment"],
  Stress: ["fear", "nervousness", "anxiety", "worry"],
  Anger: ["anger", "annoyance", "disgust", "frustration"],
  Confidence: ["pride", "approval", "empowerment", "certainty"],
  Curiosity: ["curiosity", "interest", "anticipation"],
};

export function useEmotionTheme() {
  const [currentEmotion, setCurrentEmotion] = useState("Mystery");
  const debounceRef = useRef(null);
  const cacheRef = useRef(new Map());

  const classifyEmotion = useCallback(async (text) => {
    const cacheKey = text.toLowerCase().trim();
    if (cacheRef.current.has(cacheKey)) return cacheRef.current.get(cacheKey);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/google/bert-base-goemotions",
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${HF_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data; // Array of { label, score }

      // Mapping to target emotions
      let mapped = {};
      for (let target in EMOTION_MAPPING) {
        mapped[target] = 0;
        EMOTION_MAPPING[target].forEach((label) => {
          const found = result.find(
            (r) => r.label.toLowerCase() === label.toLowerCase()
          );
          if (found) mapped[target] += found.score;
        });
      }

      const finalEmotion = Object.entries(mapped).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      const palette = EMOTION_PALETTES[finalEmotion];
      if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
          "--emotion-primary",
          palette[0]
        );
        document.documentElement.style.setProperty(
          "--emotion-secondary",
          palette[1]
        );
        document.documentElement.style.setProperty(
          "--emotion-accent",
          palette[2]
        );
        document.documentElement.style.setProperty(
          "--emotion-background",
          palette[3]
        );
      }

      const analysis = {
        emotion: finalEmotion,
        confidence: mapped[finalEmotion],
        topRaw: result[0],
        palette,
      };

      // Cache
      cacheRef.current.set(cacheKey, analysis);
      if (cacheRef.current.size > 50) {
        const firstKey = cacheRef.current.keys().next().value;
        cacheRef.current.delete(firstKey);
      }

      setCurrentEmotion(finalEmotion);
      return analysis;
    } catch (err) {
      console.error("Emotion analysis error:", err);
      return {
        emotion: "Mystery",
        confidence: 0,
        palette: EMOTION_PALETTES.Mystery,
      };
    }
  }, []);

  const applyEmotionTheme = useCallback(
    (text) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => classifyEmotion(text), 300);
    },
    [classifyEmotion]
  );

  return { currentEmotion, applyEmotionTheme, classifyEmotion };
}
