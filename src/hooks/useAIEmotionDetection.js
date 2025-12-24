"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import AIEmotionClassifier from "../lib/aiEmotionClassifier";
import BehaviorTracker from "../lib/behaviorTracker";

export function useAIEmotionDetection() {
  const [currentEmotion, setCurrentEmotion] = useState("Calmness");
  const [confidence, setConfidence] = useState(0.5);
  const [isActive, setIsActive] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  const classifierRef = useRef(null);
  const trackerRef = useRef(null);

  useEffect(() => {
    classifierRef.current = new AIEmotionClassifier();
    trackerRef.current = new BehaviorTracker();

    return () => {
      if (trackerRef.current) {
        trackerRef.current.stopTracking();
      }
    };
  }, []);

  const startDetection = useCallback(async () => {
    if (isActive) return;

    setIsActive(true);
    setIsModelLoading(true);

    try {
      await classifierRef.current.initialize();
      setModelReady(true);
    } catch (error) {
      console.warn("Model initialization failed");
    }

    setIsModelLoading(false);
    trackerRef.current.startTracking();
  }, [isActive]);

  const stopDetection = useCallback(() => {
    setIsActive(false);
    if (trackerRef.current) {
      trackerRef.current.stopTracking();
    }
  }, []);

  const analyzeText = useCallback(async (text) => {
    if (!text) return;

    try {
      const response = await fetch("/api/emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const result = await response.json();
        setCurrentEmotion(result.emotion);
        setConfidence(result.confidence);
        
        // Apply emotion colors as CSS variables globally
        if (result.palette && result.palette.length >= 4) {
          const root = document.documentElement;
          root.style.setProperty('--emotion-primary', result.palette[0]);
          root.style.setProperty('--emotion-secondary', result.palette[1]);
          root.style.setProperty('--emotion-accent', result.palette[2]);
          root.style.setProperty('--emotion-background', result.palette[3]);
          root.style.setProperty('--emotion-gradient', `linear-gradient(135deg, ${result.palette[0]}, ${result.palette[1]})`);
        }
      }
    } catch (error) {
      // Fallback to local classification if API fails
      if (classifierRef.current) {
        const result = await classifierRef.current.classifyEmotion(text);
        setCurrentEmotion(result.emotion);
        setConfidence(result.confidence);
      }
    }
  }, []);

  const setEmotionManually = useCallback((emotion) => {
    setCurrentEmotion(emotion);
    setConfidence(1.0);

    const emotionKey = Object.keys({
      Joy: "joy",
      Sadness: "sadness",
      Anger: "anger",
      Mystery: "fear",
      Curiosity: "surprise",
      Stress: "disgust",
      Calmness: "neutral",
    }).find((k) => k === emotion);

    if (emotionKey && classifierRef.current) {
      classifierRef.current.applyTheme(emotionKey.toLowerCase());
    }
  }, []);

  const getEmotionPalette = useCallback(
    (emotion = currentEmotion) => {
      return (
        classifierRef.current?.getEmotionPalette(emotion) || [
          "#6ECFF6",
          "#9FF0E9",
          "#C6FFF9",
          "#3AA7C5",
        ]
      );
    },
    [currentEmotion]
  );

  return {
    currentEmotion,
    confidence,
    isActive,
    isModelLoading,
    modelReady,
    startDetection,
    stopDetection,
    analyzeText,
    setEmotionManually,
    getEmotionPalette,
  };
}
