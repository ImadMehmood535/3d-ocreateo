import React from "react";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import Rebot3D from "./Rebot3D";
import ToolTipComponent from "./ToolTipComponent";
import HeadingPlanet from "./HeadingPlanet";
import { planet1, planet2, planet3, planet4, planet5, planet6 } from "../assets";
const Solutons = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <div className="relative">
        <Rebot3D />
      </div>
      <div className="absolute top-[10%] bottom-0 left-0 right-0 w-full h-fit max-w-[60%] mx-auto">
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full">
            <ToolTipComponent position="bottom" content="Launch a stellar website that not only looks amazing but also provides a seamless user experience. Our web design and development services ensure your site is functional, responsive, and visually appealing">
              <HeadingPlanet
                image={planet1}
                heading={"Web Design and Development"}
              />
            </ToolTipComponent>

            <ToolTipComponent  position="bottom" content=" Boost your brand's visibility and rank higher in search engine results with our expert SEO services. We ensure your brand stands out in the vast digital cosmos">
              <HeadingPlanet
                image={planet2}
                heading={"Search Engine Optimization"}
              />
            </ToolTipComponent>
          </div>
        </div>
      </div>
      <div className="absolute top-[40%] bottom-0 left-0 right-0   w-full h-fit max-w-[85%] mx-auto">
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full">
            <ToolTipComponent position="right" content="Our design team crafts visually stunning and effective designs that captivate your audience and convey your brand's message with creativity and flair">
              <HeadingPlanet image={planet3} heading={"Creative Designing"} />
            </ToolTipComponent>

            <ToolTipComponent position="left" content="Bring your ideas to life with our cutting-edge 3D animation services. We create dynamic and engaging animations that leave a lasting impression">
              <HeadingPlanet image={planet4} heading={"3D Animation"} />
            </ToolTipComponent>
          </div>
        </div>
      </div>
      <div className="absolute top-[70%] bottom-0 left-0 right-0  w-full h-fit max-w-[60%] mx-auto">
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-between items-center w-full">
            <ToolTipComponent position={"top"} content="Engage and grow your audience with our innovative social media strategies. We help you build a loyal community and amplify your brand's voice across all social platforms">
              <HeadingPlanet
                image={planet5}
                heading={"Social Media Marketing"}
              />
            </ToolTipComponent>

            <ToolTipComponent position={"top"}  content="Our wordsmiths craft compelling content that resonates with your audience and drives engagement. From blog posts to website copy, we create content that tells your brand's story and enhances your online presence">
              <HeadingPlanet  position={"top"} image={planet6} heading={"Content Writing"} />
            </ToolTipComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutons;
