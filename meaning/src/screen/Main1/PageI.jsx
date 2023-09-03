import React from "react";
import Header from "../Header/Header";
import Sidebaar from "../../components/Sidebaar/Sidebaar";
import HomePage from "../HomePage/HomePage";

const PageI = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Header />
        </div>

        <div className="flex NewMergeContainer">
          <div className="hidden w-1/4 h-screen overflow-y-auto lg:block">
            <Sidebaar />
          </div>
          <div className="w-3/4 h-screen overflow-y-auto">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageI;
