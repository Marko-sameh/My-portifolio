'use client';
import { useState } from 'react';
import { useAIEmotionDetection } from '../../hooks/useAIEmotionDetection';

export default function AIEmotionDemo() {
  const { 
    currentEmotion, 
    confidence, 
    isModelLoading, 
    modelReady, 
    analyzeText, 
    getEmotionPalette 
  } = useAIEmotionDetection();
  
  const [demoText, setDemoText] = useState('');

  const testTexts = [
    { text: "I'm absolutely thrilled and excited about this amazing opportunity!", emotion: "Joy" },
    { text: "This is so frustrating and makes me incredibly angry!", emotion: "Anger" },
    { text: "I feel so sad and lonely, everything seems hopeless...", emotion: "Sadness" },
    { text: "What an incredible discovery! I'm so curious to learn more!", emotion: "Curiosity" }
  ];

  const handleTest = async (text) => {
    setDemoText(text);
    await analyzeText(text);
  };

  const palette = getEmotionPalette();

  return (
    <div className="ai-demo-page">
      <div className="demo-container">
        <header className="demo-header">
          <h1>🤖 Real AI Emotion Detection</h1>
          <p>Powered by Hugging Face Transformers</p>
          
          <div className="model-status">
            {isModelLoading && <span className="loading">🔄 Loading AI Model...</span>}
            {modelReady && <span className="ready">✅ AI Model Ready</span>}
            {!modelReady && !isModelLoading && <span className="fallback">⚠️ Fallback Mode</span>}
          </div>

          <div className="current-emotion">
            <div 
              className="emotion-display"
              style={{ backgroundColor: palette[0] }}
            >
              {currentEmotion}
            </div>
            <div className="confidence-display">
              {Math.round(confidence * 100)}% confidence
            </div>
          </div>
        </header>

        <section className="test-section">
          <h2>Test AI Emotion Detection</h2>
          <div className="test-grid">
            {testTexts.map((test, index) => (
              <button
                key={index}
                onClick={() => handleTest(test.text)}
                className="test-card"
                style={{ borderColor: palette[2] }}
              >
                <h3>{test.emotion}</h3>
                <p>"{test.text}"</p>
              </button>
            ))}
          </div>
        </section>

        <section className="custom-input">
          <h2>Custom Text Analysis</h2>
          <textarea
            value={demoText}
            onChange={(e) => setDemoText(e.target.value)}
            placeholder="Enter your own text for AI emotion analysis..."
            className="demo-input"
          />
          <button 
            onClick={() => analyzeText(demoText)}
            className="analyze-button"
            style={{ backgroundColor: palette[0] }}
            disabled={isModelLoading}
          >
            {isModelLoading ? 'Loading...' : 'Analyze with AI'}
          </button>
        </section>
      </div>

      <style jsx>{`
        .ai-demo-page {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, var(--background), var(--secondary));
          color: var(--primary);
          transition: all 0.8s ease;
        }

        .demo-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .demo-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .model-status {
          margin: 1rem 0;
          font-size: 1.1rem;
        }

        .loading { color: #ffaa00; }
        .ready { color: #00ff88; }
        .fallback { color: #ff6666; }

        .current-emotion {
          margin-top: 2rem;
        }

        .emotion-display {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 30px;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .confidence-display {
          font-size: 1rem;
          opacity: 0.8;
        }

        .test-section {
          margin-bottom: 3rem;
        }

        .test-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .test-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .test-card {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .test-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .test-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .test-card p {
          opacity: 0.8;
          line-height: 1.5;
          font-style: italic;
        }

        .custom-input {
          margin-bottom: 3rem;
        }

        .custom-input h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }

        .demo-input {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid var(--accent);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--primary);
          font-size: 1rem;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .demo-input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .analyze-button {
          display: block;
          margin: 0 auto;
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .analyze-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .analyze-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}