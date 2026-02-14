import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("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");

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

async function analyzeEmotion(text) {
  console.log(
    "[EMOTION API] Starting analysis, token exists:",
    !!process.env.HF_TOKEN,
  );

  const result = await client.textClassification({
    model: "j-hartmann/emotion-english-distilroberta-base",
    inputs: text,
    provider: "hf-inference",
  });

  console.log("[EMOTION API] HF result:", result);
  const top = result.sort((a, b) => b.score - a.score)[0];
  const emotionKey = top.label.toLowerCase();

  return {
    emotion: EMOTION_LABELS[emotionKey] || "Calmness",
    confidence: Number(top.score.toFixed(3)),
    palette: EMOTION_PALETTES[emotionKey] || EMOTION_PALETTES.neutral,
    result,
  };
}

function fallback() {
  return {
    emotion: "Calmness",
    confidence: 0.4,
    palette: EMOTION_PALETTES.neutral,
  };
}

export async function POST(req) {
  console.log("[EMOTION API] Request received");
  try {
    const { text } = await req.json();
    console.log("[EMOTION API] Text:", text?.substring(0, 50));

    if (!text || text.length < 2) {
      console.log("[EMOTION API] Text too short, returning fallback");
      return NextResponse.json(fallback());
    }

    console.log("[EMOTION API] Calling HuggingFace...");
    const result = await analyzeEmotion(text);
    console.log("[EMOTION API] Success:", result.emotion, result.confidence);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[EMOTION API] Error:", error.message, error.stack);
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
