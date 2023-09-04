import React from "react";
import Lottie from "react-lottie";
import animationData from "./datad.json";
const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // This is the imported animation data
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: "200px", textSizeAdjust: "revert" }}
      />
    </div>
  );
};

export default Loader;
