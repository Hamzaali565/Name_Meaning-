import React from "react";
import Header from "../Header/Header";
import Sidebaar from "../../components/Sidebaar/Sidebaar";
import HomePage from "../HomePage/HomePage";

const PageI = () => {
  return (
    // <div>
    //   <div className="">
    //     <div className="">
    //       <Header />
    //     </div>

    //     <div className="flex NewMergeContainer">
    //       <div className="hidden w-1/4 h-screen lg:overflow-y-auto lg:block">
    //         <Sidebaar />
    //       </div>
    //       <div className="h-screen  lg:w-3/4 ">
    //         <HomePage />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebaar />
        </div>
        <div className="flex-1  lg:m-0">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default PageI;
