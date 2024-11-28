import React from "react";

// Import SVGs
import Glasses from "../assets/svg/accessories/glasses.svg";
import Hat from "../assets/svg/accessories/hat.svg";
import Earrings from "../assets/svg/accessories/earrings.svg";

const Accessory = ({ accessory }) => {
  if (accessory === "none") return null;

  const accessoryComponents = {
    glasses: <img src={Glasses} alt="Glasses" className="absolute" style={{ top: "20px", left: "25px" }} />,
    hat: <img src={Hat} alt="Hat" className="absolute" style={{ top: "-70px", left: "10px" }} />,
    earrings: (
      <>
        <img src={Earrings} alt="Earring" className="absolute" style={{ top: "50px", left: "15px" }} />
        <img src={Earrings} alt="Earring" className="absolute" style={{ top: "50px", left: "75px" }} />
      </>
    ),
  };

  return accessoryComponents[accessory] || null;
};

export default Accessory;
