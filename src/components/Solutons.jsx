import React from "react";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import Rebot3D from "./Rebot3D";
const Solutons = () => {
  return (
    <div className="w-full h-screen  ">
      <div className="relative">
        <Rebot3D />
      </div>
      <div className="absolute top-[20%] bottom-0 left-0 right-0   w-full h-fit max-w-[800px] mx-auto">
        <div className="flex justify-between items-center ">
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-themePrimary-0"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-themeSecondry-0 cursor-pointer  text-lg py-8 opacity-85  text-white max-w-[200px] w-full text-center">
              Web development
            </Chip>
          </Tooltip>
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-themePrimary-0"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-themeSecondry-0 cursor-pointer  text-lg py-8 opacity-85 text-white  max-w-[200px] w-full text-center">
              UI/UX
            </Chip>
          </Tooltip>
        </div>
      </div>
      <div className="absolute top-[80%] bottom-0 left-0 right-0   w-full h-fit max-w-[800px] mx-auto">
        <div className="flex justify-between items-center ">
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-themePrimary-0"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-themeSecondry-0 cursor-pointer  text-lg py-8 opacity-85 text-white max-w-[200px] w-full text-center">
              Web development
            </Chip>
          </Tooltip>
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-themePrimary-0"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-themeSecondry-0 cursor-pointer  text-lg py-8 opacity-85 text-white  max-w-[200px] w-full text-center">
              UI/UX
            </Chip>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Solutons;
