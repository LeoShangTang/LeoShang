const ProjectCard = ({ name, timestamp, images, projectType, tags }) => {
  return (
    <section
      className="flex flex-row items-center justify-start rounded-[30px] my-[20px] bg-white bg-opacity-[75%] 
                 p-[17px] lg:p-[40px] md:p-[30px] sm:p-[22px]
                 h-[210px] w-[337px] lg:h-[500px] lg:w-[800px] md:h-[375px] md:w-[600px] sm:h-[280px] sm:w-[450px]"
    >
      <div className="flex flex-col h-full w-[60%] justify-between">
        <div>
          <div className="font-IBMBold h-fit text-[14px] lg:text-[34px] md:text-[25px] sm:text-[19px]">
            {name}
          </div>
          <div className="font-IBMMedium text-[8px] lg:text-[18px] md:text-[13px] sm:text-[10px]">
            {timestamp}
          </div>
          <div className="w-[90%]">
            <div
              className="font-IBMMedium w-fit bg-[#6FC7FE] rounded-full 
                          my-[7px] lg:my-[16px] md:my-[12px] sm:my-[9px]
                          px-[6.75px] py-[3.5px] lg:px-[16px] lg:py-[8px] md:px-[12px] md:py-[6px] sm:px-[9px] sm:py-[4.5px]
                          text-[7px] lg:text-[13px] md:text-[10px] sm:text-[9px]"
            >
              {projectType}
            </div>
            <div
              className="flex flex-wrap w-full 
                            gap-[7px] lg:gap-[16px] md:gap-[12px] sm:gap-[9px]
                            text-[7px] lg:text-[13px] md:text-[10px] sm:text-[9px]"
            >
              {tags.map((tag) => (
                <div
                  className="font-IBMMedium flex items-center justify-center w-fit bg-[#D9D9D9] rounded-full
                             px-[6.75px] py-[3.5px] lg:px-[16px] lg:py-[8px] md:px-[12px] md:py-[6px] sm:px-[9px] sm:py-[4.5px]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="flex justify-center items-center font-IBMRegular border-none bg-black text-white ml-0 rounded-[10px]
                     w-[65px] h-[20px] lg:w-[155px] lg:h-[45px] md:w-[116px] md:h-[34px] sm:w-[87px] sm:h-[26px]
                     text-[8px] lg:text-[18px] md:text-[13px] sm:text-[10px]"
        >
          View Work
        </button>
      </div>

      <div className="flex flex-col h-full w-fit justify-center items-center">
        <img src={images[0]} alt={`${name} preview`} />
      </div>
    </section>
  );
};

export default ProjectCard;
