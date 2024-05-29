import GravityWorks from "./components/GravityWorks";
import Solutons from "./components/Solutons";
import BannerSection from "./components/BannerSection";
import { useEffect, useRef, useState } from "react";

function App() {
  const [showSolutions, setShowSolutions] = useState(false);
  const solutionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const solutionsPosition =
        solutionsRef.current.getBoundingClientRect().top;

      if (scrollPosition + windowHeight >= solutionsPosition) {
        setShowSolutions(true);
      } else {
        setShowSolutions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <BannerSection />
      <div ref={solutionsRef}>
        <GravityWorks />
      </div>

      <div className="relative z-10">{showSolutions && <Solutons />}</div>
    </>
  );
}

export default App;
