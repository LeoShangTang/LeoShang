import { useEffect, useState } from "react";

const Banner = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isVisible = visible ? "visible" : "hidden";

  return (
    <div className={isVisible}>
      <div className="banner-responsive fixed top-10 left-0 w-full h-[55px] text-black flex items-center justify-center z-1">
        <div className="flex justify-center px-2 items-center bg-white opacity-90 rounded-full h-full min-w-fit whitespace-nowrap lg:w-auto">
          <div className="font-VCR px-2 md:px-4">Home</div>
          <div className="font-VCR px-2 md:px-4">About</div>
          <div className="font-VCR px-2 md:px-4">CS Portfolio</div>
          <div className="font-VCR px-2 md:px-4">Graphics Portfolio</div>
          <div className="font-VCR px-2 md:px-4">Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
