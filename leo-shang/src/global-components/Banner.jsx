import { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isVisible = visible ? "visible" : "hide";

  // text-[64px] lg:text-[150px] md:text-[110px]

  return (
    <div
      className={`${isVisible} banner-responsive fixed left-0 w-full lg:h-[55px] h-[47px] text-black flex items-center justify-center z-1`}
    >
      <nav className="flex justify-center px-2 items-center bg-white opacity-80 rounded-full h-full min-w-fit whitespace-nowrap lg:text-[20px] text-[17px] lg:w-auto">
        <a href="#Home" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          Home
        </a>
        <a href="#About" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          About
        </a>
        <a href="#CSWork" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          CS Work
        </a>
        {/* <a href="#DesignWork" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          Design Lab
        </a>
        <a href="#Contact" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          Contact
        </a> */}
        <a
          href="https://drive.google.com/file/d/1tejVYfIfNaG9MtQx6fwCBLotd5OgTMXw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-IBMMedium px-2 lg:px-6 md:px-4"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Banner;
// ${visible ? "top-10 opacity-100 transition-all" : "top-[-60px] opacity-0 transition-all"}
