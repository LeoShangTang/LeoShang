const Intro = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center w-full h-screen lg:min-h-[700px]"
    >
      <div className="reg-text-responsive">Hi, I'm</div>
      <div className="title-text-responsive text-center my-[40px] lg:my-[95px] md:my-[72px] sm:my-[54px]">
        Leo Shang
      </div>
      <div className="reg-text-responsive w-[70%] lg:w-[1000px] md:w-[700px] sm:w-[500px] text-center">
        A 3rd year computer science student at the University of British
        Columbia and aspiring UI/UX designer
      </div>
    </section>
  );
};

export default Intro;
