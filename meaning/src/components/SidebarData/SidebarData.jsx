import React from "react";

const SidebarData = ({ text, src }) => {
  return (
    <div>
      <div className="border-2 m-2 rounded border-pink-500 shadow-pink flex space-x-2 items-center w-64">
        <div>
          <img src={src} alt="" className="h-16" />
        </div>
        <div className="transitions">
          <div className="text-2xl cursor-pointer hover:underline">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarData;
