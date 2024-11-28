import React, { useState } from "react";
import AvatarCanvas from "./AvatarCanvas";

const AvatarCustomizer = () => {
  const [customization, setCustomization] = useState({
    faceShape: "square",
    hairstyle: "curly",
    hairColor: "#000000",
    clothing: "tshirt",
    accessory: "none",
  });

  // Function to generate a random avatar
  const generateRandomAvatar = () => {
    const faceShapes = ["round", "oval", "square"];
    const hairstyles = ["short", "long", "curly"];
    const clothingOptions = ["tshirt", "hoodie", "suit"];
    const accessories = ["none", "glasses", "hat"];
    
    setCustomization({
      faceShape: faceShapes[Math.floor(Math.random() * faceShapes.length)],
      hairstyle: hairstyles[Math.floor(Math.random() * hairstyles.length)],
      hairColor: "#" + Math.floor(Math.random()*16777215).toString(16),
      clothing: clothingOptions[Math.floor(Math.random() * clothingOptions.length)],
      accessory: accessories[Math.floor(Math.random() * accessories.length)],
    });
  };

  // Function to download the avatar as PNG
  const downloadAvatar = () => {
    const svgElement = document.getElementById("avatar-svg");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = svgUrl;
    link.download = "avatar.png";
    link.click();
  };

  return (
    <div className="avatar-customizer">
      <div className="avatar-canvas">
        <AvatarCanvas customization={customization} />
      </div>

      <div className="customization-options">
        <h3>Customize Your Avatar</h3>
        
        {/* Dropdown for Face Shape */}
        <label>Face Shape:</label>
        <select
          value={customization.faceShape}
          onChange={(e) => setCustomization({ ...customization, faceShape: e.target.value })}
        >
          <option value="round">Round</option>
          <option value="oval">Oval</option>
          <option value="square">Square</option>
        </select>

        {/* Dropdown for Hair Style */}
        <label>Hair Style:</label>
        <select
          value={customization.hairstyle}
          onChange={(e) => setCustomization({ ...customization, hairstyle: e.target.value })}
        >
          <option value="short">Short</option>
          <option value="long">Long</option>
          <option value="curly">Curly</option>
        </select>

        {/* Hair Color */}
        <label>Hair Color:</label>
        <input
          type="color"
          value={customization.hairColor}
          onChange={(e) => setCustomization({ ...customization, hairColor: e.target.value })}
        />

        {/* Dropdown for Clothing */}
        <label>Clothing:</label>
        <select
          value={customization.clothing}
          onChange={(e) => setCustomization({ ...customization, clothing: e.target.value })}
        >
          <option value="tshirt">T-shirt</option>
          <option value="hoodie">Hoodie</option>
          <option value="suit">Suit</option>
        </select>

        {/* Dropdown for Accessory */}
        <label>Accessory:</label>
        <select
          value={customization.accessory}
          onChange={(e) => setCustomization({ ...customization, accessory: e.target.value })}
        >
          <option value="none">None</option>
          <option value="glasses">Glasses</option>
          <option value="hat">Hat</option>
        </select>

        <div className="buttons">
          <button onClick={generateRandomAvatar}>Generate Random Avatar</button>
          <button onClick={downloadAvatar}>Download Avatar</button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCustomizer;
