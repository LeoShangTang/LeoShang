import bg2 from "./assets/media/BG2.jpg"
import HomePage from "./pages/home/HomePage";
const App = () => {
  // bg-white bg-opacity-85
  return (
    <div className="flex flex-col relative items-center justify-center">
        <HomePage/>
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