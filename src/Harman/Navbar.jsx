import React from "react";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="w-screen">
      <nav
        className="flex justify-center h-28   items-center text-xl w-screen bg-black text-white"
        style={{ gap: "30%" }}
      >
        <div className="lef flex gap-5 items-center ">
          <img
            className="w-16 h-16 rounded-full border-white border-2"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          Cyber
        </div>
        <div className="right">
          <ul className="flex gap-9 items-center">
            <li className="items-center links">
              <a href="">Home</a>
            </li>
            <li className="items-center links">
              <a href="">About DRIZ</a>
            </li>
            <li className="items-center links">
              <a href="">Chapter</a>
            </li>
            <li className="items-center links">
              <a href="">Upcoming events</a>
            </li>
            <li className="items-center flex">
              <Button Text={"Login in"} textColor={"black"}></Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
