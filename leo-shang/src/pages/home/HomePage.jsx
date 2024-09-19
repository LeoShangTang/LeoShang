import Banner from "../../global-components/Banner";
import AboutMe from "./AboutMe";
import CSProjects from "./CSProjects";
import Intro from "./Intro";

const HomePage = () => {
  return (
    <div className="flex flex-col relative items-center justify-center">
      <Banner />
      <Intro />
      <AboutMe />
      <CSProjects />
    </div>
    // <Canvas1 />
  );
};

export default HomePage;
