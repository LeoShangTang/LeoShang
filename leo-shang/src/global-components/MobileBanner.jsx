import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const MobileBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden visible">
      {/* Menu Icon */}
      {!isOpen ? (
        <div className="fixed left-2 mt-[20px] h-[0px] text-black flex items-center justify-center z-20">
          <IoIosMenu className="text-[50px]" onClick={toggleMenu} />
        </div>
      ) : (
        <div className="fixed left-2 mt-[20px] h-[0px] text-white flex items-center justify-center z-20">
          <IoIosMenu className="text-[50px]" onClick={toggleMenu} />
        </div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-10 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={toggleMenu} // Close the menu when clicked outside
      >
        <a
          href="#Home"
          className="font-IBMMedium text-white text-[40px] mb-[30px]"
        >
          Home
        </a>
        <a
          href="#About"
          className="font-IBMMedium text-white text-[40px] mb-[30px]"
        >
          About
        </a>
        <a
          href="#CSWork"
          className="font-IBMMedium text-white text-[40px] mb-[30px]"
        >
          CS Work
        </a>
        <a
          href="https://drive.google.com/file/d/1tejVYfIfNaG9MtQx6fwCBLotd5OgTMXw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-IBMMedium text-white text-[40px] mb-[30px]"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MobileBanner;
