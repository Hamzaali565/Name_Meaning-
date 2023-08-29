import React, { useRef, useState } from "react";
import volume from "../Assets/volume.png";
import copy from "../Assets/copy.png";
import copied from "../Assets/copied.png";
import stop from "../Assets/mute.png";
const Container = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef(null);
  const speechRef = useRef(null);
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
      //   alert("Text copied to clipboard!");
      setIsCopied(true);
    });
  };
  return (
    <div className="flex justify-center">
      <div className="w-72 flex flex-col sm:w-96">
        <h1 className="text-5xl font-bold">Hamza</h1>
        <p className="text-justify" ref={textRef}>
          Hamza (also spelled as Hamzah, Hamsah, Hamzeh or Humza; Arabic:
          حَمْزَة, standardized transliteration is Ḥamzah) is an Arabic
          masculine given name in the Muslim world. It means lion, strong, and
          steadfast. It was borne by one of the Islamic prophet Muhammad's
          uncles, Hamza ibn Abd al-Muttalib, a wrestler and an archer who was
          renowned for his strength and bravery in battle. His exploits were
          detailed in the Hamzanama, an adventure epic written in Persian.
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
            {isCopied == false ? (
              <img className="h-6" src={copy} alt="" />
            ) : (
              <img className="h-6 " src={copied} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
