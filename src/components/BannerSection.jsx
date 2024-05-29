import React, { useEffect, useState } from "react";
import { model } from "../assets";

const BannerSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsScrolling(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 100); // Timeout duration in ms
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  const translateY = Math.min(scrollPosition, 300);

  return (
    <div className="h-screen w-full relative backgroundGallaxy bg-cover bg-center">
      <div
        className="absolute right-[10%] -bottom-[50%] z-10"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: isScrolling ? "transform 0.1s linear" : "none",
        }}
      >
        <img
          src={model}
          alt="model"
          width={500}
          height={300}
          className="scale-75 floating max-w-[400px] w-full"
        />
      </div>
    </div>
  );
};

export default BannerSection;
