import React, { useEffect, useState } from "react";
import { model, moon, rocket } from "../assets";
import GeneralButton from "./buttons/GeneralButton";

const GravityWorks = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [translateY, setTranslateY] = useState(0); // Initial translateY set to -100

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const deltaY = scrollPosition - lastScrollPosition;
    // Move up if scrolling down, move down if scrolling up
    const newTranslateY = scrollPosition > window.innerHeight * 0.6 ? -100 : 0;
    setTranslateY(newTranslateY);
    setLastScrollPosition(scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="h-screen w-full relative flex">
      <div className="w-full max-w-[55%] text-themePrimary-0 flex flex-col gap-16 h-full justify-center px-12">
        <h1 className="whitespace-nowrap">Our Galaxy</h1>
        <p className="max-w-[75%] w-full">
          Welcome to OCREATEO Digital Marketing, where we don't just aim for the
          stars—we reach beyond them! As a digital marketing agency with a
          cosmic touch, we offer out-of-this-world services and experiences that
          are unparalleled in the galaxy. At OCREATEO, we blend innovation with
          creativity to deliver results that are as stellar as
          they are effective.
        </p>
        <p className="max-w-[75%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
          felis vitae eros faucibus elementum. Nam sed pretium erat. Proin
          blandit ac orci et ornare. Pellentesque molestie eleifend felis et
          fringilla. Pellentesque non pulvinar nibh. Suspendisse nec pulvinar
          odio. Aliquam dapibus finibus lorem eget molestie. Nullam porttitor
          ultrices vulputate.
        </p>
        <GeneralButton text={"Read More"} />
      </div>

      <div className="mt-[20%]">
        <div
          className="w-fit"
          style={{
            transform: `translateY(${translateY}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src={rocket}
            alt="rocket"
            width={100}
            height={100}
            className="max-w-[200px]"
          />
        </div>
      </div>

      <div className="absolute -bottom-[38%] -right-5 z-0">
        <img
          src={moon}
          alt="moon"
          width={500}
          height={500}
          className="max-w-[700px] w-full rotate-animation"
        />
      </div>
    </div>
  );
};

export default GravityWorks;
