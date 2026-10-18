import { NextResponse } from "next/server";

// Curated UI color palettes for each emotion
const EMOTION_PALETTES = {
  joy: ["#FFD93D", "#FFB200", "#FF6B00", "#FFF7D1"],
  sadness: ["#4F5D75", "#B0C4DE", "#AEC6CF", "#2F3E46"],
  anger: ["#5E0000", "#A30000", "#D60000", "#FF5E5E"],
  mystery: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
  fear: ["#1B1B2F", "#16213E", "#0F3460", "#533483"],
  curiosity: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
  surprise: ["#FFE66D", "#FFB86C", "#E07A5F", "#3D405B"],
  stress: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
  disgust: ["#D7263D", "#F46060", "#FF9E9E", "#FFEAEA"],
  calmness: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
  neutral: ["#6ECFF6", "#9FF0E9", "#C6FFF9", "#3AA7C5"],
};

const EMOTION_LABELS = {
  joy: "Joy",
  sadness: "Sadness",
  anger: "Anger",
  mystery: "Mystery",
  fear: "Mystery",
  curiosity: "Curiosity",
  surprise: "Curiosity",
  stress: "Stress",
  disgust: "Stress",
  calmness: "Calmness",
  neutral: "Calmness",
};

// Local heuristic fallback in case of network interruption or rate limits
function heuristicFallback(text) {
  const textLower = (text || "").toLowerCase();
  const keywords = {
    joy: [
      "happy",
      "excited",
      "great",
      "amazing",
      "wonderful",
      "love",
      "awesome",
      "good",
      "best",
      "brilliant",
      "proud",
      "fun",
    ],
    sadness: [
      "sad",
      "down",
      "depressed",
      "lonely",
      "hurt",
      "disappointed",
      "unhappy",
      "cry",
      "grief",
      "miserable",
    ],
    anger: [
      "angry",
      "mad",
      "furious",
      "hate",
      "frustrated",
      "annoyed",
      "pissed",
      "irritated",
      "rage",
    ],
    fear: [
      "scared",
      "afraid",
      "worried",
      "anxious",
      "nervous",
      "secret",
      "dark",
      "unknown",
      "creepy",
      "mystery",
    ],
    surprise: [
      "wow",
      "amazing",
      "incredible",
      "unbelievable",
      "shocking",
      "wonder",
      "curious",
      "interesting",
      "why",
      "how",
    ],
    disgust: [
      "disgusting",
      "awful",
      "terrible",
      "horrible",
      "gross",
      "stressed",
      "exhausted",
      "burnout",
      "tired",
      "deadline",
    ],
  };

  let maxScore = 0;
  let detectedEmotion = "neutral";

  Object.entries(keywords).forEach(([emotion, words]) => {
    const score = words.filter((word) => textLower.includes(word)).length;
    if (score > maxScore) {
      maxScore = score;
      detectedEmotion = emotion;
    }
  });

  if (/!{2,}/.test(text)) detectedEmotion = "joy";
  if (/\?{2,}/.test(text)) detectedEmotion = "surprise";
  if (/[A-Z]{4,}/.test(text)) detectedEmotion = "anger";

  const emotionKey = detectedEmotion.toLowerCase();
  const finalEmotion = EMOTION_LABELS[emotionKey] || "Calmness";
  const palette = EMOTION_PALETTES[emotionKey] || EMOTION_PALETTES.neutral;

  return {
    emotion: finalEmotion,
    confidence: maxScore > 0 ? Math.min(0.5 + maxScore * 0.15, 0.9) : 0.5,
    palette,
    source: "heuristic",
  };
}

async function classifyWithGemini(text, apiKey) {
  const models = [
    "gemini-flash-latest",
    "gemini-3.5-flash",
    "gemini-flash-lite-latest",
    "gemini-3.5-flash-lite",
  ];

  const prompt = `You are an AI emotion classifier for an interactive web portfolio.
Classify the user's input text into EXACTLY ONE of the following 7 emotions:
- Joy (happy, enthusiastic, loving, positive, pleased)
- Sadness (down, upset, melancholy, disappointed, sorrowful)
- Anger (frustrated, irritated, furious, hateful, enraged)
- Mystery (intrigued, suspenseful, apprehensive, curious about secrets)
- Curiosity (inquisitive, astonished, surprised, fascinated)
- Stress (overwhelmed, disgusted, burned out, anxious about work/deadlines)
- Calmness (peaceful, neutral, balanced, steady, relaxed)

Text to classify: "${text.replace(/"/g, '\\"')}"

Respond ONLY with a valid JSON object matching this schema:
{"emotion": "Joy|Sadness|Anger|Mystery|Curiosity|Stress|Calmness", "confidence": 0.0 to 1.0}`;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2,
          },
        }),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(
          `[Gemini API - ${model}] HTTP ${response.status}: ${errorText.substring(0, 150)}`,
        );
        continue;
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) continue;

      const parsed = JSON.parse(rawText.trim());
      const normalizedKey = (parsed.emotion || "").trim().toLowerCase();
      const matchedEmotion = EMOTION_LABELS[normalizedKey] || "Calmness";
      const palette =
        EMOTION_PALETTES[normalizedKey] || EMOTION_PALETTES.neutral;
      const confidence =
        typeof parsed.confidence === "number"
          ? Number(parsed.confidence.toFixed(2))
          : 0.9;

      return {
        emotion: matchedEmotion,
        confidence,
        palette,
        source: `gemini-${model}`,
      };
    } catch (err) {
      console.warn(`[Gemini API - ${model}] request error: ${err.message}`);
    }
  }

  // If all Gemini models failed, fallback cleanly
  return heuristicFallback(text);
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const text = (body?.text || "").trim();

    // Default response for blank/short input
    if (!text || text.length < 2) {
      return NextResponse.json({
        emotion: "Calmness",
        confidence: 0.5,
        palette: EMOTION_PALETTES.neutral,
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn(
        "[Emotion API] Missing GEMINI_API_KEY, using heuristic fallback",
      );
      const fallbackResult = heuristicFallback(text);
      return NextResponse.json({
        emotion: fallbackResult.emotion,
        confidence: fallbackResult.confidence,
        palette: fallbackResult.palette,
      });
    }

    const result = await classifyWithGemini(text, apiKey);

    return NextResponse.json({
      emotion: result.emotion || "Calmness",
      confidence: result.confidence || 0.5,
      palette: result.palette || EMOTION_PALETTES.neutral,
    });
  } catch (error) {
    console.error("[CRITICAL] Emotion route error:", error);
    return NextResponse.json({
      emotion: "Calmness",
      confidence: 0.4,
      palette: EMOTION_PALETTES.neutral,
    });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    engine: "Google Gemini (Free Flash Tier)",
    emotions: [
      "Joy",
      "Sadness",
      "Anger",
      "Mystery",
      "Curiosity",
      "Stress",
      "Calmness",
    ],
    model: "gemini-flash-latest",
  });
}
