import Window1 from "./components/Intro";
import bg2 from "./media/BG2.jpg"
import bg3 from "./media/BG3.gif"
import Banner from "./components/Banner";

const App = () => {

  return (
    <div className="flex flex-col relative h-screen w-screen items-center justify-center">
        <Banner />
        <Window1 />
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url(${bg3})` }}
      />
    </div>
    // <Canvas1 />
  )
}

export default App;