import Window1 from "./components/Window1/Window1";
import bg2 from "./media/BG2.jpg"
import bg3 from "./media/BG3.gif"
import Window2 from "./components/Window2/Window2";

const App = () => {

  return (
    <div className="flex relative h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-around h-screen w-screen 
        2xl:max-w-[1300px] 2xl:max-h-[1000px]
        xl:max-w-[975px] xl:max-h-[750px]
        lg:max-w-[683px] lg:max-h-[525px]" >
        <div className="flex flex-row w-full min-h-fit">
          <Window1 />
        </div>
        <div className="flex flex-row justify-end w-full min-h-fit">
          <Window2 />
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url(${bg3})` }}
      />
    </div>
    // <Canvas1 />
  )
}

export default App;