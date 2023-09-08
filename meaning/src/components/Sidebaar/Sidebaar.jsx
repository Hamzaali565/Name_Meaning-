import React from "react";
import boy from "../Assets/boy.png";
import girl from "../Assets/girl.png";
import house from "../Assets/house.png";
import SidebarData from "../SidebarData/SidebarData";
import { useNavigate } from "react-router-dom";

const Sidebaar = () => {
  const navigate = useNavigate();
  let path;
  const Home = () => {
    path = "/home";
    navigate(path);
  };
  const Boys = () => {
    path = "/boys";
    navigate(path);
  };
  const Girls = () => {
    path = "/girls";
    navigate(path);
  };
  return (
    <div
      className="border-r-8 border-pink-500 h-full"
      // style={{ overflow: "auto" }}
    >
      <div className="flex flex-col items-center">
        <SidebarData text={"Home~"} src={house} onClick={Home} />
        <SidebarData text={"Boys Name~"} src={boy} onClick={Boys} />
        <SidebarData text={"Girls Name~"} src={girl} onClick={Girls} />
      </div>
    </div>
  );
};

export default Sidebaar;
