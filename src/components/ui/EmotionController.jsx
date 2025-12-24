'use client';
import { useState } from 'react';
import { useEmotionTheme } from '../../hooks/useEmotionTheme';

export default function EmotionController() {
  const [input, setInput] = useState('');
  const { currentEmotion, applyEmotionTheme } = useEmotionTheme();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 3) {
      applyEmotionTheme(value);
    }
  };

  return (
    <div className="emotion-controller">
      <div className="emotion-display">
        Current Emotion: <span className="emotion-tag">{currentEmotion}</span>
      </div>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type something to change the theme based on your emotion..."
        className="emotion-input"
        rows={3}
      />
    </div>
  );
}