'use client';
import { useState, useEffect } from 'react';
import { useEmotionDetection } from '../../hooks/useEmotionDetection';

export default function EmotionDetectionSystem() {
  const {
    currentEmotion,
    confidence,
    isActive,
    debugInfo,
    startDetection,
    stopDetection,
    addTextInput,
    setEmotionManually,
    reset,
    getEmotionPalette,
    getBehaviorData
  } = useEmotionDetection();

  const [textInput, setTextInput] = useState('');
  const [showDebug, setShowDebug] = useState(false);
  const [behaviorData, setBehaviorData] = useState({});

  // Auto-start detection on mount
  useEffect(() => {
    startDetection();
    return () => stopDetection();
  }, [startDetection, stopDetection]);

  // Update behavior data periodically
  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setBehaviorData(getBehaviorData());
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isActive, getBehaviorData]);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      addTextInput(textInput);
      setTextInput('');
    }
  };

  const handleEmotionSelect = (emotion) => {
    setEmotionManually(emotion);
  };

  const emotions = [
    'Joy', 'Calmness', 'Motivation', 'Creativity', 'Mystery',
    'Sadness', 'Stress', 'Anger', 'Confidence', 'Curiosity'
  ];

  const palette = getEmotionPalette();
  const confidenceColor = confidence > 0.8 ? '#00ff88' : confidence > 0.6 ? '#ffaa00' : '#ff6666';

  return (
    <div className="emotion-detection-system">
      {/* Main Status Display */}
      <div className="emotion-status">
        <div className="status-header">
          <h3>AI Mood Detection</h3>
          <div className="status-controls">
            <button 
              onClick={isActive ? stopDetection : startDetection}
              className={`toggle-btn ${isActive ? 'active' : 'inactive'}`}
            >
              {isActive ? '⏸️' : '▶️'}
            </button>
            <button onClick={() => setShowDebug(!showDebug)} className="debug-btn">
              🔍
            </button>
            <button onClick={reset} className="reset-btn">
              🔄
            </button>
          </div>
        </div>
        
        <div className="emotion-display">
          <div 
            className="emotion-badge"
            style={{ backgroundColor: palette[0] }}
          >
            {currentEmotion}
          </div>
          <div className="confidence-bar">
            <div className="confidence-label">
              Confidence: {Math.round(confidence * 100)}%
            </div>
            <div className="confidence-track">
              <div 
                className="confidence-fill"
                style={{ 
                  width: `${confidence * 100}%`,
                  backgroundColor: confidenceColor
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Input */}
      <div className="text-input-section">
        <form onSubmit={handleTextSubmit}>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type something to influence the mood detection..."
            className="emotion-text-input"
            rows={2}
          />
          <button type="submit" className="analyze-text-btn">
            Analyze Text
          </button>
        </form>
      </div>

      {/* Manual Emotion Override */}
      <div className="manual-controls">
        <h4>Manual Override:</h4>
        <div className="emotion-grid">
          {emotions.map(emotion => (
            <button
              key={emotion}
              onClick={() => handleEmotionSelect(emotion)}
              className={`emotion-btn ${currentEmotion === emotion ? 'active' : ''}`}
              style={{ 
                backgroundColor: getEmotionPalette(emotion)[0],
                opacity: currentEmotion === emotion ? 1 : 0.7
              }}
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>

      {/* Debug Information */}
      {showDebug && (
        <div className="debug-panel">
          <h4>Debug Information</h4>
          
          {debugInfo && (
            <div className="debug-section">
              <h5>Last Analysis:</h5>
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
          
          <div className="debug-section">
            <h5>Behavior Data:</h5>
            <pre>{JSON.stringify(behaviorData, null, 2)}</pre>
          </div>
          
          <div className="debug-section">
            <h5>Current Palette:</h5>
            <div className="palette-preview">
              {palette.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .emotion-detection-system {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          border-radius: 12px;
          padding: 1.5rem;
          min-width: 400px;
          max-width: 450px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: 'Inter', sans-serif;
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .status-header h3 {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .status-controls {
          display: flex;
          gap: 0.5rem;
        }

        .toggle-btn, .debug-btn, .reset-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background: #00ff88;
          color: black;
        }

        .toggle-btn.inactive {
          background: #ff6666;
          color: white;
        }

        .emotion-display {
          margin-bottom: 1rem;
        }

        .emotion-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .confidence-bar {
          margin-top: 0.5rem;
        }

        .confidence-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
        }

        .confidence-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .confidence-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: 3px;
        }

        .text-input-section {
          margin-bottom: 1rem;
        }

        .emotion-text-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.75rem;
          color: white;
          font-size: 0.9rem;
          resize: vertical;
          margin-bottom: 0.5rem;
          font-family: inherit;
        }

        .emotion-text-input:focus {
          outline: none;
          border-color: var(--primary, #6ECFF6);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .analyze-text-btn {
          background: var(--primary, #6ECFF6);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .analyze-text-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .manual-controls {
          margin-bottom: 1rem;
        }

        .manual-controls h4 {
          color: white;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .emotion-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .emotion-btn {
          padding: 0.5rem;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .emotion-btn:hover {
          transform: translateY(-1px);
          opacity: 1 !important;
        }

        .emotion-btn.active {
          box-shadow: 0 0 0 2px white;
        }

        .debug-panel {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .debug-panel h4, .debug-panel h5 {
          color: white;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .debug-section {
          margin-bottom: 1rem;
        }

        .debug-section pre {
          background: rgba(0, 0, 0, 0.6);
          border-radius: 6px;
          padding: 0.75rem;
          color: #00ff88;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
          overflow-x: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-height: 150px;
          overflow-y: auto;
        }

        .palette-preview {
          display: flex;
          gap: 0.5rem;
        }

        .color-swatch {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}