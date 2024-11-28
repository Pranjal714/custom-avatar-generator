import React from "react";

// Import SVGs
import Tshirt from "../assets/svg/clothing/tshirt.svg";
import Jacket from "../assets/svg/clothing/jacket.svg";

const Clothing = ({ clothing }) => {
  const clothingComponents = {
    tshirt: <img src={Tshirt} alt="T-Shirt" className="absolute" />,
    jacket: <img src={Jacket} alt="Jacket" className="absolute" />,
  };

  return clothingComponents[clothing] || null;
};

export default Clothing;
