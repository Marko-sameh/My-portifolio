'use client';
import { useEmotionDetection } from '../hooks/useEmotionDetection';

export default function EmotionTest() {
  const { currentEmotion, confidence, addTextInput } = useEmotionDetection();

  const testEmotions = () => {
    const tests = [
      "I'm so happy and excited about this amazing project!",
      "Feeling stressed and overwhelmed with all this work...",
      "This is absolutely beautiful and inspiring creativity.",
      "I'm curious about how this technology works exactly?"
    ];
    
    tests.forEach((text, index) => {
      setTimeout(() => addTextInput(text), index * 2000);
    });
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      left: '20px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '1rem', 
      borderRadius: '8px',
      zIndex: 1000
    }}>
      <h4>Emotion Test</h4>
      <p>Current: {currentEmotion} ({Math.round(confidence * 100)}%)</p>
      <button onClick={testEmotions} style={{
        background: 'var(--primary)',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Run Test
      </button>
    </div>
  );
}