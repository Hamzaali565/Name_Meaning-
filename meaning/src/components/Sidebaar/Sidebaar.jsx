import React from "react";
import boy from "../Assets/boy.png";
import girl from "../Assets/girl.png";
import SidebarData from "../SidebarData/SidebarData";
const Sidebaar = () => {
  return (
    <div
      className="border-r-8 border-pink-500 h-screen"
      style={{ overflow: "auto" }}
    >
      <div className="flex flex-col items-center">
        <SidebarData text={"Boys Name~"} src={boy} />
        <SidebarData text={"Girls Name~"} src={girl} />
      </div>
    </div>
  );
};

export default Sidebaar;
