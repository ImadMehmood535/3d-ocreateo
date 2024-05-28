import { Button, Chip, Tooltip } from "@nextui-org/react";
import Rebot from "./components/Rebot";

function App() {
  return (
    <>
      <div className="relative">
        <Rebot />
      </div>
      <div className="absolute top-[20%] bottom-0 left-0 right-0   w-full h-fit max-w-[800px] mx-auto">
        <div className="flex justify-between items-center ">
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-blue-800"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-red-700 text-lg text-white max-w-[200px] w-full text-center">
              Web development
            </Chip>
          </Tooltip>
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-blue-800"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-red-700 text-lg text-white  max-w-[200px] w-full text-center">
              UI/UX
            </Chip>
          </Tooltip>
        </div>
      </div>
      <div className="absolute top-[80%] bottom-0 left-0 right-0   w-full h-fit max-w-[800px] mx-auto">
        <div className="flex justify-between items-center ">
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-blue-800"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-red-700 text-lg text-white max-w-[200px] w-full text-center">
              Web development
            </Chip>
          </Tooltip>
          <Tooltip
            classNames={{
              content: ["py-2 px-4 max-w-[500px]  ", "text-white bg-blue-800"],
            }}
            content="Web development involves creating and maintaining websites, focusing on functionality and performance. UI (User Interface) design emphasizes the visual layout and interactive elements, ensuring they are intuitive and engaging. UX (User Experience) design prioritizes user satisfaction, enhancing usability, accessibility, and overall interaction with the website or application"
          >
            <Chip className="bg-red-700 text-lg text-white  max-w-[200px] w-full text-center">
              UI/UX
            </Chip>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default App;
