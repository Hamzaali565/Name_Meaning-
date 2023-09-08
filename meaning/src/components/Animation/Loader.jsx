import React from "react";
import Lottie from "react-lottie";
const Loader = ({ AniData, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AniData, // This is the imported animation data
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={{ height: `${height}`, textSizeAdjust: "revert" }}
      />
    </div>
  );
};

export default Loader;
