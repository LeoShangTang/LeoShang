import { useNavigate, useParams } from "react-router-dom";
import CsProjects from "./../../assets/CsProjects/CsProjects.json";
import { useEffect, useState } from "react";
import Loading from "../../global-components/Loading";

const CSProject = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
                element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
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
      {showLoader ? (
        <Loading />
      ) : (
        <div
          className="flex flex-col relative h-fit justify-center bg-white bg-opacity-[75%]
         my-[38px] lg:my-[90px] md:my-[68px] sm:my-[51px]
         p-[13px] lg:p-[30px] md:p-[23px] sm:p-[17px]
         w-[422px] lg:w-[1000px] md:w-[750px] sm:w-[563px]
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

          <section
            className="flex flex-row justify-between w-full 
      mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
          >
            <div className="flex flex-col w-fit ml-[15px]">
              <div
                className="font-IBMMedium
           text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
              >
                Roles
              </div>
              <ul className="list-disc pl-5">
                {project.roles.map((role) => (
                  <li
                    className="font-IBMRegular
              text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
                  >{`${role}`}</li>
                ))}
              </ul>
            </div>
            <div
              className="font-IBMMedium text-[#000000] mr-[15px]
        text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
            >{`Status: ${project.status}`}</div>
          </section>

          <section
            className="h-fit mx-[15px]
      mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
            id="Process"
          >
            <div
              className="font-IBMMedium 
        text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]
        mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]"
            >
              Predesign
            </div>
            <div
              className="font-IBMRegular
         text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
            >
              {project.predesignDescription}
            </div>
          </section>

          <section
            className="h-fit mx-[15px]
      mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
          >
            <div
              className="font-IBMMedium
          mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
        text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
            >
              User Goals
            </div>
            <div
              className="font-IBMRegular 
         text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
            >
              {project.userGoals.map((userGoal) => (
                <div className="mb-[30px]">
                  <div
                    className="font-IBMMedium
               text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
                  >
                    {userGoal.title}
                  </div>
                  <ul className="list-disc pl-5">
                    <li
                      className="font-IBMRegular
                 text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
                    >
                      {`Goal: ${userGoal.goal}`}
                    </li>
                    <li
                      className="font-IBMRegular  
                text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
                    >
                      {`Resolve: ${userGoal.resolve}`}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="Prototypes" className="flex flex-col justify-center">
            <div
              className="font-IBMMedium
          mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
        text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
            >
              Prototyping
            </div>
            <img
              className=""
              src={project.images[2]}
              alt={`${project.name} Prototype`}
            />
          </section>
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
