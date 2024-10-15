import { useParams } from "react-router-dom";
import ImageOptimized from "../../global-components/ImageOptimized";
import ProjectPage from "../../global-components/ProjectPage";
import CsProjects from "./../../assets/CsProjects/CsProjects.json";

const DesignLabProject = () => {
  const { name } = useParams();
  const project = CsProjects.DesignWork.find(
    (project) => project.name === name
  );
  return (
    <ProjectPage scrollTo={"DesignLab"} project={project}>
      <section
        className="animate-fade-in-intro1 flex flex-col justify-center min-h-fit w-full
             h-[225px] lg:h-[530px] md:h-[400px] sm:h-[300px]"
      >
        <ImageOptimized
          src={project.images[1]}
          hash={project.hashes[1]}
          name={project.name}
          styles={
            "mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px] rounded-[10px]"
          }
        />
      </section>
    </ProjectPage>
  );
};

export default DesignLabProject;
