import { useNavigate, useParams } from "react-router-dom";
import CsProjects from "./../../assets/CsProjects/CsProjects.json";
import { useEffect, useState } from "react";
import Loading from "../../global-components/Loading";
import RolesStatusText from "./RolesStatusText";
import PredesignSection from "./PredesignSection";
import UserGoalsSection from "./UserGoalsSection";
import PrototypingSection from "./PrototypingSection";

const CSProject = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // This ensures the scroll is immediate without animation
    }); // Scroll to top on component mount
  }, []);

  const project = CsProjects.CSProjects.find(
    (project) => project.name === name
  );

  if (!project.isPortfolioDone) {
    return (
      <div className=" flex justify-center items-center h-screen flex-col font-digifit text-center sub-title-text-responsive">
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
    <>
      {false ? (
        <Loading />
      ) : (
        <div
          className="flex flex-col relative h-fit justify-center 
         my-[38px] lg:my-[90px] md:my-[68px] sm:my-[51px]
         p-[13px] lg:p-[30px] md:p-[23px] sm:p-[17px]
         w-[422px] lg:w-[1000px] md:w-[750px] sm:w-[563px]
         sm:bg-white sm:bg-opacity-[75%]
         bg-none
         rounded-[20px] "
        >
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
                  element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
                }
              }, 0);
            }}
          >
            {"<- Return Home"}
          </div>
          <img
            className="mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px] rounded-[10px] shadow-md"
            src={project.images[1]}
            alt={`${project.name} Image 1`}
          />
          <RolesStatusText roles={project.roles} status={project.status} />
          {project.predesignDescription && (
            <PredesignSection
              predesignDescription={project.predesignDescription}
            />
          )}

          {project.userGoals && (
            <UserGoalsSection userGoals={project.userGoals} />
          )}

          {project.predesignDescription && (
            <PrototypingSection
              name={project.name}
              prototypeImage={project.images[2]}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CSProject;

{
  /* <div
        className="fixed top-[45%] right-0 z-50 p-4
          flex flex-col text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
      >
        <a
          className="text-[#525252] font-IBMMedium hover:text-black cursor-pointer mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]"
          href="#Intro"
        >
          Intro
        </a>
        <a
          className="text-[#525252] font-IBMMedium hover:text-black cursor-pointer mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]"
          href="#Process"
        >
          Process
        </a>
        <a
          className="text-[#525252] font-IBMMedium hover:text-black cursor-pointer mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]"
          href="#Prototypes"
        >
          Prototypes
        </a>
      </div> */
}
