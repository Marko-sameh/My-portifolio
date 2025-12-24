// // import { NextResponse } from "next/server";

// // const EMOTION_PALETTES = {
// //   joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
// //   sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
// //   anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
// //   fear: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
// //   surprise: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
// //   disgust: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
// //   neutral: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
// // };

// // const EMOTION_MAPPING = {
// //   joy: "Joy",
// //   sadness: "Sadness",
// //   anger: "Anger",
// //   fear: "Mystery",
// //   surprise: "Curiosity",
// //   disgust: "Stress",
// //   neutral: "Calmness",
// // };

// // async function classifyWithAI(text) {
// //   try {
// //     const response = await fetch(
// //       "https://router.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base",
// //       {
// //         headers: {
// //           Authorization: "Bearer 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",
// //           "Content-Type": "application/json",
// //         },
// //         method: "POST",
// //         body: JSON.stringify({ inputs: text }),
// //       }
// //     );

// //     if (!response.ok) {
// //       const errorText = await response.text();
// //       throw new Error(`API failed: ${response.status} - ${errorText}`);
// //     }

// //     const result = await response.json();

// //     if (result && Array.isArray(result) && result.length > 0) {
// //       const predictions = result[0];
// //       if (Array.isArray(predictions) && predictions.length > 0) {
// //         const topPrediction = predictions[0];
// //         const emotion = topPrediction.label.toLowerCase();
// //         const confidence = topPrediction.score;

// //         return {
// //           emotion: EMOTION_MAPPING[emotion] || "Calmness",
// //           confidence,
// //           palette: EMOTION_PALETTES[emotion] || EMOTION_PALETTES.neutral,
// //         };
// //       }
// //     }
// //   } catch (error) {
// //     console.error("Hugging Face API error:", error.message);
// //   }

// //   return fallbackClassification(text);
// // }

// // function fallbackClassification(text) {
// //   const keywords = {
// //     joy: [
// //       "happy",
// //       "excited",
// //       "great",
// //       "amazing",
// //       "wonderful",
// //       "love",
// //       "awesome",
// //     ],
// //     sadness: ["sad", "down", "depressed", "lonely", "hurt", "disappointed"],
// //     anger: ["angry", "mad", "furious", "hate", "frustrated", "annoyed"],
// //     fear: ["scared", "afraid", "worried", "anxious", "nervous"],
// //     surprise: ["wow", "amazing", "incredible", "unbelievable", "shocking"],
// //     disgust: ["disgusting", "awful", "terrible", "horrible", "gross"],
// //   };

// //   let maxScore = 0;
// //   let detectedEmotion = "neutral";
// //   const textLower = text.toLowerCase();

// //   Object.entries(keywords).forEach(([emotion, words]) => {
// //     const score = words.filter((word) => textLower.includes(word)).length;
// //     if (score > maxScore) {
// //       maxScore = score;
// //       detectedEmotion = emotion;
// //     }
// //   });

// //   // Pattern detection
// //   if (/!+/.test(text)) detectedEmotion = "joy";
// //   if (/\?/.test(text)) detectedEmotion = "surprise";
// //   if (/[A-Z]{3,}/.test(text)) detectedEmotion = "anger";

// //   const confidence = Math.min(maxScore * 0.4 + 0.3, 0.9);

// //   return {
// //     emotion: EMOTION_MAPPING[detectedEmotion],
// //     confidence,
// //     palette: EMOTION_PALETTES[detectedEmotion],
// //   };
// // }

// // export async function POST(request) {
// //   try {
// //     const { text } = await request.json();

// //     if (!text || text.length < 2) {
// //       return NextResponse.json({
// //         emotion: "Calmness",
// //         confidence: 0.4,
// //         palette: EMOTION_PALETTES.neutral,
// //       });
// //     }

// //     const result = await classifyWithAI(text);

// //     // Ensure result is properly serializable
// //     const response = {
// //       emotion: result.emotion || "Calmness",
// //       confidence: Number(result.confidence) || 0.4,
// //       palette: result.palette || EMOTION_PALETTES.neutral,
// //     };

// //     return NextResponse.json(response);
// //   } catch (error) {
// //     // Always return fallback on any error
// //     return NextResponse.json({
// //       emotion: "Calmness",
// //       confidence: 0.4,
// //       palette: EMOTION_PALETTES.neutral,
// //     });
// //   }
// // }

// // export async function GET() {
// //   return NextResponse.json({
// //     message: "AI Emotion Analysis API",
// //     model: "j-hartmann/emotion-english-distilroberta-base",
// //     emotions: Object.keys(EMOTION_MAPPING),
// //     usage: "POST with { text }",
// //   });
// // }

// import { NextResponse } from "next/server";

// const HF_API_URL =
//   "https://router.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base";

// const CONFIDENCE_THRESHOLD = 0.6;

// const EMOTION_PALETTES = {
//   joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
//   sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
//   anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
//   fear: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
//   surprise: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
//   disgust: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
//   neutral: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
// };

// const EMOTION_MAPPING = {
//   joy: "Joy",
//   sadness: "Sadness",
//   anger: "Anger",
//   fear: "Mystery",
//   surprise: "Curiosity",
//   disgust: "Stress",
//   neutral: "Calmness",
// };

// async function classifyWithAI(text) {
//   try {
//     const response = await fetch("https://router.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer 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`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ inputs: text }),
//     });

//     if (!response.ok) throw new Error("HF API Error");

//     const result = await response.json();
//     const predictions = result && result[0];

//     if (!Array.isArray(predictions)) throw new Error("Invalid response");

//     const top = predictions.reduce((a, b) => (a.score > b.score ? a : b));

//     if (top.score < CONFIDENCE_THRESHOLD) {
//       return fallbackClassification(text);
//     }

//     return buildResponse(top.label.toLowerCase(), top.score);
//   } catch (error) {
//     console.log(error);
//     // return fallbackClassification(text);
//   }
// }

// function fallbackClassification(text) {
//   const textLower = text.toLowerCase();

//   const keywordMap = {
//     joy: ["love", "happy", "great", "amazing", "awesome"],
//     sadness: ["sad", "down", "lonely", "depressed"],
//     anger: ["angry", "hate", "furious", "annoyed"],
//     fear: ["worried", "scared", "anxious"],
//     surprise: ["wow", "unbelievable", "shocking"],
//     disgust: ["awful", "terrible", "gross"],
//   };

//   let detected = "neutral";
//   let score = 0;

//   for (const emotion in keywordMap) {
//     const hits = keywordMap[emotion].filter((w) =>
//       textLower.includes(w)
//     ).length;

//     if (hits > score) {
//       score = hits;
//       detected = emotion;
//     }
//   }

//   if (/!{2,}/.test(text)) detected = "joy";
//   if (/\?/.test(text)) detected = "surprise";
//   if (/[A-Z]{3,}/.test(text)) detected = "anger";

//   const confidence = Math.min(0.4 + score * 0.15, 0.7);

//   return buildResponse(detected, confidence);
// }

// function buildResponse(rawEmotion, confidence) {
//   return {
//     emotion: EMOTION_MAPPING[rawEmotion] || "Calmness",
//     confidence,
//     palette: EMOTION_PALETTES[rawEmotion] || EMOTION_PALETTES.neutral,
//   };
// }

// export async function POST(req) {
//   try {
//     const { text } = await req.json();

//     if (!text || text.length < 2) {
//       return NextResponse.json(buildResponse("neutral", 0.4));
//     }

//     const result = await classifyWithAI(text);
//     return NextResponse.json(result);
//   } catch {
//     return NextResponse.json(buildResponse("neutral", 0.4));
//   }
// }

// export async function GET() {
//   return NextResponse.json({
//     status: "OK",
//     model: "j-hartmann/emotion-english-distilroberta-base",
//     emotions: Object.values(EMOTION_MAPPING),
//     usage: "POST { text }",
//   });
// }

import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("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");

/* ===============================
   Emotion → UI Mapping
================================ */
const EMOTION_PALETTES = {
  joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
  sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
  anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
  fear: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
  surprise: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
  disgust: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
  neutral: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
};

const EMOTION_LABELS = {
  joy: "Joy",
  sadness: "Sadness",
  anger: "Anger",
  fear: "Mystery",
  surprise: "Curiosity",
  disgust: "Stress",
  neutral: "Calmness",
};

/* ===============================
   AI Classification
================================ */
async function analyzeEmotion(text) {
  const result = await client.textClassification({
    model: "j-hartmann/emotion-english-distilroberta-base",
    inputs: text,
    provider: "hf-inference",
  });

  // if (!Array.isArray(result) || result.length === 0) {
  //   return fallback();
  // }

  const top = result.sort((a, b) => b.score - a.score)[0];
  const emotionKey = top.label.toLowerCase();

  return {
    emotion: EMOTION_LABELS[emotionKey] || "Calmness",
    confidence: Number(top.score.toFixed(3)),
    palette: EMOTION_PALETTES[emotionKey] || EMOTION_PALETTES.neutral,
    result,
  };
}

/* ===============================
   Fallback (Always Safe)
================================ */
function fallback() {
  return {
    emotion: "Calmness",
    confidence: 0.4,
    palette: EMOTION_PALETTES.neutral,
  };
}

/* ===============================
   API Handler
================================ */
export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text || text.length < 2) {
      return NextResponse.json(fallback());
    }

    const result = await analyzeEmotion(text);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(fallback());
  }
}

export function GET() {
  return NextResponse.json({
    status: "ready",
    model: "emotion-english-distilroberta-base",
    emotions: Object.keys(EMOTION_LABELS),
  });
}
