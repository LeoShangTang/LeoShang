import { useEffect, useState, useRef } from "react";
import "./Banner.css";

const Banner = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

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

  return (
    <div
      className={`${isVisible} banner-responsive fixed left-0 w-full h-[55px] text-black flex items-center justify-center z-1`}
    >
      <div className="flex justify-center px-2 items-center bg-white opacity-90 rounded-full h-full min-w-fit whitespace-nowrap lg:w-auto">
        <div className="font-IBMMedium px-2 md:px-6">Home</div>
        <div className="font-IBMMedium px-2 md:px-6">About</div>
        <div className="font-IBMMedium px-2 md:px-6">CS Portfolio</div>
        <div className="font-IBMMedium px-2 md:px-6">Graphics Portfolio</div>
        <div className="font-IBMMedium px-2 md:px-6">Contact</div>
      </div>
    </div>
  );
};

export default Banner;
// ${visible ? "top-10 opacity-100 transition-all" : "top-[-60px] opacity-0 transition-all"}
