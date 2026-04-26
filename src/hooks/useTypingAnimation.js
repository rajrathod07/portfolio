import { useState, useEffect } from 'react';

export function useTypingAnimation(text, speed = 50, delay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      return interval;
    };

    if (delay > 0) {
      timeout = setTimeout(() => {
        const interval = startTyping();
        return () => clearInterval(interval);
      }, delay);
    } else {
      const interval = startTyping();
      return () => clearInterval(interval);
    }

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}