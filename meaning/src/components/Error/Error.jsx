import React from "react";
import EM from "../Assets/cross.png";
// import { text } from "cheerio/lib/api/manipulation";

const Error = ({ text }) => {
  return (
    <div className="flex justify-center mt-3">
      <div className="w-72 flex items-center space-x-6 justify-center sm:w-96 lg:w-120 p-4 rounded-lg  border border-gray-300 shadow-pink">
        <img src={EM} alt="Error" className="h-14" />
        <p className="font-bold text-lg text-red-700">{text}</p>
      </div>
    </div>
  );
};

export default Error;
