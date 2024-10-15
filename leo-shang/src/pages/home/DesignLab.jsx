import ProjectCard from "../../global-components/ProjectCard";
import CsProjects from "../../assets/CsProjects/CsProjects.json";
import { useNavigate } from "react-router-dom";

const DesignLab = () => {
  const navigate = useNavigate();
  return (
    <section
      id="DesignLab"
      className="h-fit min-h-screen w-full flex flex-col items-center justify-center mt-32 pt-20"
    >
      <div className="sub-title-text-responsive text-center mb-3">
        Design Lab
      </div>
      {CsProjects.DesignWork.map((designWork) => (
        <ProjectCard
          project={designWork}
          viewWork={() => {
            navigate(`/designlab/${designWork.name}`);
          }}
        />
      ))}
    </section>
  );
};

export default DesignLab;
