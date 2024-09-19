import Intro from "./components/Intro";
import bg2 from "./media/BG2.jpg"
import bg3 from "./media/BG3.gif"
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import CSProjects from "./components/CSProjects";

const App = () => {
  // bg-white bg-opacity-85
  return (
    <div className="flex flex-col relative items-center justify-center">
        <Banner />
        <Intro />
        <AboutMe />
        <CSProjects />
        <div className="fixed inset-0 z-[-1] bg-cover bg-center bg-white bg-opacity-75"/>
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url(${bg2})` }}
      />
    </div>
    // <Canvas1 />
  )
}

export default App;