import React from "react";
import Lookup from "../Assets/loupe.png";
const Search = ({ onSubmit, onChange, onClick }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-center space-x-3 items-center "
    >
      <div className="Search">
        <input
          type="text"
          name=""
          id=""
          onChange={onChange}
          placeholder="Enter Your Name Here.."
          className="border-pink-300 focus:outline-pink-500 border-2 rounded-xl py-1 px-2 w-60 sm:w-96"
        />
      </div>
      <button onClick={onClick} className="Lookup font-bold">
        <img src={Lookup} alt="" className="h-8" />
      </button>
    </form>
  );
};

export default Search;
