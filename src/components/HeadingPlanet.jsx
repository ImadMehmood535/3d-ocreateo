import React from "react";

const HeadingPlanet = ({ image, heading }) => {
  return (
    <div className="w-fit relative   cursor-pointer">
      <img
        src={image}
        alt="planet1"
        width={400}
        height={400}
        className="max-w-[100px] w-full"
      />
      <h2 className="absolute whitespace-nowrap top-1/2 left-[50%] transform  -translate-y-1/2 font-bold text-xl uppercase text-white text-right">
        {heading}
      </h2>
    </div>
  );
};

export default HeadingPlanet;
