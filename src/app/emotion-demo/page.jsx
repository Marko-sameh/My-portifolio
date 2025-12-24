'use client';
import { useState } from 'react';
import { useEmotionDetection } from '../../hooks/useEmotionDetection';

export default function EmotionDemo() {
  const { currentEmotion, confidence, addTextInput, getEmotionPalette } = useEmotionDetection();
  const [demoText, setDemoText] = useState('');

  const demoTexts = {
    Joy: "I'm so excited about this amazing project! It's absolutely wonderful and I love how everything is coming together perfectly!",
    Calmness: "Taking a peaceful moment to reflect on the gentle flow of this serene experience. Everything feels balanced and tranquil.",
    Motivation: "I'm determined to achieve my goals and push forward with unwavering focus. Success is within reach and I will conquer every challenge.",
    Creativity: "Imagine the endless possibilities when we design something truly unique and innovative. Let's craft a vision that inspires.",
    Mystery: "Hidden beneath the surface lies something unknown, a secret waiting to be discovered in the shadows of the enigmatic.",
    Sadness: "Feeling down and disappointed today. The melancholy seems overwhelming and I feel quite lonely and empty inside.",
    Stress: "URGENT DEADLINE APPROACHING! I'm completely overwhelmed with pressure and feeling incredibly anxious about everything!",
    Anger: "I'm absolutely furious and frustrated with this situation! This is completely outrageous and I'm mad as hell!",
    Confidence: "I'm absolutely certain of my capabilities and feel incredibly strong and powerful. I know I can handle anything with bold determination.",
    Curiosity: "I'm wondering about so many things... How does this work? What if we explore different approaches? I'd love to discover more and learn everything possible."
  };

  const handleDemoClick = (emotion) => {
    const text = demoTexts[emotion];
    setDemoText(text);
    addTextInput(text);
  };

  const palette = getEmotionPalette();

  return (
    <div className="emotion-demo-page">
      <div className="demo-container">
        <header className="demo-header">
          <h1>AI Emotion Detection Demo</h1>
          <p>Experience how the website adapts to different emotional states</p>
          <div className="current-state">
            <span className="emotion-indicator" style={{ backgroundColor: palette[0] }}>
              {currentEmotion}
            </span>
            <span className="confidence-indicator">
              {Math.round(confidence * 100)}% confidence
            </span>
          </div>
        </header>

        <section className="demo-controls">
          <h2>Try Different Emotions</h2>
          <div className="emotion-buttons">
            {Object.keys(demoTexts).map(emotion => (
              <button
                key={emotion}
                onClick={() => handleDemoClick(emotion)}
                className={`emotion-demo-btn ${currentEmotion === emotion ? 'active' : ''}`}
                style={{ 
                  backgroundColor: getEmotionPalette(emotion)[0],
                  borderColor: getEmotionPalette(emotion)[2]
                }}
              >
                {emotion}
              </button>
            ))}
          </div>
        </section>

        <section className="demo-text">
          <h2>Custom Text Analysis</h2>
          <textarea
            value={demoText}
            onChange={(e) => setDemoText(e.target.value)}
            placeholder="Type your own text to see how it affects the emotion detection..."
            className="demo-textarea"
          />
          <button 
            onClick={() => addTextInput(demoText)}
            className="analyze-btn"
            style={{ backgroundColor: palette[0] }}
          >
            Analyze Emotion
          </button>
        </section>

        <section className="demo-explanation">
          <h2>How It Works</h2>
          <div className="explanation-grid">
            <div className="explanation-card">
              <h3>🧠 Text Analysis</h3>
              <p>Analyzes keywords, patterns, and linguistic markers to detect emotional content in your input.</p>
            </div>
            <div className="explanation-card">
              <h3>👆 Behavior Tracking</h3>
              <p>Monitors scroll speed, click frequency, hover duration, and navigation patterns to understand your interaction style.</p>
            </div>
            <div className="explanation-card">
              <h3>🌍 Context Awareness</h3>
              <p>Considers time of day, page type, and environmental factors to enhance emotion detection accuracy.</p>
            </div>
            <div className="explanation-card">
              <h3>🎨 Dynamic Theming</h3>
              <p>Instantly updates the entire website's color scheme based on the detected emotion with smooth transitions.</p>
            </div>
          </div>
        </section>

        <section className="color-palette">
          <h2>Current Color Palette</h2>
          <div className="palette-display">
            {palette.map((color, index) => (
              <div key={index} className="color-block">
                <div 
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                />
                <span className="color-code">{color}</span>
                <span className="color-role">
                  {['Primary', 'Secondary', 'Accent', 'Background'][index]}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .emotion-demo-page {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, var(--background), var(--secondary));
          color: var(--primary);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .demo-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .demo-header p {
          font-size: 1.2rem;
          opacity: 0.8;
          margin-bottom: 2rem;
        }

        .current-state {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .emotion-indicator {
          padding: 0.75rem 2rem;
          border-radius: 25px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .confidence-indicator {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .demo-controls {
          margin-bottom: 3rem;
        }

        .demo-controls h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .emotion-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .emotion-demo-btn {
          padding: 1rem;
          border: 2px solid transparent;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .emotion-demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .emotion-demo-btn.active {
          border-color: white;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }

        .demo-text {
          margin-bottom: 3rem;
        }

        .demo-text h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .demo-textarea {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid var(--accent);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--primary);
          font-size: 1rem;
          font-family: inherit;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .demo-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .analyze-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
        }

        .analyze-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .demo-explanation {
          margin-bottom: 3rem;
        }

        .demo-explanation h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .explanation-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--accent);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .explanation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .explanation-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .explanation-card p {
          opacity: 0.8;
          line-height: 1.6;
        }

        .color-palette h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .palette-display {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .color-block {
          text-align: center;
        }

        .color-swatch {
          width: 100%;
          height: 100px;
          border-radius: 12px;
          margin-bottom: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .color-code {
          display: block;
          font-family: 'Courier New', monospace;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .color-role {
          display: block;
          opacity: 0.7;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
}