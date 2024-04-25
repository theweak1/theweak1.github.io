import { useState, useEffect } from 'react';

const useTypewriter = (words, typingSpeed, pauseTime, eraseSpeed) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const cursorBlinkSpeed = 500; // Keep the cursor blink speed constant

  useEffect(() => {
    if (index >= words.length) setIndex(0);

    let timeout;
    // Typing forward
    if (!reverse && subIndex === words[index].length) {
      timeout = setTimeout(() => setReverse(true), pauseTime); // Wait for a bit before starting to erase
    } 
    // Erasing the word
    else if (reverse && subIndex === 0) {
      timeout = setTimeout(() => {
        setReverse(false); // Switch to typing the next word
        setIndex((prev) => (prev + 1) % words.length); // Move to the next word
      }, pauseTime); // Wait for a bit after erasing before starting the next word
    } 
    // Typing and erasing logic
    else {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, reverse ? eraseSpeed : typingSpeed); // Erase faster than typing
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, pauseTime, eraseSpeed]);

  // Cursor blink effect
  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(timeout);
  }, [cursorBlinkSpeed]);

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`;
};

export default useTypewriter;

