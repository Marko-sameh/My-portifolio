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
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    startDetection();
  }, [startDetection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (showTooltip) {
        setShowTooltip(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showTooltip]);

  const handleAnalyze = async () => {
    if (textInput.trim()) {
      await analyzeText(textInput);
      setTextInput('');
    }
  };

  const palette = getEmotionPalette();

  if (!isExpanded) {
    return (
      <div className="relative">
        <div
          className="fixed bottom-[20px] right-[20px] w-[60px] h-[60px] rounded-full flex items-center justify-center
      text-[24px] cursor-pointer z-[1000] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-in-out
      hover:scale-110 ring-4 ring-white/30 ring-opacity-75 animate-pulse"
          onClick={() => setIsExpanded(true)}
          style={{ backgroundColor: palette[0] }}
        >
          <BotMessageSquare size={40} color='black' />
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <>
            {/* <div className="fixed inset-0 bg-black/20 z-[998]" /> */}
            <div className="fixed bottom-[90px] right-[20px] sm:right-[50px] z-[999] bg-black/90 backdrop-blur-sm text-[var(--primary)] px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm border border-white/20 animate-pulse shadow-2xl max-w-[280px] sm:max-w-none">
              Try it — the system analyzes emotional tone and changes the {"website's"} colors accordingly
              <div className="absolute top-full right-[15px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="ai-emotion-system">
      <div className="system-header">
        <h3 className='flex gap-2'><BotMessageSquare /> AI Emotion Detection</h3>
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
        <p>No data will be saved. Just perception</p>
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
          Analyze
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
          width: 90vw;
          max-width: 350px;
          max-height: 500px;
          overflow-y: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          animation: slideUp 0.3s ease;
        }

        @media (max-width: 640px) {
          .ai-emotion-system {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
            padding: 1rem;
          }
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
          font-size: 1rem;
        }

        @media (min-width: 640px) {
          .system-header h3 {
            font-size: 1.1rem;
          }
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
          padding: 0.5rem 1rem;
          border-radius: 25px;
          color: white;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        @media (min-width: 640px) {
          .emotion-badge {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }

        .text-analysis {
          margin-bottom: 1rem;
        }

        .ai-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.5rem;
          color: white;
          font-size: 0.8rem;
          resize: vertical;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 640px) {
          .ai-input {
            padding: 0.75rem;
            font-size: 0.9rem;
          }
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
          font-size: 0.8rem;
        }

        @media (min-width: 640px) {
          .analyze-btn {
            font-size: 0.9rem;
          }
        }

        .quick-tests h4 {
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 640px) {
          .quick-tests h4 {
            font-size: 0.9rem;
          }
        }

        .test-buttons {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .test-buttons {
            grid-template-columns: 1fr 1fr;
          }
        }

        .test-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 0.7rem;
        }

        @media (min-width: 640px) {
          .test-btn {
            font-size: 0.8rem;
          }
        }

        .test-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}