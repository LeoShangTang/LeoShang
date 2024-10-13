import ProjectCard from "./ProjectCard";
import CsProjects from "../../assets/CsProjects/CsProjects.json";

const DesignLab = () => {
  return (
    <section
      id="CSWork"
      className="h-fit min-h-screen w-full flex flex-col items-center justify-center mt-32 pt-20"
    >
      <div className="sub-title-text-responsive text-center mb-3">
        Design Lab
      </div>
      {CsProjects.DesignWork.map((designWork) => (
        <ProjectCard
          project={designWork}
          viewWork={() => {
            console.log("hello");
          }}
        />
      ))}
    </section>
  );
};

export default DesignLab;
