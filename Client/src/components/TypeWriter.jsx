import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const TypeWriter = ({
  texts = [""],
  typeSpeed = 100,
  eraseSpeed = 50,
  eraseDelay = 2000,
  typingDelay = 1500,
  infinite = true,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typeText = useCallback(() => {
    if (charIndex < texts[textIndex].length) {
      setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
      setCharIndex(charIndex + 1);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, textIndex, texts]);

  const eraseText = useCallback(() => {
    if (charIndex > 0) {
      setDisplayedText((prev) => prev.slice(0, -1));
      setCharIndex(charIndex - 1);
    } else {
      setIsTyping(true);
      setTextIndex((textIndex + 1) % texts.length);
    }
  }, [charIndex, textIndex, texts.length]);

  useEffect(() => {
    let timer;
    if (isTyping) {
      if (charIndex === 0) {
        timer = setTimeout(typeText, typingDelay);
      } else {
        timer = setTimeout(typeText, typeSpeed);
      }
    } else {
      if (infinite || textIndex < texts.length - 1) {
        timer = setTimeout(
          eraseText,
          charIndex === texts[textIndex].length ? eraseDelay : eraseSpeed
        );
      }
    }
    return () => clearTimeout(timer);
  }, [
    isTyping,
    charIndex,
    eraseText,
    typeText,
    infinite,
    textIndex,
    texts,
    typeSpeed,
    eraseSpeed,
    eraseDelay,
    typingDelay,
  ]);

  return <span className={className}>{displayedText}</span>;
};

TypeWriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  typeSpeed: PropTypes.number,
  eraseSpeed: PropTypes.number,
  eraseDelay: PropTypes.number,
  typingDelay: PropTypes.number,
  infinite: PropTypes.bool,
  className: PropTypes.string,
};

export default TypeWriter;
