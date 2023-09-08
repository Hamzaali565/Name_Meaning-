import React, { useRef, useState } from "react";
import volume from "../Assets/volume.png";
import copy from "../Assets/copy.png";
import copied from "../Assets/copied.png";
import stop from "../Assets/mute.png";
const Container = ({ text, head }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef(null);
  const handleSpeak = async () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      console.log("cancel");
    } else {
      const text = await textRef.current.innerText;
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1; // You can adjust the speech rate
      window.speechSynthesis.speak(speech);
      console.log("cancelsss");
    }
    setIsSpeaking(!isSpeaking);
  };

  const handleCopy = () => {
    const text = textRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      //   alert("Text copied to clipboard!");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    });
  };
  return (
    <div className="flex justify-center">
      <div className="w-72 flex flex-col sm:w-96 lg:w-120 p-4 rounded-lg  border border-gray-300 shadow-pink">
        <h1 className="text-5xl font-bold">{head}</h1>
        <p className="text-justify my-3" ref={textRef}>
          {text}
        </p>
        <div className="flex justify-end space-x-2">
          <button onClick={handleSpeak}>
            {isSpeaking ? (
              <img src={stop} alt="" className="h-6" />
            ) : (
              <img src={volume} alt="" className="h-6" />
            )}
          </button>
          <button className="h-6" onClick={handleCopy}>
            {isCopied === false ? (
              <img className="h-6" src={copy} alt="" />
            ) : (
              <img className="h-6" src={copied} alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
