import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div
      className="flex font-machina  text-white pt-24 bottom-0 w-screen flex-col gap-24 pb-16"
      style={{ backgroundColor: "#0F0F0F" } }
    >
      <div className="flex justify-evenly w-full ">
        <div className="flex gap-14">
          <div className="flex flex-col gap-6">
            <span className="vibrantText">Follow Us</span>
            <ul className="pt-8 flex flex-col gap-3 newClass">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>X</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <span className="vibrantText">Navigation</span>
            <ul className="pt-8 flex flex-col gap-3">
              <li>Work</li>
              <li>Agency</li>
              <li>Services</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-right vibrantText">Lets Connect</span>
          <span className="text-5xl text-right">Chitkara.edu.in</span>
          <span className="text-5xl text-right">4234234234</span>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="transform translate-x-10">Chitkra@Rajpura</div>
        <div>All right reserved</div>
        <div>Based in Chandigrah, India</div>
      </div>
    </div>
  );
}

export default Footer;
