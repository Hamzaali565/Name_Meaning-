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
      <div className="flex">
        <div>
          <Sidebaar />
        </div>
        <div className="flex-1">
          <BoysName />
        </div>
      </div>
    </div>
  );
};

export default Boys;
