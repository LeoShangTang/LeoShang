import CsProjects from "../../assets/CsProjects/CsProjects.json";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

const CSProjects = () => {
  const projects = CsProjects.CSProjects;
  const navigate = useNavigate();

  return (
    <section
      id="CSWork"
      className="h-fit min-h-screen w-full flex flex-col items-center justify-center mt-32 pt-20"
    >
      <div className="sub-title-text-responsive text-center mb-3">CS Work</div>
      {projects.map((project) => {
        return (
          <ProjectCard
            project={project}
            viewWork={() => {
              navigate(`/project/${project.name}`);
            }}
          />
        );
      })}
    </section>
  );
};

export default CSProjects;
