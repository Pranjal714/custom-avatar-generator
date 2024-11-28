import React from "react";

// Import SVGs
import ShortHair from "../assets/svg/hairstyles/short.svg";
import LongHair from "../assets/svg/hairstyles/long.svg";
import CurlyHair from "../assets/svg/hairstyles/curly.svg";

const Hair = ({ hairstyle, hairColor }) => {
  const hairComponents = {
    short: <img src={ShortHair} alt="Short Hair" style={{ fill: hairColor }} />,
    long: <img src={LongHair} alt="Long Hair" style={{ fill: hairColor }} />,
    curly: <img src={CurlyHair} alt="Curly Hair" style={{ fill: hairColor }} />,
  };

  return (
    <div className="absolute">
      {hairComponents[hairstyle] || null}
    </div>
  );
};

export default Hair;
