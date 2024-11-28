import React from "react";
import PropTypes from "prop-types"; // Add prop-types for prop validation

const AvatarCanvas = ({ customization }) => {
  // Destructure customization object and add a default background color
  const { faceShape, hairstyle, hairColor, clothing, accessory, backgroundColor = "#B2FEFA" } = customization;

  // Define face shapes
  const faceShapes = {
    round: <circle cx="50%" cy="50%" r="30" fill="#f5d6c6" />,
    oval: <ellipse cx="50%" cy="50%" rx="30" ry="40" fill="#f5d6c6" />,
    square: <rect x="25%" y="25%" width="50%" height="50%" rx="10" fill="#f5d6c6" />,
  };

  // Define hairstyles
  const hairstyles = {
    short: (
      <path
        d="M20,25 Q30,10 50,15 Q70,10 80,25 Q75,35 60,35 Q50,30 40,35 Q25,35 20,25"
        fill={hairColor}
      />
    ),
    wavy: (
      <>
        <path
          d="M20,25 C25,10 35,5 50,15 C65,25 75,10 80,25 C70,40 60,50 50,45 C40,40 30,50 20,40"
          fill={hairColor}
        />
        <path
          d="M20,30 C25,45 35,55 50,60 C65,55 75,45 80,30"
          fill={hairColor}
          opacity="0.7"
        />
        <path
          d="M30,35 C40,50 50,60 50,70 C50,60 60,50 70,35"
          fill={hairColor}
          opacity="0.5"
        />
      </>
    ),
    curly: (
      <>
        <circle cx="35%" cy="25%" r="15" fill={hairColor} />
        <circle cx="50%" cy="15%" r="15" fill={hairColor} />
        <circle cx="65%" cy="25%" r="15" fill={hairColor} />
      </>
    ),
  };

  // Define clothing options with bow tie for the suit
  const clothingOptions = {
    tshirt: (
      <>
        <rect x="25%" y="70%" width="50%" height="25%" fill="#3498db" />
        <rect x="10%" y="70%" width="15%" height="15%" fill="#3498db" />
        <rect x="75%" y="70%" width="15%" height="15%" fill="#3498db" />
      </>
    ),
    hoodie: (
      <>
        <rect x="25%" y="75%" width="50%" height="30%" fill="#e74c3c" />
        <rect x="10%" y="75%" width="15%" height="20%" fill="#e74c3c" />
        <rect x="75%" y="75%" width="15%" height="20%" fill="#e74c3c" />
        <path d="M25,75 Q50,60 75,75" fill="#e74c3c" stroke="#e74c3c" strokeWidth="2" />
      </>
    ),
    suit: (
      <>
        {/* Jacket body */}
        <rect x="25%" y="85%" width="50%" height="30%" fill="#2c3e50" rx="5" /> {/* Moved down further */}
        {/* Suit Lapels */}
        <path
          d="M30,85 Q50,70 50,85"
          fill="transparent"
          stroke="#2c3e50"
          strokeWidth="3"
        />
        <path
          d="M70,85 Q50,70 50,85"
          fill="transparent"
          stroke="#2c3e50"
          strokeWidth="3"
        />
        {/* Jacket sleeves */}
        <rect x="10%" y="85%" width="15%" height="20%" fill="#2c3e50" />
        <rect x="75%" y="85%" width="15%" height="20%" fill="#2c3e50" />
        {/* Bow tie (replacing the collar) */}
        <g fill="#2c3e50">
          <path d="M48,93 C46,91 54,91 52,93" />
          <path d="M47,93 C45,95 45,99 47,101" />
          <path d="M53,93 C55,95 55,99 53,101" />
        </g>
        {/* Suit buttons */}
        <circle cx="50%" cy="97%" r="2" fill="black" />
        <circle cx="45%" cy="97%" r="2" fill="black" />
        <circle cx="55%" cy="97%" r="2" fill="black" />
        {/* Added details for suit */}
        {/* Suit trousers */}
        <rect x="30%" y="97%" width="40%" height="8%" fill="#2c3e50" />
        {/* Pocket details */}
        <rect x="35%" y="95%" width="5%" height="5%" fill="#2c3e50" />
        <rect x="60%" y="95%" width="5%" height="5%" fill="#2c3e50" />
        {/* Lapel stitching effect */}
        <path
          d="M30,85 Q50,75 50,85"
          fill="transparent"
          stroke="#bdc3c7"
          strokeWidth="1"
        />
        <path
          d="M70,85 Q50,75 50,85"
          fill="transparent"
          stroke="#bdc3c7"
          strokeWidth="1"
        />
      </>
    ),
  };

  // Define accessory options (added new accessories)
  const accessoryOptions = {
    none: null,
    glasses: (
      <>
        <circle cx="35%" cy="45%" r="6" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="65%" cy="45%" r="6" stroke="black" strokeWidth="2" fill="none" />
        <line x1="40%" y1="45%" x2="60%" y2="45%" stroke="black" strokeWidth="2" />
        <line x1="29%" y1="45%" x2="35%" y2="45%" stroke="black" strokeWidth="2" />
        <line x1="65%" y1="45%" x2="71%" y2="45%" stroke="black" strokeWidth="2" />
      </>
    ),
    hat: (
      <>
        <ellipse cx="50%" cy="20%" rx="22" ry="10" fill="#f39c12" />
        <rect x="28%" y="25%" width="44%" height="5%" fill="#f39c12" />
      </>
    ),
    tie: (
      <>
        <path
          d="M50 60 Q47 65 50 70 Q53 65 50 60"
          fill="#9b59b6"
        />
        <path
          d="M50 70 Q48 73 50 76 Q52 73 50 70"
          fill="#9b59b6"
        />
      </>
    ),
    earrings: (
      <>
        <circle cx="32%" cy="52%" r="2" fill="#f39c12" />
        <circle cx="68%" cy="52%" r="2" fill="#f39c12" />
      </>
    ),
  };

  // Define eyes
  const eyes = (
    <>
      <circle cx="35%" cy="45%" r="5" fill="#000" />
      <circle cx="65%" cy="45%" r="5" fill="#000" />
    </>
  );

  // Add nose (simple representation as a small circle)
  const nose = (
    <circle cx="50%" cy="55%" r="3" fill="#f1c27d" />
  );

  // Add mouth (simple curved line)
  const mouth = (
    <path
      d="M40,60 Q50,70 60,60"
      fill="transparent"
      stroke="#000"
      strokeWidth="2"
    />
  );

  // Handle cases where accessories are selected
  const renderHair = () => {
    if (accessory === "hat") {
      return null; // Don't render hair if the hat is selected
    } else {
      return hairstyles[hairstyle]; // Render the selected hairstyle
    }
  };

  const face = faceShapes[faceShape] || faceShapes.round;
  const clothes = clothingOptions[clothing] || clothingOptions.tshirt;
  const accessoryItem = accessoryOptions[accessory] || null;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
      {/* Gradient Background */}
      <defs>
        <linearGradient id="gradientBackground" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: backgroundColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#93A5CF", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="url(#gradientBackground)" />
      {face} {/* Draw face */}
      {renderHair()} {/* Conditionally render hair based on accessory */}
      {eyes} {/* Draw eyes */}
      {nose} {/* Draw nose */}
      {mouth} {/* Draw mouth */}
      {clothes} {/* Draw clothing */}
      {accessoryItem} {/* Draw accessory */}
    </svg>
  );
};

// Adding PropTypes validation for props
AvatarCanvas.propTypes = {
  customization: PropTypes.shape({
    faceShape: PropTypes.oneOf(['round', 'oval', 'square']),
    hairstyle: PropTypes.oneOf(['short', 'wavy', 'curly']),
    hairColor: PropTypes.string,
    clothing: PropTypes.oneOf(['tshirt', 'hoodie', 'suit']),
    accessory: PropTypes.oneOf(['none', 'glasses', 'hat', 'tie', 'earrings']),
    backgroundColor: PropTypes.string,
  }).isRequired,
};

export default AvatarCanvas;
