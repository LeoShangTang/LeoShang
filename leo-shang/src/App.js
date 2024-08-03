import Window1 from "./components/Window1/Window1";
import bg2 from "./media/BG2.jpg"
import Window2 from "./components/Window2/Window2";

const App = () => {

  return (
    <div className="flex relative h-screen w-screen justify-center">
      <div className="flex flex-col justify-around h-screen w-screen max-w-[1300px]">
        <div className="flex flex-row w-full">
          <Window1 />
        </div>
        <div className="flex flex-row justify-end w-full">
          <Window2 />
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url(${bg2})` }}
      />
    </div>
    // <Canvas1 />
  )
}

export default App;