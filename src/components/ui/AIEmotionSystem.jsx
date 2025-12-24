'use client';
import { useState, useEffect } from 'react';
import { useAIEmotionDetection } from '../../hooks/useAIEmotionDetection';
import { BotMessageSquare } from 'lucide-react';

export default function AIEmotionSystem() {
  const {
    currentEmotion,
    confidence,
    isActive,
    isModelLoading,
    modelReady,
    startDetection,
    stopDetection,
    analyzeText,
    setEmotionManually,
    getEmotionPalette
  } = useAIEmotionDetection();

  const [textInput, setTextInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    startDetection();
  }, [startDetection]);

  const handleAnalyze = async () => {
    if (textInput.trim()) {
      await analyzeText(textInput);
      setTextInput('');
    }
  };

  const palette = getEmotionPalette();

  if (!isExpanded) {
    return (
      <div
        className="fixed bottom-[20px] right-[20px] w-[60px] h-[60px] rounded-full flex items-center justify-center
    text-[24px] cursor-pointer z-[1000] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-in-out
    hover:scale-110"
        onClick={() => setIsExpanded(true)}
        style={{ backgroundColor: palette[0] }}
      >
        <BotMessageSquare size={50} color='black' />

      </div>
    );
  }

  return (
    <div className="ai-emotion-system">
      <div className="system-header">
        <h3><BotMessageSquare /> AI Emotion Detection</h3>
        <button
          className="close-btn"
          onClick={() => setIsExpanded(false)}
        >
          ×
        </button>
      </div>

      <div className="emotion-display">
        <div
          className="emotion-badge"
          style={{ backgroundColor: palette[0] }}
        >
          {currentEmotion}
        </div>
        {/* <div className="confidence">
          {Math.round(confidence * 100)}% confidence
        </div> */}
      </div>

      <div className="text-analysis">
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter text for AI emotion analysis..."
          className="ai-input"
          rows={3}
        />
        <button onClick={handleAnalyze} className="analyze-btn w-full">
          Analyze with AI
        </button>
      </div>

      <div className="quick-tests">
        <h4>Quick Tests:</h4>
        <div className="test-buttons">
          {[
            { text: "I'm absolutely thrilled about this!", emotion: "Joy" },
            { text: "This is incredibly frustrating and annoying!", emotion: "Anger" },
            { text: "I feel so sad and lonely today...", emotion: "Sadness" },
            { text: "What an amazing discovery! How fascinating!", emotion: "Curiosity" }
          ].map((test, i) => (
            <button
              key={i}
              onClick={() => analyzeText(test.text)}
              className="test-btn"
            >
              Test {test.emotion}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ai-emotion-system {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          border-radius: 12px;
          padding: 1.5rem;
          width: 350px;
          max-height: 500px;
          overflow-y: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .system-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .system-header h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .emotion-display {
          text-align: center;
          margin-bottom: 1rem;
        }

        .emotion-badge {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          color: white;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .confidence {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .text-analysis {
          margin-bottom: 1rem;
        }

        .ai-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.75rem;
          color: white;
          font-size: 0.9rem;
          resize: vertical;
          margin-bottom: 0.5rem;
        }

        .ai-input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .analyze-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .quick-tests h4 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .test-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .test-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .test-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}