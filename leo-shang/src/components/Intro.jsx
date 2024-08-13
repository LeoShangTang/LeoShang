const Intro = () => {
  return (
    <div className="flex flex-col static justify-center items-center bg-white bg-opacity-85 w-screen h-screen">
      <div className="reg-text-responsive font-VCR">Hi, I am</div>
      <div className="font-digifit text-center text-[4rem] 2xl:text-[12rem] xl:text-[10rem] lg:text-[8rem] md:text-[6rem] sm:text-[4rem]">
        Leo Shang
      </div>
      <div className="reg-text-responsive font-VCR w-[70%] text-center">
        A 3rd year computer science student at the University of British
        Columbia and aspiring UI/UX designer
      </div>
    </div>
  );
};

export default Intro;
