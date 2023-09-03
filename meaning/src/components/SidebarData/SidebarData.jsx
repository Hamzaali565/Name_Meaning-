import React from "react";

const SidebarData = ({ text, src }) => {
  return (
    <div>
      <div className="border-2 m-2 rounded cursor-pointer border-pink-500 shadow-pink flex space-x-2 p-2 items-center w-64 transition duration-700 hover:bg-pink-200">
        <div>
          <img src={src} alt="" className="h-12 " />
        </div>
        <div className="transitions">
          <div className="text-2xl ">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarData;
