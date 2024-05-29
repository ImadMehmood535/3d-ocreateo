// ToolTipComponent.js
import React, { useState } from "react";

const ToolTipComponent = ({ content, children, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const calculatePosition = () => {
    switch (position) {
      case "top":
        return { top: "-60%", left: "70%", transform: "translateX(-50%)" };
      case "bottom":
        return { bottom: "-80%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translateY(-50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      default:
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {children}
      {showTooltip && (
        <div
          className="absolute z-10  w-[200px]   p-2 bg-gray-800 text-white text-sm rounded-md"
          style={calculatePosition()}
        >
          <div className="flex items-center">
            <span>{content}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolTipComponent;
