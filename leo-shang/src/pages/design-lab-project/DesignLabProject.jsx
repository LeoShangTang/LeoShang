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
        className="animate-fade-in-intro1 flex flex-row flex-wrap justify-center min-h-fit w-full
             h-[225px] lg:h-[530px] md:h-[400px] sm:h-[300px] mt-[5%]"
      >
        {project.images.slice(1).map((image, index) => (
          <ImageOptimized
            key={index}
            src={image}
            hash={project.hashes[index + 1]} // Offset the index to match the hashes
            name={project.name}
            styles={"mb-[2%] rounded-[30px] bg-white w-[40%] mx-[1%] h-fit"}
          />
        ))}
      </section>
    </ProjectPage>
  );
};

export default DesignLabProject;
