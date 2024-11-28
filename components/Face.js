import React from "react";

const Face = ({ faceShape }) => {
  return (
    <div
      className={`absolute ${faceShape}-shape w-32 h-32 bg-yellow-300 rounded-full shadow-lg`}
      style={{
        backgroundColor: faceShape === "round" ? "#f8e5a3" : "#f0d5a0", // Adjusted skin tone based on shape
      }}
    ></div>
  );
};

export default Face;
