import React from "react";
import boy from "../Assets/boy.gif";
const Sidebaar = () => {
  return (
    <div>
      <div className="border-2 border-pink-500 shadow-pink flex space-x-2 items-center w-64">
        <div>
          <img src={boy} alt="" className="h-16" />
        </div>
        <div className="text-2xl cursor-pointer hover:underline transition-transform">
          Name For Boys
        </div>
      </div>
    </div>
  );
};

export default Sidebaar;
