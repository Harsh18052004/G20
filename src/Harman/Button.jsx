import React from "react";
import "./Button.css";
function Button({ Text, textColor }) {
  return (
    <button
      className="bg-white w-70 h-13 p-2 pr-3 pl-3 overflow-hidden rounded-sm flex items-center gap-3 absolute"
      style={{ color: `${textColor}` }}
    >
      <div className="z-30">{Text}</div>
      <div className="w-3 h-3 rounded-full relative dot top-0">
        <img src="./rocket.gif" alt="" />
      </div>
    </button>
  );
}

export default Button;
