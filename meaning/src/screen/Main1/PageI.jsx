import React from "react";
import Header from "../Header/Header";
import Sidebaar from "../../components/Sidebaar/Sidebaar";
import HomePage from "../HomePage/HomePage";

const PageI = () => {
  return (
    <div>
      <div className="">
        <div className="fixed top-0 w-full z-10 bg-white">
          <Header />
        </div>

        <div className="flex pt-16 NewMergeContainer">
          <div className="hidden lg:block">
            <Sidebaar />
          </div>
          <div className="flex-grow">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageI;
