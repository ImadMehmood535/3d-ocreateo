
import GravityWorks from "./components/GravityWorks";
import Solutons from "./components/Solutons";
import BannerSection from "./components/BannerSection";

function App() {
  return (
    <>
      
      <BannerSection />
      <GravityWorks />
      <div className=" relative z-10">
        <Solutons />
      </div>

    
    </>
  );
}

export default App;
