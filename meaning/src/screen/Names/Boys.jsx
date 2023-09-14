import React from "react";
import Header from "../Header/Header";
import Sidebaar from "../../components/Sidebaar/Sidebaar";
import BoysName from "../../components/GenderWise/BoysName";

const Boys = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" flex">
        <div className="hidden lg:flex">
          <Sidebaar />
        </div>
        <div className="flex-1 m-1 lg:m-0">
          <BoysName />
        </div>
      </div>
    </div>
  );
};

export default Boys;
