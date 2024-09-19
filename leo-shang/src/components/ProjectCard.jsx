const ProjectCard = ({ name, timestamp, images, projectType, tags }) => {
  return (
    <section className="h-[500px] w-[800px] rounded-[30px]  my-[20px] bg-white bg-opacity-[75%] flex flex-row items-center justify-start p-[40px]">
      <div className="flex flex-col h-full w-[60%] justify-between">
        <div>
          <div className="font-IBMBold text-[21px] h-fit lg:text-[34px] md:text-[28px] sm:text-[23px]">
            {name}
          </div>
          <div className="font-IBMMedium lg:text-[18px]">{timestamp}</div>
          <div className="w-[90%]">
            <div className="font-IBMMedium lg:text-[14px] w-fit my-4 px-5 py-2 bg-[#6FC7FE] rounded-full">
              {projectType}
            </div>
            <div className="flex flex-wrap w-full gap-4 lg:text-[14px]">
              {tags.map((tag) => (
                <div className="font-IBMMedium flex items-center justify-center w-fit px-5 py-2 bg-[#D9D9D9] rounded-full">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="flex  justify-center items-center ml-0 rounded-[10px] font-IBMMedium w-[154px] h-[42px] bg-black text-white">
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
