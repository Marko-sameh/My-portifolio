'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import EmotionClassifier from '../lib/emotionClassifier';
import BehaviorTracker from '../lib/behaviorTracker';

export function useEmotionDetection() {
  const [currentEmotion, setCurrentEmotion] = useState('Calmness');
  const [confidence, setConfidence] = useState(0.5);
  const [isActive, setIsActive] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);
  
  const classifierRef = useRef(null);
  const trackerRef = useRef(null);
  const textBufferRef = useRef('');
  const analysisTimeoutRef = useRef(null);

  // Initialize the emotion detection system
  useEffect(() => {
    classifierRef.current = new EmotionClassifier();
    trackerRef.current = new BehaviorTracker();
    
    return () => {
      if (trackerRef.current) {
        trackerRef.current.stopTracking();
      }
    };
  }, []);

  // Start emotion detection
  const startDetection = useCallback(() => {
    if (!classifierRef.current || !trackerRef.current || isActive) return;
    
    setIsActive(true);
    
    // Start behavior tracking
    trackerRef.current.startTracking();
    
    // Setup behavior update callback
    trackerRef.current.onBehaviorUpdate((behaviorData) => {
      if (analysisTimeoutRef.current) {
        clearTimeout(analysisTimeoutRef.current);
      }
      
      // Debounce analysis to avoid too frequent updates
      analysisTimeoutRef.current = setTimeout(() => {
        analyzeEmotion('', behaviorData);
      }, 1000);
    });
    
    // Initial analysis
    analyzeEmotion();
  }, [isActive]);

  // Stop emotion detection
  const stopDetection = useCallback(() => {
    if (!isActive) return;
    
    setIsActive(false);
    
    if (trackerRef.current) {
      trackerRef.current.stopTracking();
    }
    
    if (analysisTimeoutRef.current) {
      clearTimeout(analysisTimeoutRef.current);
    }
  }, [isActive]);

  // Analyze emotion with text and behavior data
  const analyzeEmotion = useCallback((textInput = '', behaviorData = null) => {
    if (!classifierRef.current) return;
    
    // Combine text buffer with new input
    const fullText = textBufferRef.current + ' ' + textInput;
    
    // Classify emotion
    const result = classifierRef.current.classify(fullText.trim(), behaviorData);
    
    // Only update if confidence is sufficient and emotion changed
    if (result.confidence >= 0.6 && result.emotion !== currentEmotion) {
      setCurrentEmotion(result.emotion);
      setConfidence(result.confidence);
      
      // Apply theme
      classifierRef.current.applyTheme(result.emotion);
      
      // Clear text buffer after successful classification
      textBufferRef.current = '';
      
      // Debug info
      setDebugInfo({
        emotion: result.emotion,
        confidence: result.confidence,
        textLength: fullText.length,
        behaviorActive: !!behaviorData,
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      // Update confidence even if emotion didn't change
      setConfidence(result.confidence);
    }
  }, [currentEmotion]);

  // Add text input for analysis
  const addTextInput = useCallback((text) => {
    if (!text || text.length < 2) return;
    
    // Add to text buffer
    textBufferRef.current += ' ' + text;
    
    // Keep buffer reasonable size
    if (textBufferRef.current.length > 500) {
      textBufferRef.current = textBufferRef.current.slice(-300);
    }
    
    // Trigger analysis with current behavior
    const behaviorData = trackerRef.current?.getBehaviorSnapshot();
    analyzeEmotion(text, behaviorData);
  }, [analyzeEmotion]);

  // Manual emotion override (for testing)
  const setEmotionManually = useCallback((emotion) => {
    if (!classifierRef.current) return;
    
    setCurrentEmotion(emotion);
    setConfidence(1.0);
    classifierRef.current.applyTheme(emotion);
    classifierRef.current.lastEmotion = emotion;
    classifierRef.current.lastEmotionTime = Date.now();
  }, []);

  // Get emotion palette
  const getEmotionPalette = useCallback((emotion = currentEmotion) => {
    return classifierRef.current?.getEmotionPalette(emotion) || ['#6ECFF6', '#9FF0E9', '#C6FFF9', '#3AA7C5'];
  }, [currentEmotion]);

  // Get behavior data
  const getBehaviorData = useCallback(() => {
    return trackerRef.current?.getBehaviorSnapshot() || {};
  }, []);

  // Reset system
  const reset = useCallback(() => {
    if (trackerRef.current) {
      trackerRef.current.reset();
    }
    if (classifierRef.current) {
      classifierRef.current.lastEmotion = null;
      classifierRef.current.lastEmotionTime = 0;
    }
    textBufferRef.current = '';
    setCurrentEmotion('Calmness');
    setConfidence(0.5);
    setDebugInfo(null);
  }, []);

  return {
    // State
    currentEmotion,
    confidence,
    isActive,
    debugInfo,
    
    // Actions
    startDetection,
    stopDetection,
    addTextInput,
    setEmotionManually,
    reset,
    
    // Utilities
    getEmotionPalette,
    getBehaviorData
  };
}