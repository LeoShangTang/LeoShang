import { useEffect, useState } from "react";
import Banner from "../../global-components/Banner";
import AboutMe from "./AboutMe";
import CSProjects from "./CSProjects";
import Intro from "./Intro";
import Loading from "../../global-components/Loading";
import MobileBanner from "../../global-components/MobileBanner";

const HomePage = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loading />
      ) : (
        <div className="flex flex-col relative items-center justify-center">
          <Banner />
          <MobileBanner />
          <Intro />
          <AboutMe />
          <CSProjects />
        </div>
      )}
    </>
  );
};

export default HomePage;
