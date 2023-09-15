import React from "react";
import Header from "../Header/Header";
import Sidebaar from "../../components/Sidebaar/Sidebaar";
import GirlsName from "../../components/GenderWise/Girls";

const Boys = () => {
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebaar />
        </div>
        <div className="flex-1 m-1 lg:m-0">
          <GirlsName />
        </div>
      </div>
    </div>
  );
};

export default Boys;
