import Banner from "../../global-components/Banner";
import AboutMe from "./AboutMe";
import CSProjects from "./CSProjects";
import Intro from "./Intro";
import MobileBanner from "../../global-components/MobileBanner";
import "./../../global-components/Animations.css";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col relative items-center justify-center">
        <Banner />
        <MobileBanner />
        <div className="animate-fade-in-intro1">
          <Intro />
        </div>
        <div className="animate-fade-in1 mb-20">
          <CSProjects />
        </div>
        <div className="animate-fade-in1">
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default HomePage;
