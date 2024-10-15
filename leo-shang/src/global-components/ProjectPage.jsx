import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CsProjects from "./../assets/CsProjects/CsProjects.json";

const ProjectPage = ({ children, scrollTo, project }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  if (!project.isPortfolioDone) {
    return (
      <div className="animate-fade-in-intro1 flex justify-center items-center h-screen flex-col font-digifit text-center sub-title-text-responsive">
        Under Construction
        <div
          className="font-IBMMedium
              ml-[15px]
              mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
              text-[#525252] hover:text-black cursor-pointer
              text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
          id="Intro"
          onClick={() => {
            navigate(`/`);
            setTimeout(() => {
              const element = document.getElementById("CSWork");
              if (element) {
                element.scrollIntoView({ behavior: "auto" }); // Smooth scroll to the section
              }
            }, 0);
          }}
        >
          {"<- Return Home"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-fit justify-center items-center w-screen">
      <div
        className="my-[38px] lg:my-[90px] md:my-[68px] sm:my-[51px]
         p-[13px] lg:p-[30px] md:p-[23px] sm:p-[17px]
         w-[400px] lg:w-[1000px] md:w-[750px] sm:w-[563px]
         sm:bg-white sm:bg-opacity-[75%] 
         bg-none
         rounded-[20px]"
      >
        <div
          className="animate-fade-in-left-intro1 font-IBMMedium
              ml-[15px]
              mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
              text-[#525252] hover:text-black cursor-pointer
              text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]
              h-full w-full"
          id="Intro"
          onClick={() => {
            navigate(`/`);
            setTimeout(() => {
              const element = document.getElementById(scrollTo);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
              }
            }, 0);
          }}
        >
          {"<- Return Home"}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProjectPage;
