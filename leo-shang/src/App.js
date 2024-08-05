import Window1 from "./components/Window1/Window1";
import bg2 from "./media/BG2.jpg"
import bg3 from "./media/BG3.gif"
import Window2 from "./components/Window2/Window2";
import AppButton from "./components/Buttons/AppButton";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPaintRoller } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const App = () => {

  return (
    <div className="flex relative h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-around h-screen w-screen 
        2xl:max-w-[1300px] 2xl:max-h-[1000px]
        xl:max-w-[975px] xl:max-h-[750px]
        lg:max-w-[683px] lg:max-h-[525px]
        md:max-w-[478.1px] md:max-h-[367.5px]" >
        <div className="flex flex-row w-full min-h-fit">
          <Window1 />
          <AppButton toggleOpen = {()=>{}} Icon={FaCode} appName="Comp sci Portfolio"/>
          <AppButton toggleOpen = {()=>{}} Icon={FaPaintRoller} appName="Graphics Portfolio"/>
        </div>
        <div className="flex flex-row items-center justify-end w-full min-h-fit">
          <AppButton toggleOpen = {()=>{}} Icon={BsFillPersonFill} appName="About"/>
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