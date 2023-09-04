import React from "react";

const Container2 = ({ head, text, onClick }) => {
  return (
    <div className="flex justify-center mt-3">
      <div className="w-72 flex flex-col sm:w-96 lg:w-120 p-4 rounded-lg  border border-gray-300 shadow-pink">
        <h1 className="text-5xl font-bold">{head}</h1>
        <p className="text-justify my-3">
          {text}hello my name is khan and i am not a terrorist ...
          <span
            className="text-blue-800 font-bold underline cursor-pointer"
            onClick={onClick}
          >
            See More
          </span>
        </p>
        <div className="flex justify-end space-x-2"></div>
      </div>
    </div>
  );
};

export default Container2;
