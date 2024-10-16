import "./Banner.css";

const Banner = () => {
  // const [position, setPosition] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.scrollY;
  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // const isVisible = visible ? "visible" : "hide";

  return (
    <div
      className={`visible banner-responsive fixed w-full lg:h-[50px] h-[45px] text-black items-center justify-center z-50 hidden md:flex`}
    >
      <nav className="flex justify-center px-2 items-center bg-white opacity-90 rounded-full h-full min-w-fit whitespace-nowrap lg:text-[20px] text-[17px] lg:w-auto">
        {/* <a href="#Home" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          Home
        </a> */}
        <a href="#CSWork" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          CS Work
        </a>
        <a href="#DesignLab" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          Design Lab
        </a>
        <a href="#About" className="font-IBMMedium px-2 lg:px-6 md:px-4">
          About
        </a>
        {/* <a href="#Contact" className="font-IBMMedium px-2 lg:px-6 md:px-4">
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
