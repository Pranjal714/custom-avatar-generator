import React from "react";

const Eyeglasses = () => (
  <g>
    {/* Left lens */}
    <circle cx="30" cy="50" r="10" stroke="black" strokeWidth="2" fill="none" />
    {/* Right lens */}
    <circle cx="70" cy="50" r="10" stroke="black" strokeWidth="2" fill="none" />
    {/* Bridge */}
    <line x1="40" y1="50" x2="60" y2="50" stroke="black" strokeWidth="2" />
    {/* Left frame */}
    <line x1="20" y1="50" x2="30" y2="50" stroke="black" strokeWidth="2" />
    {/* Right frame */}
    <line x1="70" y1="50" x2="80" y2="50" stroke="black" strokeWidth="2" />
  </g>
);

export default Eyeglasses;
