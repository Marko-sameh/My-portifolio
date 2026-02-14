import { NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

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
  const result = await client.textClassification({
    model: "j-hartmann/emotion-english-distilroberta-base",
    inputs: text,
    provider: "hf-inference",
  });

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
