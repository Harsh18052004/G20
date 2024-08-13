import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [background, setBackground] = useState(
    "https://wallpapers.com/images/featured/cyber-background-qrvi98v4g2ezuomr.jpg"
  );
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "110vh",
        width: "100vw",
        backgroundSize: "cover",
        
      }}
      className="pl-8 pt-8 text-white ]"
    >
      <div style={{ fontSize: "30vh", lineHeight: "30vh" }} className="text">
        Take
      </div>
      <div style={{ fontSize: "30vh", lineHeight: "30vh" }} className="text">
        The
      </div>
      <div style={{ fontSize: "30vh", lineHeight: "30vh" }} className="text">
        Leap
      </div>
    </div>
  );
}

export default Main;
