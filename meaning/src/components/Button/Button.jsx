import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button
        className="border-2 py-2 px-4 rounded-xl text-white font-bold bg-pink-500"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
