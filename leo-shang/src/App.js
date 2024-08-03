import Window1 from "./components/Window1/Window1";
import bg2 from "./media/BG2.jpg"
import Window2 from "./components/Window2/Window2";

const App = () => {
  
  return(
    <div className="relative h-screen">
    <Window1 />
    <Window2 />
    <div 
      className="absolute inset-0 z-[-1] bg-cover bg-center opacity-95"
      style={{ backgroundImage: `url(${bg2})` }}
    />
  </div>
    // <Canvas1 />
  )
}

export default App;