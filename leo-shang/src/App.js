import Window1 from "./components/Intro";
import bg2 from "./media/BG2.jpg"
import bg3 from "./media/BG3.gif"
import Banner from "./components/Banner";
const App = () => {

  return (
    <div className="flex flex-col relative h-auto w-screen items-center justify-center overflow-y-scroll">
        <Banner />
        <div>

        <Window1 />
        <Window1 />
        </div>
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg3})` }}
      />
    </div>
    // <Canvas1 />
  )
}

export default App;