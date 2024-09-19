import CsProjects from "./../data/CsProjects.json";
import ProjectCard from "./ProjectCard";

const CSProjects = () => {
  const projects = CsProjects.CSProjects;
  return (
    <section
      id="CSProjects"
      className="h-fit min-h-screen w-full flex flex-col items-center justify-center mt-32 pt-20"
    >
      <div className="sub-title-text-responsive text-center mb-8">
        CS Projects
      </div>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            timestamp={project.timestamp}
            images={project.images}
            projectType={project.projectType}
            tags={project.tags}
          />
        );
      })}
    </section>
  );
};

export default CSProjects;
