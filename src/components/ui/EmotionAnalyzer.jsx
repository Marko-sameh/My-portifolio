'use client';
import { useState } from 'react';
import { useEmotionTheme } from '../../hooks/useEmotionTheme';

export default function EmotionAnalyzer() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const { analyzeEmotion } = useEmotionTheme();

  const handleAnalyze = () => {
    if (input.trim()) {
      const analysis = analyzeEmotion(input);
      setResult(analysis);
    }
  };

  return (
    <div className="emotion-analyzer">
      <h3>Dynamic UI Emotion Controller</h3>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to analyze emotion and generate theme commands..."
        className="analyzer-input"
        rows={3}
      />
      <button onClick={handleAnalyze} className="analyze-btn">
        Analyze Emotion
      </button>
      
      {result && (
        <div className="result-output">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}