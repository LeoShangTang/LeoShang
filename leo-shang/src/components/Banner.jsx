import { useEffect, useState, useRef } from "react";

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-10 left-0 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-[100px]"
      }`}
    >
      <div className="banner-responsive h-[55px] text-black flex items-center justify-center z-10">
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
