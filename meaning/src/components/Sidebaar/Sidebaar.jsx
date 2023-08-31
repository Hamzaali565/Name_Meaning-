import React from "react";
import boy from "../Assets/boy.gif";
import girl from "../Assets/girl.gif";
import SidebarData from "../SidebarData/SidebarData";
const Sidebaar = () => {
  return (
    <div className="border-r-8 m-0 border-pink-500 h-screen">
      <div>
        <SidebarData text={"Boys Name~"} src={boy} />
        <SidebarData text={"Girls Name"} src={girl} />
      </div>
    </div>
  );
};

export default Sidebaar;
