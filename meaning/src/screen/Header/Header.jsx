import React from "react";
import logo from "../../components/Assets/loupe.png";
const Header = () => {
  return (
    <div className="bg-pink-400 p-2 items-center">
      {/* <img src={logo} className="h-16" alt="Logo" /> */}
      <h1 className="text-4xl font-bold text-purple-900">
        <b className="text-6xl font-extrabold">N</b>AME
      </h1>
    </div>
  );
};

export default Header;
