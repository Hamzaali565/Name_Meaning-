import React from "react";
import logo from "../../components/Assets/logo.png";
import home from "../../components/Assets/house.png";
import boy from "../../components/Assets/boy.png";
import girl from "../../components/Assets/girl.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
    <div className="bg-pink-400 p-2 items-center flex justify-between ">
      <img src={logo} className="h-16 lg:ml-3" alt="Logo" />
      {/* <h1 className="text-4xl font-bold text-purple-900">
        <b className="text-6xl font-extrabold">N</b>AME
      </h1> */}
      <div className="flex space-x-2 lg:hidden  ">
        <div onClick={Home}>
          <img src={home} alt="image" className="h-9 " />
        </div>
        <div onClick={Boys}>
          <img src={boy} alt="image" className="h-9 " />
        </div>
        <div onClick={Girls}>
          <img src={girl} alt="image" className="h-9 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
