'use client';
import { useState } from 'react';
import { useEmotionTheme } from '../../hooks/useEmotionTheme';

export default function EmotionIntelligence() {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const { currentEmotion, applyEmotionTheme, classifyEmotion } = useEmotionTheme();

  const handleAnalyze = async () => {
    if (input.trim()) {
      const result = await classifyEmotion(input.trim());
      setAnalysis(result);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length > 10) {
      applyEmotionTheme(e.target.value);
    }
  };

  return (
    <div className="emotion-intelligence">
      <h3>Emotion Intelligence Model</h3>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message to analyze emotional state and transform UI..."
        className="intelligence-input"
        rows={4}
      />
      <button onClick={handleAnalyze} className="analyze-btn">
        Analyze Emotion
      </button>
      
      {analysis && (
        <div className="analysis-result">
          <div className="emotion-badge" style={{backgroundColor: 'var(--emotion-primary)'}}>
            {analysis.emotion} ({(analysis.confidence * 100).toFixed(0)}%)
          </div>
          <div className="reasoning">
            Raw Label: {analysis.topRaw?.label} ({(analysis.topRaw?.score * 100).toFixed(1)}%)
          </div>
          <details className="commands-details">
            <summary>Analysis Details</summary>
            <pre className="commands-output">
              {JSON.stringify(analysis, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}