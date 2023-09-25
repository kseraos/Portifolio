import React, { useState, useEffect } from 'react';
import { useClient } from 'react-interactions';

function Typewriter({ text, typingSpeed }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingSpeed, text]);

  return <span>{currentText}</span>;
}

useClient(Typewriter);

export default Typewriter;

