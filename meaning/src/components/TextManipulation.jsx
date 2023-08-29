import React, { useState, useRef } from "react";

const TextManipulation = () => {
  const textRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    } else {
      const text = textRef.current.innerText;
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1; // You can adjust the speech rate
      window.speechSynthesis.speak(speech);
    }
    setIsSpeaking(!isSpeaking);
  };

  const handleCopy = () => {
    const text = textRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  return (
    <div>
      <p ref={textRef} className="text-justify">
        Hello My name is khan and i am not a terrorist
      </p>
      <button onClick={handleSpeak}>{isSpeaking ? "Stop" : "Speak"}</button>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default TextManipulation;
