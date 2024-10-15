import { useParams } from "react-router-dom";
import CsProjects from "./../../assets/CsProjects/CsProjects.json";
import RolesStatusText from "./RolesStatusText";
import PredesignSection from "./PredesignSection";
import UserGoalsSection from "./UserGoalsSection";
import PrototypingSection from "./PrototypingSection";
import ImageOptimized from "../../global-components/ImageOptimized";
import "./../../global-components/Animations.css";
import ProjectPage from "../../global-components/ProjectPage";

const CSProject = () => {
  const { name } = useParams();

  const project = CsProjects.CSProjects.find(
    (project) => project.name === name
  );

  return (
    <ProjectPage scrollTo={"CSWork"} project={project}>
      <section
        className="animate-fade-in-intro1 flex flex-col justify-center min-h-fit w-full
             h-[225px] lg:h-[530px] md:h-[400px] sm:h-[300px]"
      >
        <ImageOptimized
          src={project.images[1]}
          hash={project.hashes[1]}
          name={project.name}
          styles={
            "mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px] rounded-[10px] shadow-md"
          }
        />
      </section>
      <RolesStatusText roles={project.roles} status={project.status} />
      {project.predesignDescription && (
        <PredesignSection predesignDescription={project.predesignDescription} />
      )}

      {project.userGoals && <UserGoalsSection userGoals={project.userGoals} />}

      {project.predesignDescription && (
        <PrototypingSection
          name={project.name}
          prototypeImage={project.images[2]}
          hash={project.hashes[2]}
        />
      )}
    </ProjectPage>
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
